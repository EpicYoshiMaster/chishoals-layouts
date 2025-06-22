import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components'
import { createRoot } from 'react-dom/client';
import { Background } from './Background';
import { YoutubeLogo, DiscordLogo, TwitterLogo, Butterfly } from "@phosphor-icons/react";
import { useReplicant } from '@nodecg/react-hooks';
import { Socials } from 'schemas/socials';
import { EventData, EventInfo } from 'schemas/eventData';
import { CarouselComponent } from './CarouselComponent';
import { getSocialPlatformIcon } from '../../helpers/utils';

interface BreakScreenProps {
	message: string;
}

export const BreakScreen: React.FC<BreakScreenProps> = ({ message }) => {
	const [eventData] = useReplicant<EventData>('eventData', { bundle: 'squidwest-layout-controls'});
	const [socials] = useReplicant<Socials>('socials', { bundle: 'squidwest-layout-controls'});
	
	const [currentEvent, setCurrentEvent] = useState<EventInfo>({ name: "Current Event Name", location: "Event Location", number: 1, date: "Today" });
	
	useEffect(() => {
		if(!eventData) return;
	
		setCurrentEvent(eventData.currentEvent);
	}, [eventData]);

	return (
		<StyledBreakScreen>
			<Background />
			<Content>
				<LogoArea>
					<SWLogo src="/bundles/chishoals-layouts/images/SW_Logo.png" alt="SquidWest Logo" />
				</LogoArea>
				<TextArea>
					<CarouselWrapper>
						<CarouselComponent speed={15000} transitionSpeed={3000}>
							<CarouselItem>
								<TitleText>SquidWest</TitleText>
								<SubtitleText>MidWest Splatoon Players</SubtitleText>
							</CarouselItem>
							<CarouselItem>
							<TitleText>{currentEvent.name} {currentEvent.number > 0 ? '#' + currentEvent.number  : ''}</TitleText>
								<SubtitleText>{message}</SubtitleText>
							</CarouselItem>
						</CarouselComponent>
					</CarouselWrapper>
					<CarouselComponent speed={10000} transitionSpeed={3000}>
						{socials && socials.map((group, groupIndex) => (
							<CarouselItem key={groupIndex}>
								<SocialsRow>
									{group.items.map((entry, entryIndex) => (
										<SocialsItem key={entryIndex}>
											{getSocialPlatformIcon(entry.platform)}
											<SocialsText>{entry.social}</SocialsText>
										</SocialsItem>
									))}
								</SocialsRow>
							</CarouselItem>
						))}
						{!socials && (
							<div></div>
						)}
					</CarouselComponent>
				</TextArea>
			</Content>
		</StyledBreakScreen>
	);
}

const StyledBreakScreen = styled.div`
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
`;

const CarouselWrapper = styled.div`
	position: relative;	
`;

const CarouselItem = styled.div`
	position: relative;
`;

const TitleText = styled.div`
	font-size: 8rem;
	color: var(--break-main-text);
	-webkit-text-stroke: 3px var(--break-main-outline);
`;

const SubtitleText = styled.div`
	font-size: 6rem;
	color: var(--break-main-text);
	-webkit-text-stroke: 2px var(--break-main-outline);
`;

const SocialsText = styled.div`
	-webkit-text-stroke: 2px var(--break-socials-outline);
`;

const SocialsRow = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	font-size: 2.75rem;
	color: var(--break-socials-text);
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