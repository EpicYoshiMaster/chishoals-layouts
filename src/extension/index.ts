import { Configschema } from '../types/schemas/configschema';
import NodeCG from '@nodecg/types';
//import { OBSControl } from './OBSControl';

export = async (nodecg: NodeCG.ServerAPI<Configschema>) => {

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