import NodeCG from '@nodecg/types';
import { useCallback, useEffect, useState } from 'react';
import { useReplicant, UseReplicantOptions } from '@nodecg/react-hooks';
import { Jsonify } from 'type-fest';

type ConnectionOptions = { onConnect?: () => void, onDisconnect?: () => void}

export const useObsConnectionStatus = (nodecg: NodeCG.ClientAPI, options?: ConnectionOptions) => {
	const [ connected, setConnected ] = useState(false);

	const onConnectionStatus = (value: {isConnected: boolean }) => {
		setConnected(value.isConnected);

		if(options) {
			if(options.onConnect && value.isConnected) {
				options.onConnect();
			}

			if(options.onDisconnect && !value.isConnected) {
				options.onDisconnect();
			}
		}
	};

	useEffect(() => {
		nodecg.listenFor('obsConnectionStatus', 'squidwest-layout-controls', onConnectionStatus);

		return () => {
			nodecg.unlisten('obsConnectionStatus', 'squidwest-layout-controls', onConnectionStatus);
		}
	}, []);

	return connected;
}

export const useWrappedReplicant = <V, T = Jsonify<V>>(replicantName: string, defaultValue: T, bundle?: string, persistent?: boolean) => {
	const [replicant, setReplicant] = useReplicant<V, T>(replicantName, { bundle, defaultValue, persistent });
	const [value, setValue] = useState<T>(defaultValue);

	useEffect(() => {
		if(!replicant) return;

		setValue(replicant);
	}, [replicant, setValue]);

	return [value, setReplicant] as const;
}