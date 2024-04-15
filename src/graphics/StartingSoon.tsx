import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components'
import { createRoot } from 'react-dom/client';
import { Background } from './components/Background';

//Theme:
//#f04888
//#eae6f3

export function StartingSoon() {

	return (
		<StyledStartingSoon>
			<Background />
			<Content>
				<LogoArea>
					<SWLogo src="/bundles/chishoals-layouts/images/SW_Logo.png" alt="SquidWest Logo" />
				</LogoArea>
				<TextArea>
					<TitleText>SquidWest</TitleText>
					<SubtitleText>MidWest Splatoon Players</SubtitleText>
					<SocialsRow>
						<SocialsText>@squidwest</SocialsText>
						<SocialsText>discord.io/squidwest</SocialsText>
					</SocialsRow>
				</TextArea>
			</Content>
		</StyledStartingSoon>
	);
}

const StyledStartingSoon = styled.div`
	position: relative;
	width: 1920px;
	height: 1080px;
`;

const Content = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-rows: 1fr max-content;
`;

const LogoArea = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: center;
`;

const TextArea = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	text-align: center;

	color: #fff;
`;

const TitleText = styled.div`
	font-size: 8rem;
	color: #23eb00;
	//text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff;
	-webkit-text-stroke: 3px white;
`;

const SubtitleText = styled.div`
	font-size: 6rem;
	color: #23eb00;
	-webkit-text-stroke: 2px white;
`;

const SocialsText = styled.div`
	font-size: 5rem;
	color: #f10059;
	-webkit-text-stroke: 2px white;
`;

const SocialsRow = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;

const SWLogo = styled.img`
	object-fit: contain;	
`;

const root = createRoot(document.getElementById('root')!);
root.render(<StartingSoon />);