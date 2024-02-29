import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import NodeCG from '@nodecg/types';
import { useReplicant } from './components/use-replicant';
import { EventData } from '../types/schemas/eventData';

export function Panel() {

	const [eventData, setEventData] = useState(nodecg.Replicant<EventData>('eventData'));

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
	
	/*
	const updateEventData = () => {
		setEventData({ eventName: eventName, eventLocation: eventLocation, eventNumber: eventNumber });
	}*/

	return (
		<PanelContainer>
			<InputHeader>Event Information</InputHeader>
			<InputSection>
				<InputRow>
					<InputLabel>Event Name</InputLabel>
					<input type="text" value={eventName} onChange={(event) => { setEventName(event.target.value); }} />
				</InputRow>
				<InputRow>
					<InputLabel>Event Location</InputLabel>
					<input type="text" value={eventLocation} onChange={(event) => { setEventLocation(event.target.value); }}/>
				</InputRow>
				<InputRow>
					<InputLabel>Event #</InputLabel>
					<input type="number" value={eventNumber} onChange={(event) => { setEventNumber(Number(event.target.value)); }}/>
				</InputRow>
			</InputSection>
			<StyledButton onClick={() => {}}>Save</StyledButton>
		</PanelContainer>
	)
}

const PanelContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const InputHeader = styled.h2`
	margin: 10px;	
`;

const InputSection = styled.div`
	padding: 0 20px;
	width: 100%;

	display: grid;
	grid-template-columns: max-content 1fr;	
`;

const InputRow = styled.div`
	display: contents;

	& input, textarea, select {
		height: 2rem;
		font-size: 1rem;
	}
`;

const InputLabel = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-right: 0.5rem;
	font-weight: 700;
	line-height: 2;
`

const StyledButton = styled.button`
	margin: 10px;
	padding: 10px 50px;
	font-size: 1.5rem;
	font-weight: bold;
	border: none;
	border-radius: 0.5rem;
	color: #ffffff;
	background-color: #d346fe; //#9746fe

	&:not(:disabled):hover {
		background-color: #5f2573;
	}

	&:not(:disabled):active {
		background-color: #4c1d5c;
	}

	&:disabled {
		opacity: 0.5;
	}
`;