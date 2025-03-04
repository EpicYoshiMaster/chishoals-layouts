import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components'
import { createRoot } from 'react-dom/client';
import { Omnibar } from './components/Omnibar';

export function OmnibarOnly() {
	return (
		<StyledOmnibarOnly>
			<Content>
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
	padding-bottom: 12px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	
	width: 100%;
	height: 100%;
`;

const root = createRoot(document.getElementById('root')!);
root.render(<OmnibarOnly />);