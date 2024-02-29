import type NodeCG from '@nodecg/types';
import { Configschema } from '../types/schemas/configschema';
import OBSWebSocket, { EventTypes } from 'obs-websocket-js';

export class OBSControl {
    private readonly nodecg: NodeCG.ServerAPI<Configschema>;
    private socket: OBSWebSocket;

    constructor(nodecg: NodeCG.ServerAPI<Configschema>) {
        this.nodecg = nodecg;
        this.socket = new OBSWebSocket();

        if(this.nodecg.bundleConfig.obs) {
            this.connect().catch(() => {});
        }
    }

    async connect(): Promise<void> {
        if(!this.nodecg.bundleConfig.obs) return;

        try {
            await this.socket.connect(this.nodecg.bundleConfig.obs.url, this.nodecg.bundleConfig.obs.password);

            console.log("OBS Connected");
        }
        catch(e) {
            throw new Error(`OBS Connection Failed: ${e instanceof Error ? e.message : String(e)}`);
        }
    }

    setCurrentProgramScene(scene: string): Promise<void> {
        return this.socket.call('SetCurrentProgramScene', {sceneName: scene});
    }

    async transitionInputVolume(input: string, transitionTime: number, targetDb: number, startDb?: number, interpFunc?: (alpha: number) => number) {
        if(startDb) {
            await this.setInputVolume(input, startDb);
        }

        const { inputVolumeDb } = await this.getInputVolume(input);

        let startTime = new Date().getTime();

        const lerp = (a: number, b: number, alpha: number) => { return a + alpha * (b - a)};
        const clamp = (value: number, min: number, max: number) => { return Math.min(Math.max(value, min), max)};

        let setVolumeInterval = setInterval(() => { 
            const alpha = (new Date().getTime() - startTime) / transitionTime;
            this.setInputVolume(input, lerp(inputVolumeDb, targetDb, clamp(interpFunc ? interpFunc(alpha) : alpha, 0, 1)));
            console.log(`${input} - alpha: ${alpha}, dB: ${lerp(inputVolumeDb, targetDb, clamp(interpFunc ? interpFunc(alpha) : alpha, 0, 1))}`);
        }, 10);

        await setTimeout(() => {
            clearInterval(setVolumeInterval)
            this.setInputVolume(input, targetDb);
            console.log(`${input} - DONE, dB: ${targetDb}`);
        }, transitionTime);
    }

    getInputVolume(input: string): Promise<{inputVolumeDb: number, inputVolumeMul: number}> {
        return this.socket.call('GetInputVolume', {inputName: input});
    }

    setInputVolume(input: string, dB: number): Promise<void> {
        return this.socket.call('SetInputVolume', {inputName: input, inputVolumeDb: dB});
    }
}