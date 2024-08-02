import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled, { keyframes } from 'styled-components'
import { createRoot } from 'react-dom/client';
import { Background } from './components/Background';
import { Nameplate } from './components/Nameplate';
import { useReplicant } from '@nodecg/react-hooks';
import { CommentatorData, CommentatorInfo } from '../types/schemas/commentatorData';
import { LoadState } from '../types/types';

//TODO: Look into initial state problems (fixable for now with just saving)

export function Commentators() {

	const [show, setShow] = useState(false);
	const [loaded, setLoaded] = useState<LoadState>(LoadState.LS_NotLoaded);
	const [comms, setComms] = useReplicant<CommentatorData>('commentators');

	const [commentatorOne, setCommentatorOne ] = useState<CommentatorInfo>({ name: "Commentator Name", pronouns: "any/all", tag: "@TagName" });
	const [commentatorTwo, setCommentatorTwo ] = useState<CommentatorInfo>({ name: "Commentator Name", pronouns: "any/all", tag: "@TagName" });

	const [ autoShow, setAutoShow ] = useState<boolean>(false);
	const [ delay, setDelay ] = useState<number>(3000);
	const [ autoHide, setAutoHide ] = useState<boolean>(false);
	const [ lifetime, setLifetime ] = useState<number>(5000);

	useEffect(() => {
		if(!comms) return;

		setCommentatorOne(comms.commentatorOne);
		setCommentatorTwo(comms.commentatorTwo);
		setAutoShow(comms.autoShow);
		setDelay(comms.delay);
		setAutoHide(comms.autoHide);
		setLifetime(comms.lifetime);

		if(loaded === LoadState.LS_NotLoaded) {
			setLoaded(LoadState.LS_Loaded);
		}
	}, [comms]);

	const onCommsControl = useCallback(( value: boolean ) => {
		setShow(value);
	}, [setShow]);

	const onAutoHide = useCallback(() => {
		setShow(false);
	}, [setShow]);

	const onAutoShow = useCallback(() => {
		setShow(true);

		if(autoHide) {
			window.setTimeout(onAutoHide, lifetime);
		}
		
	}, [onAutoHide, setShow, autoHide, lifetime]);

	useEffect(() => {
		nodecg.listenFor('commsControl', onCommsControl)

		return () => {
			nodecg.unlisten('commsControl', onCommsControl);
		}
	}, [onCommsControl]);


	useEffect(() => {
		if(loaded === LoadState.LS_Loaded) {
			if(autoShow) {
				window.setTimeout(onAutoShow, delay);
			}

			setLoaded(LoadState.LS_Done);
		}
	}, [loaded, autoShow, delay, onAutoShow]);

	return (
		<StyledCommentators>
			<Content>
				<LowerThirds>
					<NameplateLeft>
						<Nameplate 
						show={show} 
						name={commentatorOne.name}
						pronouns={commentatorOne.pronouns}
						tag={commentatorOne.tag} />
					</NameplateLeft>
					<NameplateRight>
						<Nameplate 
						show={show}
						name={commentatorTwo.name}
						pronouns={commentatorTwo.pronouns}
						tag={commentatorTwo.tag} />
					</NameplateRight>
				</LowerThirds>
			</Content>
		</StyledCommentators>
	);
}

const StyledCommentators = styled.div`
	position: relative;
	width: 1920px;
	height: 1080px;
	background-color: transparent;
`;

const Content = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	
	display: flex;
	flex-direction: column-reverse;
`;

const LowerThirds = styled.div`
	position: relative;
	margin-bottom: 50px;

	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const NameplateLeft = styled.div`
	margin: 20px 100px 20px 200px;
`;

const NameplateRight = styled.div`
	margin: 20px 200px 20px 100px;
`;

const root = createRoot(document.getElementById('root')!);
root.render(<Commentators />);