
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
			<GridRow $height='56px'>
				<Button $expand onClick={() => { showSponsor(); }}>Show Sponsor</Button>
				<Button $expand onClick={() => { hideSponsor(); }}>Hide Sponsor</Button>
			</GridRow>
		</PanelContainer>
	)
}

const PanelContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
	padding: 5px 10px 12px;	
`;

const GridRow = styled.div<{ $height?: string }>`
	position: relative;
	margin: 5px 0;
	display: grid;
	width: 100%;
	gap: 5px;
	height: ${({ $height }) => $height ? $height : 'auto'};
	grid-auto-columns: 1fr;
	grid-auto-flow: column;
	align-items: center;
`;

const Button = styled.button<{ $colorTag?: string, $expand?: boolean }>`
	position: relative;
	padding: 6px 10px;
	font-size: 1.1rem;
	font-weight: bold;
	
	border-radius: 0.25rem;
	margin: 0;
	color: var(--text);
	background-color: #a25dcf;
	border: none;

	height: ${({ $expand }) => $expand ? '100%' : 'auto'};
	width: ${({ $expand }) => $expand ? '100%' : 'auto'};

	display: flex;
	justify-content: center;
	align-items: center;

	&:not(:disabled):hover {
		background-color: #753b9c;
	}

	&:not(:disabled):active {
		background-color: #50246d;
	}

	&:disabled {
		opacity: 0.5;
	}
`;

const root = createRoot(document.getElementById('root')!);
root.render(<React.StrictMode><IPG /></React.StrictMode>);