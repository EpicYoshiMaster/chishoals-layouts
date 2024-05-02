import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import NodeCG from '@nodecg/types';
import { EventData } from '../types/schemas';
import { createRoot } from 'react-dom/client';
import { NameList } from './components/NameList';
import { InputButton, InputLabel, InputRow, InputSection, InputSubheader } from './components/Layout';
import { useReplicant } from '@nodecg/react-hooks'

export function EventInformation() {
	const [eventData, setEventData] = useReplicant<EventData>('eventData');

	const [eventName, setEventName] = useState("");
	const [eventLocation, setEventLocation] = useState("");
	const [eventNumber, setEventNumber] = useState(0);
	const [nextEventName, setNextEventName] = useState("");
	const [nextEventLocation, setNextEventLocation] = useState("");
	const [nextEventNumber, setNextEventNumber] = useState(0);
	const [nextEventDate, setNextEventDate] = useState("");
	const [setupTeam, setSetupTeam] = useState([""]);
	const [commentaryTeam, setCommentaryTeam] = useState([""]);
	const [techTeam, setTechTeam] = useState([""]);
	const [staffTeam, setStaffTeam] = useState([""]);
	const [eventTeam, setEventTeam] = useState([""]);

	useEffect(() => {
		if(!eventData) return;
   
		setEventName(eventData.eventName);
		setEventLocation(eventData.eventLocation);
		setEventNumber(eventData.eventNumber);
		setNextEventName(eventData.nextEventName);
		setNextEventLocation(eventData.nextEventLocation);
		setNextEventNumber(eventData.nextEventNumber);
		setNextEventDate(eventData.nextEventDate);
		setSetupTeam(eventData.setupTeam);
		setCommentaryTeam(eventData.commentaryTeam);
		setTechTeam(eventData.techTeam);
		setStaffTeam(eventData.staffTeam);
		setEventTeam(eventData.eventTeam);
	}, [eventData]);
	
	const updateEventData = () => {
		let newEventData: EventData = {
			eventName: eventName, 
			eventLocation: eventLocation, 
			eventNumber: eventNumber,
			nextEventName: nextEventName,
			nextEventLocation: nextEventLocation,
			nextEventNumber: nextEventNumber,
			nextEventDate: nextEventDate,
			setupTeam: setupTeam,
			commentaryTeam: commentaryTeam,
			techTeam: techTeam,
			staffTeam: staffTeam,
			eventTeam: eventTeam
		};

		setEventData(newEventData);
	}

	return (
		<PanelContainer>
			<InputSection>
				<InputSubheader>Current Event</InputSubheader>
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
				<InputSubheader>Next Event</InputSubheader>
				<InputRow>
					<InputLabel>Event Name</InputLabel>
					<input type="text" value={nextEventName} onChange={(event) => { setNextEventName(event.target.value); }} />
				</InputRow>
				<InputRow>
					<InputLabel>Event Location</InputLabel>
					<input type="text" value={nextEventLocation} onChange={(event) => { setNextEventLocation(event.target.value); }}/>
				</InputRow>
				<InputRow>
					<InputLabel>Event #</InputLabel>
					<input type="number" value={nextEventNumber} onChange={(event) => { setNextEventNumber(Number(event.target.value)); }}/>
				</InputRow>
				<InputRow>
					<InputLabel>Event Date</InputLabel>
					<input type="string" value={nextEventDate} onChange={(event) => { setNextEventDate(event.target.value); }}/>
				</InputRow>
				<NameList title="Setup and Teardown Volunteers" list={setupTeam} listUpdateHandler={setSetupTeam} />
				<NameList title="Commentary" list={commentaryTeam} listUpdateHandler={setCommentaryTeam} />
				<NameList title="Stream Technicians" list={techTeam} listUpdateHandler={setTechTeam} />
				<NameList title="SquidWest TOs and Staff" list={staffTeam} listUpdateHandler={setStaffTeam} />
				<NameList title="Event TO" list={eventTeam} listUpdateHandler={setEventTeam} />
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