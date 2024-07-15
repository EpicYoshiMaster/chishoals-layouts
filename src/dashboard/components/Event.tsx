import React, { useCallback } from "react";
import styled from "styled-components";
import { EventInfo } from "../../types/schemas";
import { InputLabel, InputRow } from '../components/Layout';

interface EventProps {
	event: EventInfo;
	setEvent: React.Dispatch<React.SetStateAction<EventInfo>>;
	useDate: boolean;
}

export const Event: React.FC<EventProps> = ({ event, setEvent, useDate }) => {

	const setName = useCallback((name: string) => {
		setEvent((oldEvent) => { return { ...oldEvent, name: name }} );
	}, []);

	const setLocation = useCallback((location: string) => {
		setEvent((oldEvent) => { return { ...oldEvent, location: location }} );
	}, []);

	const setNumber = useCallback((number: number) => {
		setEvent((oldEvent) => { return { ...oldEvent, number: number }} );
	}, []);

	const setDate = useCallback((date: string) => {
		setEvent((oldEvent) => { return { ...oldEvent, date: date }} );
	}, []);

	return (
		<Container>
			<InputRow>
				<InputLabel>Event Name</InputLabel>
				<input type="text" value={event.name || ""} onChange={(event) => { setName(event.target.value); }} />
			</InputRow>
			<InputRow>
				<InputLabel>Event Location</InputLabel>
				<input type="text" value={event.location || ""} onChange={(event) => { setLocation(event.target.value); }}/>
			</InputRow>
			<InputRow>
				<InputLabel>Event #</InputLabel>
				<input type="text" value={event.number || 0} onChange={(event) => { setNumber(Number(event.target.value)); }}/>
			</InputRow>
			{useDate && (
			<InputRow>
				<InputLabel>Event Date</InputLabel>
				<input type="text" value={event.date || ""} onChange={(event) => { setDate(event.target.value); }}/>
			</InputRow>
			)}
		</Container>
	);
}

const Container = styled.div`
    display: contents;
`