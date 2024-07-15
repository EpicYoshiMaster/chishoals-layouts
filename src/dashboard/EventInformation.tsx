import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components'
import NodeCG from '@nodecg/types';
import { EventData, EventInfo } from '../types/schemas';
import { createRoot } from 'react-dom/client';
import { NameList } from './components/NameList';
import { InputButton, InputLabel, InputRow, InputSection, InputSubheader } from './components/Layout';
import { useReplicant } from '@nodecg/react-hooks'
import { Event } from './components/Event';

export function EventInformation() {
	const [eventData, setEventData] = useReplicant<EventData>('eventData');

	const [currentEvent, setCurrentEvent] = useState<EventInfo>({ name: "Current Event Name", location: "Event Location", number: 1, date: "Today" });
	const [nextEvent, setNextEvent] = useState<EventInfo>({ name: "Next Event Name", location: "Next Event Location", number: 2, date: "January 1, 2024" });


	useEffect(() => {
		if(!eventData) return;

		setCurrentEvent(eventData.currentEvent);
		setNextEvent(eventData.nextEvent);
	}, [eventData]);
	
	const updateEventData = () => {
		let newEventData: EventData = {
			currentEvent: currentEvent,
			nextEvent: nextEvent
		};

		setEventData(newEventData);
	}

	return (
		<PanelContainer>
			<InputSection>
				<InputSubheader>Current Event</InputSubheader>
				<Event event={currentEvent} setEvent={setCurrentEvent} useDate={false} />
				<InputSubheader>Next Event</InputSubheader>
				<Event event={nextEvent} setEvent={setNextEvent} useDate={true} />
			</InputSection>
			<InputButton onClick={() => { updateEventData(); }}>Save</InputButton>
		</PanelContainer>
	)
}

const PanelContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const root = createRoot(document.getElementById('root')!);
root.render(<EventInformation />);