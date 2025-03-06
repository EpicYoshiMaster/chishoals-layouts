import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled, { keyframes } from 'styled-components'
import { createRoot } from 'react-dom/client';
import { Background } from './components/Background';
import { Nameplate } from './components/Nameplate';
import { useReplicant, useListenFor } from '@nodecg/react-hooks';
import { CommentatorData, CommentatorInfo } from 'schemas/commentatorData';

enum LoadState {
	LS_NotLoaded,
	LS_Loaded,
	LS_Done
};

const defaultCommentator: CommentatorInfo = { name: "Commentator Name", pronouns: "any/all", tag: "@TagName" }
const AnimationDuration = 1000;

export function Commentators() {

	const [show, setShow] = useState(false);
	const [loaded, setLoaded] = useState<LoadState>(LoadState.LS_NotLoaded);
	const [comms, setComms] = useReplicant<CommentatorData>('commentators', {
		bundle: 'squidwest-layout-controls',
		defaultValue: { 
			commentatorOne: defaultCommentator, 
			commentatorTwo: defaultCommentator,
			autoShow: true,
			delay: 3000,
			autoHide: true,
			lifetime: 5000
		}
	});

	const [commentatorOne, setCommentatorOne ] = useState<CommentatorInfo>(defaultCommentator);
	const [commentatorTwo, setCommentatorTwo ] = useState<CommentatorInfo>(defaultCommentator);

	const [ autoShow, setAutoShow ] = useState<boolean>(false);
	const [ delay, setDelay ] = useState<number>(3000);
	const [ autoHide, setAutoHide ] = useState<boolean>(false);
	const [ lifetime, setLifetime ] = useState<number>(5000);
	const [ showSponsor, setShowSponsor ] = useState(false);

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

	const onAutoHide = useCallback(() => {
		setShow(false);
	}, [setShow]);

	const setCurrentShow = useCallback((newShow: boolean) => {
		if(newShow && autoHide) {
			window.setTimeout(onAutoHide, Math.max(AnimationDuration + lifetime, AnimationDuration));
		}

		setShow(newShow);
	}, [setShow, onAutoHide, autoHide, lifetime])

	const onAutoShow = useCallback(() => {
		setCurrentShow(true);
	}, [setCurrentShow]);

	const onCommsControl = useCallback(( value: boolean ) => {
		setCurrentShow(value);
	}, [setCurrentShow]);

	const onIpgControl = useCallback(( value: boolean ) => {
		setShowSponsor(value);
	}, [setShowSponsor]);

	useListenFor('commsControl', onCommsControl, { bundle: 'squidwest-layout-controls' });
	useListenFor('ipgControl', onIpgControl, { bundle: 'chishoals-layouts' });

	useEffect(() => {
		if(loaded === LoadState.LS_Loaded) {
			if(autoShow) {
				window.setTimeout(onAutoShow, Math.max(delay, 0));
			}

			setLoaded(LoadState.LS_Done);
		}
	}, [loaded, autoShow, delay, onAutoShow]);

	return (
		<StyledCommentators>
			<Content>
				<IpgLogo $show={showSponsor} src="/bundles/chishoals-layouts/images/I_Play_Games.png" alt="I Play Games Logo" />
				<LowerThirds>
					<NameplateLeft>
						<Nameplate 
						show={show} 
						name={commentatorOne.name}
						pronouns={commentatorOne.pronouns}
						tag={commentatorOne.tag}
						animationLength={AnimationDuration} />
					</NameplateLeft>
					<NameplateRight>
						<Nameplate 
						show={show}
						name={commentatorTwo.name}
						pronouns={commentatorTwo.pronouns}
						tag={commentatorTwo.tag}
						animationLength={AnimationDuration} />
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

const IpgLogo = styled.img<{ $show: boolean }>`
	position: absolute;
	margin-bottom: 25px;
	margin-left: 25px;

	width: 700px;
	object-fit: contain;

	opacity: ${({ $show }) => $show ? 1 : 0};
	transition: opacity 1s linear;
`;

const root = createRoot(document.getElementById('root')!);
root.render(<Commentators />);