import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components'
import { CarouselComponent } from './components/CarouselComponent';
import { GithubLogo, DiscordLogo, TwitterLogo, Butterfly } from "@phosphor-icons/react";
import { createRoot } from 'react-dom/client';
import { useReplicant } from '@nodecg/react-hooks';
import { CreditsData } from 'schemas/creditsData';
import { EventInfo, EventData } from 'schemas/eventData';
import { getImagePath } from '../helpers/utils';
import { FittedText } from './components/FittedText';

const namesWidth = 1920 - 400;
const maxNamesPerColumn = 10;

//Distribute names equally when greater than the max number per column exist
const namesPerColumn = (numNames: number) => {
    if(numNames <= maxNamesPerColumn) return numNames;

    const numColumnns = Math.ceil(numNames / maxNamesPerColumn);

    return Math.ceil(numNames / numColumnns);
}

const nameSpace = (totalWidth: number, numNames: number) => {
    const numColumnns = Math.ceil(numNames / maxNamesPerColumn);

    return Math.floor(totalWidth / numColumnns) - 10;
}

export function Credits() {
    const [eventData] = useReplicant<EventData>('eventData', { bundle: 'squidwest-layout-controls'});

    const [currentEvent, setCurrentEvent] = useState<EventInfo>({ name: "Current Event Name", location: "Event Location", number: 1, date: "Today" });
	const [nextEvent, setNextEvent] = useState<EventInfo>({ name: "Next Event Name", location: "Next Event Location", number: 2, date: "January 1, 2024" });

    const [creditsData] = useReplicant<CreditsData>('creditsData', { bundle: 'squidwest-layout-controls'});

	useEffect(() => {
		if(!eventData) return;

		setCurrentEvent(eventData.currentEvent);
		setNextEvent(eventData.nextEvent);
	}, [eventData]);

    const getSpecialCreditsRow = useCallback((credit: string, index: number) => {
        switch(credit) {
            case "CURRENTEVENT": return (
                <CreditsRow key={index}>
                    <TitleText>{currentEvent.name} {currentEvent.number > 0 ? '#' + currentEvent.number  : ''}</TitleText>
                </CreditsRow>
            )

            case "NEXTEVENT": return (
                <CreditsRow key={index}>
                    <TitleText>{nextEvent.name} {nextEvent.number > 0 ? '#' + nextEvent.number  : ''}</TitleText>
                    <NameText>{nextEvent.location}</NameText>
                    <NameText>{nextEvent.date}</NameText>
                    <NameText>See you there!</NameText>
                </CreditsRow>
            )

            case "YOSHI": return (
                <CreditsRow key={index}>
                    <HeaderText>Stream Overlays and Design</HeaderText>
                    <YoshiRow>
                        <img src="/bundles/chishoals-layouts/images/misc/harmonypixel.gif" alt="Harmony Pixel" />
                        <YoshiSpan><YoshiText>EpicYoshiMaster</YoshiText></YoshiSpan>
                        <img src="/bundles/chishoals-layouts/images/misc/harmonypixel.gif" alt="Harmony Pixel" />
                    </YoshiRow>
                    <Divider />
                    <NameText>Need stream overlays for your event?</NameText>
                    <NameText>Contact me!</NameText>
                    <YoshiRow>
                        <NameText>epicyoshimaster.neocities.org</NameText>
                    </YoshiRow>
                    <YoshiRow>
                        <DiscordLogo />
                        <NameText>@epicyoshimaster</NameText>
                    </YoshiRow>
                    <YoshiRow>
                        <Butterfly />
                        <NameText>@epicyoshimaster.bsky.social</NameText>
                    </YoshiRow>
                    <YoshiRow>
                        <GithubLogo />
                        <NameText>EpicYoshiMaster</NameText>
                    </YoshiRow>
                    <YoshiRow>
                        <TwitterLogo />
                        <NameText>@EpicYoshiMaster</NameText>
                    </YoshiRow>
                </CreditsRow>    
            )
        }

        return undefined;
    }, [currentEvent, nextEvent]);

	return (
        <StyledCredits>
            <Content>
                <CarouselComponent speed={10000} transitionSpeed={3000} once={true}>
                    {creditsData && creditsData.map((creditsRow, index) => {

                        const specialCreditsRow = getSpecialCreditsRow(creditsRow.name, index);

                        if(specialCreditsRow) return specialCreditsRow;

                        return (
                            <CreditsRow key={index}>
                                {creditsRow.image && creditsRow.imageBundle && (
                                    <LogoRow>
                                        <Logo src={getImagePath(creditsRow.imageBundle, creditsRow.image)} />
                                    </LogoRow>
                                )}
                               <HeaderText><FittedText text={creditsRow.name} align="center" font="Splatoon" maxWidth={1900} /></HeaderText>
                               <NamesList $namesPerColumn={namesPerColumn(creditsRow.items.length)}>
                                {creditsRow.items.map((name, index, array) => (
                                    <NameText key={index}><FittedText text={name} align="center" font="Splatoon" maxWidth={nameSpace(namesWidth, array.length)} /></NameText>
                                ))}
                               </NamesList>
                            </CreditsRow>
                        )
                    })}
                </CarouselComponent>
            </Content>
        </StyledCredits>
    )
}

