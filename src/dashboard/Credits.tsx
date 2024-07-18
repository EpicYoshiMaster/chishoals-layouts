import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components'
import NodeCG from '@nodecg/types';
import { CreditsData } from '../types/schemas';
import { createRoot } from 'react-dom/client';
import { NameList } from './components/NameList';
import { InputButton, InputLabel, InputRow, InputSection, InputSubheader } from './components/Layout';
import { useReplicant } from '@nodecg/react-hooks'

export function Credits() {
	const [creditsData, setCreditsData] = useReplicant<CreditsData>('creditsData');

	const [setupTeam, setSetupTeam] = useState([""]);
	const [commentaryTeam, setCommentaryTeam] = useState([""]);
	const [techTeam, setTechTeam] = useState([""]);
	const [staffTeam, setStaffTeam] = useState([""]);
	const [eventTeam, setEventTeam] = useState([""]);
	const [artTeam, setArtTeam] = useState([""]);

	useEffect(() => {
		if(!creditsData) return;
   
		setSetupTeam(creditsData.setupTeam);
		setCommentaryTeam(creditsData.commentaryTeam);
		setTechTeam(creditsData.techTeam);
		setStaffTeam(creditsData.staffTeam);
		setEventTeam(creditsData.eventTeam);
		setArtTeam(creditsData.artTeam);
	}, [creditsData]);

	const onCommsCredits = useCallback(( value: string[] ) => {
		if(!value) return;

		let newCommentaryTeam = commentaryTeam.slice();

		value.forEach((name) => {
			const trimmed = name.trim();

			if(name === "") return;

			if(!newCommentaryTeam.includes(trimmed)) {
				newCommentaryTeam.push(trimmed);
			}
		})

		setCommentaryTeam(newCommentaryTeam);
	}, [commentaryTeam, setCommentaryTeam]);

	useEffect(() => {
		nodecg.listenFor('commsCredits', onCommsCredits)

		return () => {
			nodecg.unlisten('commsCredits', onCommsCredits);
		}
	}, [onCommsCredits]);
	
	const updateCreditsData = () => {
		let newcreditsData: CreditsData = {
			setupTeam: setupTeam,
			commentaryTeam: commentaryTeam,
			techTeam: techTeam,
			staffTeam: staffTeam,
			eventTeam: eventTeam,
			artTeam: artTeam
		};

		setCreditsData(newcreditsData);
	}

	return (
		<PanelContainer>
			<InputSection>
				<NameList title="Setup and Teardown Volunteers" list={setupTeam} listUpdateHandler={setSetupTeam} />
				<NameList title="Commentary" list={commentaryTeam} listUpdateHandler={setCommentaryTeam} />
				<NameList title="Stream Technicians" list={techTeam} listUpdateHandler={setTechTeam} />
				<NameList title="Artists" list={artTeam} listUpdateHandler={setArtTeam} />
				<NameList title="SquidWest TOs and Staff" list={staffTeam} listUpdateHandler={setStaffTeam} />
				<NameList title="Event TO" list={eventTeam} listUpdateHandler={setEventTeam} />
			</InputSection>
			<InputButton onClick={() => { updateCreditsData(); }}>Save</InputButton>
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
root.render(<Credits />);