import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components'
import { createRoot } from 'react-dom/client';
import { Omnibar } from './components/Omnibar';
import { Background } from './components/Background';

//Theme:
//#f04888
//#eae6f3

export function OmnibarOnly() {
	return (
		<StyledOmnibarOnly>
			<Content>
				<div />
				<Omnibar />
			</Content>
		</StyledOmnibarOnly>
	);
}

const StyledOmnibarOnly = styled.div`
	position: relative;
	width: 1920px;
	height: 1080px;
	background-color: transparent;
`;

const Content = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	
	display: grid;
	grid-template-rows: 0.85fr 0.15fr;
`;

const root = createRoot(document.getElementById('root')!);
root.render(<OmnibarOnly />);