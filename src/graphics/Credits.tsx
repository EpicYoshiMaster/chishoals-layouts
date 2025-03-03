import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components'
import { CarouselComponent } from './components/CarouselComponent';
import { GithubLogo, DiscordLogo, TwitterLogo, Butterfly  } from "@phosphor-icons/react";
import { createRoot } from 'react-dom/client';
import { useReplicant } from '@nodecg/react-hooks';
import { EventData, CreditsData, EventInfo } from 'schemas';
import { CreditsNameRow } from './components/CreditsNameRow';

export function Credits() {
    const [eventData, setEventData] = useReplicant<EventData>('eventData', { bundle: 'squidwest-layout-controls'});

    const [currentEvent, setCurrentEvent] = useState<EventInfo>({ name: "Current Event Name", location: "Event Location", number: 1, date: "Today" });
	const [nextEvent, setNextEvent] = useState<EventInfo>({ name: "Next Event Name", location: "Next Event Location", number: 2, date: "January 1, 2024" });

    const [creditsData, setCreditsData] = useReplicant<CreditsData>('creditsData', { bundle: 'squidwest-layout-controls'});

	const [setupTeam, setSetupTeam] = useState([""]);
	const [commentaryTeam, setCommentaryTeam] = useState([""]);
	const [techTeam, setTechTeam] = useState([""]);
	const [staffTeam, setStaffTeam] = useState([""]);
	const [headTO, setHeadTO] = useState([""]);
	const [poolCaptains, setPoolCaptains] = useState([""]);
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
		setHeadTO(creditsData.headTO);
		setPoolCaptains(creditsData.poolCaptains);
		setArtTeam(creditsData.artTeam);
	}, [creditsData]);

	return (
        <StyledCredits>
            <Content>
                <CarouselComponent speed={10000} transitionSpeed={3000} once={true}>
                    <CreditsRow>
                        <TitleText>{currentEvent.name} {currentEvent.number > 0 ? '#' + currentEvent.number  : ''}</TitleText>
                    </CreditsRow>
                    {setupTeam.length > 0 && <CreditsRow>
                        <CreditsNameRow title="Setup and Teardown Volunteers" names={setupTeam} />
                    </CreditsRow>}
                    {commentaryTeam.length > 0 && <CreditsRow>
                        <CreditsNameRow title="Commentary" names={commentaryTeam} />
                    </CreditsRow>}
                    {techTeam.length > 0 && <CreditsRow>
                        <CreditsNameRow title="Stream Technicians" names={techTeam} />
                    </CreditsRow>}
                    {artTeam.length > 0 && <CreditsRow>
                        <CreditsNameRow title="Artists" names={artTeam} />
                    </CreditsRow>}
                    {staffTeam.length > 0 && <CreditsRow>
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
                    </CreditsRow>}
                    {(headTO.length > 0 || poolCaptains.length > 0) && <CreditsRow>
                        <LogoRow>
                            <Logo src="/bundles/chishoals-layouts/images/Chi-Shoals_Logo_Transparent_Green.png" />
                        </LogoRow>
                        <CreditsColumns>
                            {headTO.length > 0 && <Rows>
                                <CreditsNameRow title="Head TO" names={headTO} />
                            </Rows>}
                            {poolCaptains.length > 0 && <Rows>
                                <CreditsNameRow title="Staff and Pool Captains" names={poolCaptains} />
                            </Rows>}
                        </CreditsColumns>
                    </CreditsRow>}
                    <CreditsRow>
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
                            <DiscordLogo />
                            <NameText>@epicyoshimaster</NameText>
                        </YoshiRow>
                        <YoshiRow>
                            <TwitterLogo />
                            <NameText>@EpicYoshiMaster</NameText>
                        </YoshiRow>
                        <YoshiRow>
                            <GithubLogo />
                            <NameText>EpicYoshiMaster</NameText>
                        </YoshiRow>
                        <YoshiRow>
                            <Butterfly />
                            <NameText>@epicyoshimaster.bsky.social</NameText>
                        </YoshiRow>
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

const CreditsRow = styled.div<{}>`
    position: relative;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CreditsColumns = styled.div`
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
`;

const Rows = styled.div`
    position: relative;

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

    margin-bottom: 25px;
`;

const LibraryLogo = styled(Logo)`
    margin-left: 20px;
    border: 5px solid white;
    width: 20%;
`;

const YoshiRow = styled(LogoRow)`
    gap: 20px;

    & img {
        height: 5rem;
    }
    
    svg {
        width: 1em;
        object-fit: contain;
        font-size: 50px;
   } 
`;

const YoshiText = styled(NameText)`
    position: relative;
    font-size: 5rem;
    font-weight: bold;

    color: #fff;
    background: #000;

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
`

const root = createRoot(document.getElementById('root')!);
root.render(<Credits />);