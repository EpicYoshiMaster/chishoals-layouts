import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components'
import NodeCG from '@nodecg/types';
import { Socials } from '../types/schemas';
import { createRoot } from 'react-dom/client';
import { InputButton, InputLabel, InputRow, InputSection, InputSubheader } from './components/Layout';
import { useReplicant } from '@nodecg/react-hooks'

export function SocialsInformation() {
	const [socials, setSocials] = useReplicant<Socials>('socials');

	const [youtube, setYoutube] = useState("");
	const [twitter, setTwitter] = useState("");
	const [discord, setDiscord] = useState("");

	useEffect(() => {
		if(!socials) return;
   
		setYoutube(socials.youtube);
		setTwitter(socials.twitter);
		setDiscord(socials.discord);
	}, [socials]);
	
	const updateSocials = useCallback(() => {
		let newSocials: Socials = {
			youtube: youtube,
			twitter: twitter,
			discord: discord
		};

		setSocials(newSocials);
	}, [youtube, twitter, discord, setSocials]);

	return (
		<PanelContainer>
			<InputSection>
				<InputSubheader>Socials</InputSubheader>
				<InputRow>
					<InputLabel>YouTube</InputLabel>
					<input type="text" value={youtube} onChange={(event) => { setYoutube(event.target.value); }} />
				</InputRow>
				<InputRow>
					<InputLabel>Twitter</InputLabel>
					<input type="text" value={twitter} onChange={(event) => { setTwitter(event.target.value); }}/>
				</InputRow>
				<InputRow>
					<InputLabel>Discord</InputLabel>
					<input type="text" value={discord} onChange={(event) => { setDiscord(event.target.value); }}/>
				</InputRow>
			</InputSection>
			<InputButton onClick={() => { updateSocials(); }}>Save</InputButton>
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
root.render(<SocialsInformation />);