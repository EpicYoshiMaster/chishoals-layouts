
import React, { useCallback } from 'react';
import styled from 'styled-components'
import NodeCG from '@nodecg/types';
import { createRoot } from 'react-dom/client';

export function IPG() {
	const showSponsor = useCallback(() => {
		nodecg.sendMessage('ipgControl', true);
	}, []);

	const hideSponsor = useCallback(() => {
		nodecg.sendMessage('ipgControl', false);
	}, []);

	return (
		<PanelContainer>
			<InputButton onClick={() => { showSponsor(); }}>Show Sponsor</InputButton>
			<InputButton onClick={() => { hideSponsor(); }}>Hide Sponsor</InputButton>
		</PanelContainer>
	)
}

const PanelContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const InputButton = styled.button`
	margin: 10px;
	padding: 10px 50px;
	font-size: 1.5rem;
	font-weight: bold;
	border: none;
	border-radius: 0.5rem;
	color: #ffffff;
	background-color: #d346fe;

	&:not(:disabled):hover {
		background-color: #5f2573;
	}

	&:not(:disabled):active {
		background-color: #4c1d5c;
	}

	&:disabled {
		opacity: 0.5;
	}
`;

const root = createRoot(document.getElementById('root')!);
root.render(<React.StrictMode><IPG /></React.StrictMode>);