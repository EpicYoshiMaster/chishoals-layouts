import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components'
import { Omnibar } from './components/Omnibar';

//Theme:
//#f04888
//#eae6f3

export function Intermission() {

	let bgOptions = ['/bundles/chishoals-layouts/images/bg_ika.png', '/bundles/chishoals-layouts/images/bg_octo.png', '/bundles/chishoals-layouts/images/bg_ika_octo.png'];
	const [option] = useState(Math.floor(Math.random() * (bgOptions.length)))

	return (
		<Background src={bgOptions[option]}>
			<TopRow>
				<Feed />
				<Feed />
			</TopRow>
			<MiddleRow>
				<Feed />
			</MiddleRow>
			<Omnibar />
		</Background>
	);
}

const Background = styled.div<{src: string}>`
	width: 1920px;
	height: 1080px;
	padding: 0px;

	background-size: 10%; //10%
	background-repeat: repeat;
	background-image: url(${props => props.src});
	background-color: #eae6f3;
	background-attachment: scroll;

	display: grid;
	grid-template-rows: 0.5fr 0.35fr 0.15fr;
    animation: scrolling 90s linear infinite;

	@keyframes scrolling {
  	from{
      	background-position: 1920px 1920px;
  	}
  	to{
      	background-position: 0 0;
  	}
	}
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