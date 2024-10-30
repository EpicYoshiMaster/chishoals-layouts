import { Configschema } from '../types/schemas/configschema';
import NodeCG from '@nodecg/types';
import Package from '../../package.json'
import { OBSControl } from './OBSControl';
import { ObsData } from '../types/schemas';
import { Logger, TimeLogger } from './Logger';

export = async (nodecg: NodeCG.ServerAPI<Configschema>) => {

	console.log(`[HI FROPPY] You're using ${Package.name} Version ${Package.version} (${Package.chishoals.month})`);

	const timeLogger = new TimeLogger(`${Package.name}-Time`, true);

	const onConnect = (obs: OBSControl) => {
		nodecg.sendMessage('obsConnectionStatus', { isConnected: true });
	}

	const onDisconnect = (obs: OBSControl) => {
		nodecg.sendMessage('obsConnectionStatus', { isConnected: false });
	}

	const onCurrentProgramSceneChanged = (obs: OBSControl, event: {sceneName: string}) => {
		const timeStamp = Date.now();
		nodecg.sendMessage('onSceneChange', { sceneName: event.sceneName, timeStamp: timeStamp});

		timeLogger.addTime(`On OBS Scene: ${event.sceneName}`, timeStamp);
	}

	const onStreamStateChanged = (obs: OBSControl, event: { outputActive: boolean; outputState: string; }) => {
		if(event.outputActive && event.outputState === 'OBS_WEBSOCKET_OUTPUT_STARTED') {
			timeLogger.startRecord("Stream Started", Date.now());
		}
		else if(!event.outputActive && event.outputState === 'OBS_WEBSOCKET_OUTPUT_STOPPED') {
			timeLogger.endRecord("Stream Ended", Date.now());
		}
	};

	const obs = new OBSControl({ onConnect, onDisconnect, onCurrentProgramSceneChanged, onStreamStateChanged });

	nodecg.listenFor('setObsConnection', (value: { connect: boolean, settings: ObsData }, ack) => {

		if(value.connect) {

			obs.connect(value.settings.serverIp, value.settings.serverPort, value.settings.serverPassword).then(() => {
				if(ack && !ack.handled) {
					ack(null, "OBS Connection Successful!");
				}
			}).catch((e) => {
				if(ack && !ack.handled) {
					ack(e);
				}
			})
		}
		
	})

	/*
	const obs = new OBSControl(nodecg);

	nodecg.listenFor('Hooray', () => {
		const easeInExpo = (alpha: number): number => {
            return (alpha <= 0) ? 0 : Math.pow(2, 10 * alpha - 10);
        }

		const easeOutExpo = (alpha: number): number => {
			return (alpha >= 1) ? 1 : 1 - Math.pow(2, -10 * alpha);
		}

		obs.setCurrentProgramScene('Game');
		obs.transitionInputVolume('Music', 3000, -100, 0, easeInExpo);
		obs.transitionInputVolume('Bottom Video Game', 3000, 0, -100, easeOutExpo);
	});*/
}