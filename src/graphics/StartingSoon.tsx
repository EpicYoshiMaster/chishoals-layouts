import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components'
import { createRoot } from 'react-dom/client';
import { Background } from './components/Background';
import { YoutubeLogo, DiscordLogo, TwitterLogo, Butterfly  } from "@phosphor-icons/react";
import { useReplicant } from '@nodecg/react-hooks';
import { EventData, EventInfo, Socials } from 'schemas';
import { CarouselComponent } from './components/CarouselComponent';

export function StartingSoon() {

	const [eventData] = useReplicant<EventData>('eventData', { bundle: 'squidwest-layout-controls'});
	const [socials] = useReplicant<Socials>('socials', { bundle: 'squidwest-layout-controls'});

	const [currentEvent, setCurrentEvent] = useState<EventInfo>({ name: "Current Event Name", location: "Event Location", number: 1, date: "Today" });

	useEffect(() => {
		if(!eventData) return;
   
		setCurrentEvent(eventData.currentEvent);
	}, [eventData]);

	return (
		<StyledStartingSoon>
			<Background />
			<Content>
				<LogoArea>
					<SWLogo src="/bundles/chishoals-layouts/images/SW_Logo.png" alt="SquidWest Logo" />
				</LogoArea>
				<TextArea>
					<CarouselWrapper>
						<CarouselComponent speed={15000} transitionSpeed={3000} indexRelative={1}>
							<CarouselItem>
								<TitleText>SquidWest</TitleText>
								<SubtitleText>MidWest Splatoon Players</SubtitleText>
							</CarouselItem>
							<CarouselItem>
								<TitleText>{currentEvent.name} {currentEvent.number > 0 ? '#' + currentEvent.number  : ''}</TitleText>
								<SubtitleText>Starting Soon!</SubtitleText>
							</CarouselItem>
						</CarouselComponent>
					</CarouselWrapper>
					<SocialsRow>
						<SocialsItem>
							<YoutubeLogo />
							<SocialsText>{socials ? socials.youtube : ""}</SocialsText>
						</SocialsItem>
						<SocialsItem>
							<TwitterLogo />
							<SocialsText>{socials ? socials.twitter : ""}</SocialsText>
						</SocialsItem>
						<SocialsItem>
							<Butterfly />
							<SocialsText>{socials ? socials.bluesky : ""}</SocialsText>
						</SocialsItem>
						<SocialsItem>
							<DiscordLogo />
							<SocialsText>{socials ? socials.discord : ""}</SocialsText>
						</SocialsItem>
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

const CarouselWrapper = styled.div`
	position: relative;	
`;

const CarouselItem = styled.div`
	position: relative;
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
	-webkit-text-stroke: 2px white;
`;

const SocialsRow = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	font-size: 2.75rem;
	color: #f10059;
`;

const SocialsItem = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const SWLogo = styled.img`
	object-fit: contain;	
`;

const root = createRoot(document.getElementById('root')!);
root.render(<StartingSoon />);