const StyledCredits = styled.div`
    position: relative;

    width: 1920px;
    height: 1080px;
`;

const Content = styled.div`
    position: relative;

    width: 100%;
    height: 100%;

    color: var(--credits-text);
    background-color: var(--credits-bg);

    overflow: hidden;
`;

const CreditsRow = styled.div`
    position: relative;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LogoRow = styled.div`
    position: relative;
    display: flex;
    max-height: 400px;
    max-width: 400px;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    font-size: 3rem;
`;

const Logo = styled.img`
    max-width: 100%;
    max-height: 100%;

    object-fit: contain;
`;

const TitleText = styled.div`
    font-weight: bolder;
    font-size: 7rem;
`;

const HeaderText = styled.div`
    font-weight: bolder;
    font-size: 6rem;
`;

const NameText = styled.div`
    font-weight: normal;
    font-size: 3rem;
`;

const NamesList = styled.div<{ $namesPerColumn: number }>`
    position: relative;
    display: grid;
    grid-template-rows: repeat(${({ $namesPerColumn }) => $namesPerColumn}, 55px);
    grid-auto-flow: column;
    grid-auto-columns: minmax(0, 1fr);
    justify-items: center;
    padding: 0 200px;
    
    width: 100%;
    max-height: 550px;
`;

const YoshiRow = styled(LogoRow)`
    gap: 20px;

    & img {
        height: 5rem;
    }
    
    svg {
        width: 1em;
        object-fit: contain;
        font-size: 3rem;
        flex-shrink: 0;
   } 
`;

const YoshiText = styled(NameText)`
    position: relative;
    font-size: 5rem;
    font-weight: bold;

    color: var(--credits-text);
    background: var(--credits-bg);

    mix-blend-mode: multiply;
`;

const YoshiSpan = styled.span`
    background: linear-gradient(to right, transparent 0% 13%, #424fff 13% 16%, transparent 16% 17%, #65b5ff 17% 19%, transparent 19% 100%), 
    linear-gradient(to right, transparent 0% 41%, #65b5ff 41% 43%, transparent 43% 100%),
    linear-gradient(to right, transparent 0% 56%, #fe64ab 56% 59%, #a1b4a8 59%, 61%, transparent 61% 100%),
    linear-gradient(to right, #ff86d5 0% 25%, #00ddab 25% 50%, #ff86d5 50% 75%, #00ddab 75% 100%);
    background-size: 25%;
`;

const Divider = styled.div`
    width: 100%;
    height: 10%;
`;

const root = createRoot(document.getElementById('root')!);
root.render(<Credits />);