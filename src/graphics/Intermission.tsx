import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components'
import { createRoot } from 'react-dom/client';
import { Omnibar } from './components/Omnibar';
import { Background } from './components/Background';

//Theme:
//#f04888
//#eae6f3

export function Intermission() {
	return (
		<StyledIntermission>
			<Background />
			<Content>
				<TopRow>
					<Feed />
					<Feed />
				</TopRow>
				<MiddleRow>
					<Feed />
				</MiddleRow>
				<Omnibar />
			</Content>
		</StyledIntermission>
	);
}

const StyledIntermission = styled.div`
	position: relative;
	width: 1920px;
	height: 1080px;
`;

const Content = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	
	display: grid;
	grid-template-rows: 0.5fr 0.35fr 0.15fr;
`;

const TopRow = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	margin: 0;
	padding: 20px 40px;

	box-sizing: border-box;
`;

const MiddleRow = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	margin: 10px 10px;
`;

const Feed = styled.div`
	width: auto;
	height: 100%;
	aspect-ratio: 16/9;
	box-sizing: content-box;

	border: 8px solid #f04888;
	background-color: #eae6f3;
`;

const root = createRoot(document.getElementById('root')!);
root.render(<Intermission />);