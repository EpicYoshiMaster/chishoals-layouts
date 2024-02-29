import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components'
import { CarouselComponent } from './components/CarouselComponent';
import { GithubLogo, DiscordLogo, TwitterLogo  } from "@phosphor-icons/react";
import { EventData } from '../types/schemas/eventData';

//Event Info
//Event Name
//Event Location
//Event Number (If applicable)

//Setup and Teardown
//Dynamic array of volunteers

//Commentary
//Dynamic array of volunteers

//SquidWest TOs and Staff
//Dynamic array

//Event TO
//Dynamic Array

//Next Event Info - Event Name, Location, Number (if applicable)

export function Credits() {
    const [eventData] = useState(nodecg.Replicant<EventData>('eventData'));

	const [eventName, setEventName] = useState("Fake Event");
	const [eventLocation, setEventLocation] = useState("Test");
	const [eventNumber, setEventNumber] = useState(0);

	useEffect(() => {
		eventData.on('change', newVal => {
			if(!newVal) return;

			setEventName(newVal.eventName);
			setEventLocation(newVal.eventLocation);
			setEventNumber(newVal.eventNumber);
		})
	}, []);

	return (
        <Background>
            <CarouselComponent speed={10000} transitionSpeed={3000} once={true}>
                <CreditsRow>
                    <TitleText>{eventName} {eventNumber > 0 ? '#' + eventNumber  : ''}</TitleText>
                </CreditsRow>
                <CreditsRow>
                    <HeaderText>Setup and Teardown Volunteers</HeaderText>
                    <NameText>Joey</NameText>
                    <NameText>Insert More Names Here</NameText>
                    <NameText>Everyone who helps out after stream!</NameText>
                </CreditsRow>
                <CreditsRow>
                    <HeaderText>Commentary</HeaderText>
                    <NameText>Commentary #1</NameText>
                    <NameText>Commentary #2</NameText>
                    <NameText>Commentary #3</NameText>
                </CreditsRow>
                <CreditsRow>
                    <LogoRow>
                        <HeaderText>SquidWest TOs and Staff</HeaderText>
                        <SWLogo src="/bundles/chishoals-layouts/images/SW_Logo_bg.png" />
                    </LogoRow>
                    <NameText>Fuchsia</NameText>
                    <NameText>Swannie</NameText>
                    <NameText>Carrot</NameText>
                    <NameText>Brandeska</NameText>
                    <NameText>Froppy</NameText>
                    <NameText>Chino</NameText>
                    <NameText>Kaito</NameText>
                </CreditsRow>
                <CreditsRow>
                    <LogoRow>
                        <HeaderText>Event TO</HeaderText>
                        <Logo src="/bundles/chishoals-layouts/images/Chi-Shoals_Logo_Transparent_Green.png" />
                    </LogoRow>
                    <NameText>Froppy</NameText>
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
                    <HeaderText>Harold Washington Library Staff</HeaderText>
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
                    <TitleText>SquidWest Chi-Shoals #23</TitleText>
                    <NameText>Harold Washington Library</NameText>
                    <NameText>April 1, 2024</NameText>
                    <NameText>See you there!</NameText>
                </CreditsRow>
            </CarouselComponent>
        </Background>
    )
}

const Background = styled.div`
    position: relative;

    width: 1920px;
	height: 1080px;

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