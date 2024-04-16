import React, { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { CarouselComponent } from './CarouselComponent';
import { YoutubeLogo, DiscordLogo, TwitterLogo  } from "@phosphor-icons/react";
import { EventData, Socials } from '../../types/schemas';
import { useReplicant } from '@nodecg/react-hooks';
import { IntermissionData } from '../../types/schemas/intermissionData';

export const Omnibar: React.FC = () => {
	const [eventData, setEventData] = useReplicant<EventData>('eventData');
	const [socials] = useReplicant<Socials>('socials');
	const [intermissionData] = useReplicant<IntermissionData>('intermission');

	const [eventName, setEventName] = useState("");
	const [eventLocation, setEventLocation] = useState("");
	const [eventNumber, setEventNumber] = useState(0);

	useEffect(() => {
		if(!eventData) return;
   
		setEventName(eventData.eventName);
		setEventLocation(eventData.eventLocation);
		setEventNumber(eventData.eventNumber);
	}, [eventData]);

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
			<OmnibarItem $show={intermissionData ? intermissionData.showTime : true}>
				<TimeDate $border={true}>
					<TimeDisplay>
						{formatTimeHM(memoTime)}
					</TimeDisplay>
					<DateDisplay>
						{formatTimeMDY(memoTime)}
					</DateDisplay>
				</TimeDate>
			</OmnibarItem>
			<OmnibarItem $show={intermissionData ? intermissionData.showEvent : true}>
				<EventSection $border={true}>
					<Logo src='/bundles/chishoals-layouts/images/Chi-Shoals_Logo_Transparent.png' alt="Chi-Shoals Logo" />
					{eventNumber > 0 && (
					<EventNumberText>
            	    	#{eventNumber}
            		</EventNumberText>)}
				</EventSection>
			</OmnibarItem>
			<TextOmnibarItem $show={intermissionData ? intermissionData.showLocation : true} $maxWidth="24rem">
				{eventLocation !== '' && (
				<LocationWrapper $border={true}>
					<LocationText>
            	    	{eventLocation}
            		</LocationText>
				</LocationWrapper>
				)}
			</TextOmnibarItem>
			<TextOmnibarItem $show={intermissionData ? intermissionData.showFlavorText : true} $maxWidth="20rem">
				<TourneyWrapper $border={true}>
					<TourneyPlaceholder>
						{intermissionData ? intermissionData.flavorText : ""}
					</TourneyPlaceholder>
				</TourneyWrapper>
			</TextOmnibarItem>
            <CarouselWrapper $border={true}>
				<CarouselComponent speed={5000} transitionSpeed={1000} indexRelative={2}>
					<CarouselRow>
                        <StyledYoutubeLogo />
                        <LogoText>{socials ? socials.youtube : ""}</LogoText>
					</CarouselRow>
					<CarouselRow>
                        <StyledTwitterLogo />
                        <LogoText>{socials ? socials.twitter : ""}</LogoText>
					</CarouselRow>
					<CarouselRow>
                        <StyledDiscordLogo />
                        <LogoText>{socials ? socials.discord : ""}</LogoText>
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

const OmnibarItem = styled.div<{ $show: boolean }>`
	position: relative;
	display: ${({ $show }) => $show ? 'block' : 'none'};
`;

const TextOmnibarItem = styled(OmnibarItem)<{ $maxWidth: string }>`
	max-width: ${({$maxWidth}) => $maxWidth};
`;

const OmnibarElement = styled.div<{$border?: boolean}>`
	position: relative;
	padding: 10px;
	color: #ffffff;
	font-size: 20pt;
	border-right: ${props => props.$border ? '5px solid #eae6f3' : ''};
`;

const TimeDate = styled(OmnibarElement)`
	position: relative;
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const TimeDisplay = styled.div`
	position: relative;
	margin: auto;
	color: #ffffff;
	font-size: 35pt;
`;

const DateDisplay = styled.div`
	position: relative;
	margin: auto;
	color: #ffffff;
	font-size: 20pt;
`;

const EventSection = styled(OmnibarElement)`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100%;
`;

const EventNumberText = styled.div`
	margin: 8px;
	font-size: 30pt;
`;

const Logo = styled.img`
    height: 7rem;
    object-fit: contain;
`;

const LocationWrapper = styled(OmnibarElement)`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	align-items: center;
`;

const LocationText = styled.div`
	margin: auto 8px;
	font-size: 25pt;
`;

const TourneyWrapper = styled(OmnibarElement)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
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