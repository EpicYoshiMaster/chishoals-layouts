import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components'
import { CarouselComponent } from './components/CarouselComponent';
import { GithubLogo, DiscordLogo, TwitterLogo  } from "@phosphor-icons/react";
import { createRoot } from 'react-dom/client';
import { useReplicant } from '@nodecg/react-hooks';
import { EventData, CreditsData, EventInfo } from '../types/schemas';

export function Credits() {
    const [eventData, setEventData] = useReplicant<EventData>('eventData');

    const [currentEvent, setCurrentEvent] = useState<EventInfo>({ name: "Current Event Name", location: "Event Location", number: 1, date: "Today" });
	const [nextEvent, setNextEvent] = useState<EventInfo>({ name: "Next Event Name", location: "Next Event Location", number: 2, date: "January 1, 2024" });

    const [creditsData, setCreditsData] = useReplicant<CreditsData>('creditsData');

	const [setupTeam, setSetupTeam] = useState([""]);
    const [techTeam, setTechTeam] = useState([""]);
	const [commentaryTeam, setCommentaryTeam] = useState([""]);
	const [staffTeam, setStaffTeam] = useState([""]);
	const [eventTeam, setEventTeam] = useState([""]);
    const [artTeam, setArtTeam] = useState([""]);

	useEffect(() => {
		if(!eventData) return;

		setCurrentEvent(eventData.currentEvent);
		setNextEvent(eventData.nextEvent);
	}, [eventData]);

    useEffect(() => {
		if(!creditsData) return;
   
		setSetupTeam(creditsData.setupTeam);
		setCommentaryTeam(creditsData.commentaryTeam);
		setTechTeam(creditsData.techTeam);
		setStaffTeam(creditsData.staffTeam);
		setEventTeam(creditsData.eventTeam);
        setArtTeam(creditsData.artTeam);
	}, [creditsData]);

	return (
        <StyledCredits>
            <Content>
                <CarouselComponent speed={10000} transitionSpeed={3000} once={true}>
                    <CreditsRow>
                        <TitleText>{currentEvent.name} {currentEvent.number > 0 ? '#' + currentEvent.number  : ''}</TitleText>
                    </CreditsRow>
                    <CreditsRow>
                        <HeaderText>Setup and Teardown Volunteers</HeaderText>
                        {
                            setupTeam.map((name, index) => {
                                return (
                                    <NameText key={index}>{name}</NameText>
                                )
                            })
                        }
                    </CreditsRow>
                    <CreditsRow>
                        <HeaderText>Commentary</HeaderText>
                        {
                            commentaryTeam.map((name, index) => {
                                return (
                                    <NameText key={index}>{name}</NameText>
                                )
                            })
                        }
                    </CreditsRow>
                    <CreditsRow>
                        <HeaderText>Stream Technicians</HeaderText>
                        {
                            techTeam.map((name, index) => {
                                return (
                                    <NameText key={index}>{name}</NameText>
                                )
                            })
                        }
                    </CreditsRow>
                    <CreditsRow>
                        <HeaderText>Artists</HeaderText>
                        {
                            artTeam.map((name, index) => {
                                return (
                                    <NameText key={index}>{name}</NameText>
                                )
                            })
                        }
                    </CreditsRow>
                    <CreditsRow>
                        <LogoRow>
                            <HeaderText>SquidWest TOs and Staff</HeaderText>
                            <SWLogo src="/bundles/chishoals-layouts/images/SW_Logo_bg.png" />
                        </LogoRow>
                        {
                            staffTeam.map((name, index) => {
                                return (
                                    <NameText key={index}>{name}</NameText>
                                )
                            })
                        }
                    </CreditsRow>
                    <CreditsRow>
                        <LogoRow>
                            <HeaderText>Event TO</HeaderText>
                            <Logo src="/bundles/chishoals-layouts/images/Chi-Shoals_Logo_Transparent_Green.png" />
                        </LogoRow>
                        {
                            eventTeam.map((name, index) => {
                                return (
                                    <NameText key={index}>{name}</NameText>
                                )
                            })
                        }
                    </CreditsRow>
                    <CreditsRow>
                        <HeaderText>Stream Overlays and Design</HeaderText>
                        <NameText>EpicYoshiMaster</NameText>
                        <Divider />
                        <NameText>Need stream overlays for your event?</NameText>
                        <NameText>Contact me!</NameText>
                        <LogoRow>
                            <StyledDiscordLogo />
                            <NameText>@epicyoshimaster</NameText>
                        </LogoRow>
                        <LogoRow>
                            <StyledTwitterLogo />
                            <NameText>@EpicYoshiMaster</NameText>
                        </LogoRow>
                        <LogoRow>
                            <StyledGithubLogo />
                            <NameText>EpicYoshiMaster</NameText>
                        </LogoRow>
                    </CreditsRow>
                    <CreditsRow>
                        <HeaderText>Special Thanks</HeaderText>
                    </CreditsRow>
                    <CreditsRow>
                        <LogoRow>
                            <HeaderText>I Play Games!</HeaderText>
                            <IPGLogo src="/bundles/chishoals-layouts/images/I_Play_Games.png" />
                        </LogoRow>
                        <NameText>Equipment, support, and collaboration</NameText>
                    </CreditsRow>
                    <CreditsRow>
                        <LogoRow>
                            <LibraryText>Harold Washington Library Staff</LibraryText>
                            <LibraryLogo src="/bundles/chishoals-layouts/images/CPL_Logo.png" />
                        </LogoRow>
                        <NameText>Location and support</NameText>
                    </CreditsRow>
                    <CreditsRow>
                        <HeaderText>Event Participants</HeaderText>
                        <NameText>These events aren't possible without you</NameText>
                    </CreditsRow>
                    <CreditsRow>
                        <HeaderText>Stream Viewers</HeaderText>
                        <NameText>We hope you enjoyed</NameText>
                    </CreditsRow>
                    <CreditsRow>
                        <TitleText>{nextEvent.name} {nextEvent.number > 0 ? '#' + nextEvent.number  : ''}</TitleText>
                        <NameText>{nextEvent.location}</NameText>
                        <NameText>{nextEvent.date}</NameText>
                        <NameText>See you there!</NameText>
                    </CreditsRow>
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

    color: #ffffff;
    background-color: #000000;

    overflow: hidden;
`;

const TitleText = styled.div`
    font-weight: bolder;
    font-size: 100px;
`;

const SubRow = styled.div<{}>`
    position: relative;
    margin: 20px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CreditsRow = styled.div<{}>`
    position: relative;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeaderText = styled.div`
    font-weight: bolder;
    font-size: 100px;
`;

const LibraryText = styled(HeaderText)`
    font-size: 80px;
`;

const NameText = styled.div`
    font-weight: normal;
    font-size: 50px;
`;

const LogoRow = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    font-size: 50px;
`

const Logo = styled.img`
    width: 20%;

    object-fit: contain;
`;

const SWLogo = styled(Logo)`
    margin-left: 20px;
    margin-bottom: 20px;
    width: 15%;
    height: auto;
`;

const IPGLogo = styled(Logo)`
    width: 25%;
`

const LibraryLogo = styled(Logo)`
    margin-left: 20px;
    border: 5px solid white;
    width: 20%;
`;

const StyledGithubLogo = styled(GithubLogo)`
	width: 1em;
    object-fit: contain;
	margin-right: 20px;
    font-size: 50px;
`;

const StyledTwitterLogo = styled(TwitterLogo)`
	width: 1em;
    object-fit: contain;
	margin-right: 20px;
    font-size: 50px;
`

const StyledDiscordLogo = styled(DiscordLogo)`
	width: 1em;
    object-fit: contain;
	margin-right: 20px;
    font-size: 50px;
`;

const Divider = styled.div`
    width: 100%;
    height: 10%;
`

const root = createRoot(document.getElementById('root')!);
root.render(<Credits />);