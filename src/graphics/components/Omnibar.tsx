import React, { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { CarouselComponent } from './CarouselComponent';
import { YoutubeLogo, DiscordLogo, TwitterLogo  } from "@phosphor-icons/react";
import { EventData } from '../../types/schemas';

export const Omnibar: React.FC = () => {
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

    const [time, setTime] = useState(new Date());

	const formatTimeHM = (currentTime: Date) => {
		return currentTime.getHours() + ":" + ((time.getMinutes() < 10) ? "0" : "") + time.getMinutes();
	};

	const formatTimeMDY = (currentTime: Date) => {
		return (currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear();
	}

	useEffect(() => {
		const interval = setInterval(() => { 
			setTime(new Date());
		}, 1000);

		return () => {
			clearInterval(interval);
		}
	}, []);

	const memoTime = useMemo(() => { return time; }, [time]);

    return (
        <OmnibarWrapper>
            <TimeDate $border={true}>
				<TimeDisplay>
					{formatTimeHM(memoTime)}
				</TimeDisplay>
				<DateDisplay>
					{formatTimeMDY(memoTime)}
				</DateDisplay>
			</TimeDate>
			<EventSection $border={true}>
				<Logo src='/bundles/chishoals-layouts/images/Chi-Shoals_Logo_Transparent.png' alt="Chi-Shoals Logo" />
				{eventNumber > 0 && (
				<EventNumberText>
                	#{eventNumber}
            	</EventNumberText>)}
			</EventSection>
			{eventLocation !== '' && (
			<LocationWrapper $border={true}>
				<LocationText>
                	{eventLocation}
            	</LocationText>
			</LocationWrapper>
			)}
			<TourneyWrapper $border={true}>
				<TourneyPlaceholder>
					See the current standings with !bracket
				</TourneyPlaceholder>
			</TourneyWrapper>
            <CarouselWrapper $border={true}>
				<CarouselComponent speed={5000} transitionSpeed={1000}>
					<CarouselRow>
                        <StyledYoutubeLogo />
                        <LogoText>@SquidWestLANs</LogoText>
					</CarouselRow>
					<CarouselRow>
                        <StyledTwitterLogo />
                        <LogoText>@SquidWest</LogoText>
					</CarouselRow>
					<CarouselRow>
                        <StyledDiscordLogo />
                        <LogoText>discord.gg/trdHY59F2u</LogoText>
					</CarouselRow>
				</CarouselComponent>
			</CarouselWrapper>
            <OmnibarElement as="img" src='/bundles/chishoals-layouts/images/SW_Logo.png' alt="SquidWest Logo" />
		</OmnibarWrapper>
    );
}

const OmnibarWrapper = styled.div`
	position: relative;
  	display: flex;
  	flex-direction: row;
  	width: calc(100% - 40px);
  	background-color: #f04888;
  	min-height: 0;
  	min-width: 0;
  	margin: 20px;
`;

const OmnibarElement = styled.div<{$border?: boolean}>`
	padding: 10px;
	color: #ffffff;
	font-size: 20pt;
	border-right: ${props => props.$border ? '5px solid #eae6f3' : ''};
`;

const TimeDate = styled(OmnibarElement)`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const TimeDisplay = styled.div`
	margin: auto;
	color: #ffffff;
	font-size: 35pt;
`;

const DateDisplay = styled.div`
	margin: auto;
	color: #ffffff;
	font-size: 20pt;
`;

const EventSection = styled(OmnibarElement)`
	display: flex;
	flex-direction: row;
	max-width: 12%;
	height: 100%;
	align-items: center;
`;

const EventNumberText = styled.div`
	margin: auto 8px;
	font-size: 30pt;
`;

const Logo = styled.img`
    max-height: 100%;
    object-fit: contain;
`;

const LocationWrapper = styled(OmnibarElement)`
	display: flex;
	flex-direction: column;
	height: 100%;
	align-items: center;
	max-width: 20%; //20%
`;

const LocationText = styled.div`
	margin: auto 8px;
	font-size: 25pt;
`;

const TourneyWrapper = styled(OmnibarElement)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	align-items: center;
	max-width: 17%;
`

const TourneyPlaceholder = styled.div`
	font-size: 25pt;
`

const CarouselWrapper = styled(OmnibarElement)`
	position: relative;
	height: 100%;
	flex-grow: 1;
`;

const CarouselRow = styled.div`
	position: relative;
    display: flex;
    flex-direction: row;
	align-items: center;
    justify-content: center;
    max-height: 100%;
    height: 100%;
	font-size: 40pt;
`;

const StyledYoutubeLogo = styled(YoutubeLogo)`
	width: 1em;
    object-fit: contain;
	margin-right: 20px;
`;

const StyledTwitterLogo = styled(TwitterLogo)`
	width: 1em;
    object-fit: contain;
	margin-right: 20px;
`

const StyledDiscordLogo = styled(DiscordLogo)`
	width: 1em;
    object-fit: contain;
	margin-right: 20px;
`;

const LogoText = styled.div`
	font-size: 35pt;
`;