import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled, { keyframes } from 'styled-components'
import { createRoot } from 'react-dom/client';
import { Background } from './components/Background';
import { Nameplate } from './components/Nameplate';
import { useReplicant, useListenFor } from '@nodecg/react-hooks';
import { CommentatorData } from 'schemas/commentatorData';
import { CommentatorList } from 'schemas/commentatorList';

enum LoadState {
	LS_NotLoaded,
	LS_Loaded,
	LS_Done
};

const AnimationDuration = 1000;

export function Commentators() {

	const [show, setShow] = useState(false);
	const [loaded, setLoaded] = useState<LoadState>(LoadState.LS_NotLoaded);

	const [commentatorList] = useReplicant<CommentatorList>('commentatorList', { bundle: 'squidwest-layout-controls', defaultValue: [] });

	const [settings] = useReplicant<CommentatorData>('commentatorSettings', {
		bundle: 'squidwest-layout-controls',
		defaultValue: { 
			autoShow: true,
			delay: 3000,
			autoHide: true,
			lifetime: 5000
		}
	});

	const [ showSponsor, setShowSponsor ] = useState(false);

	useEffect(() => {
		if(!commentatorList) return;
		if(!settings) return;

		if(loaded === LoadState.LS_NotLoaded) {
			setLoaded(LoadState.LS_Loaded);
		}
	}, [commentatorList, settings]);

	const onAutoHide = useCallback(() => {
		setShow(false);
	}, [setShow]);

	const setCurrentShow = useCallback((newShow: boolean) => {
		if(!settings) return;

		if(newShow && settings.autoHide) {
			window.setTimeout(onAutoHide, Math.max(AnimationDuration + settings.lifetime, AnimationDuration));
		}

		setShow(newShow);
	}, [setShow, onAutoHide, settings]);

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
		if(settings && loaded === LoadState.LS_Loaded) {
			if(settings.autoShow) {
				window.setTimeout(onAutoShow, Math.max(settings.delay, 0));
			}

			setLoaded(LoadState.LS_Done);
		}
	}, [loaded, settings, onAutoShow]);

	return (
		<StyledCommentators>
			<Content>
				<IpgLogo $show={showSponsor} src="/bundles/chishoals-layouts/images/I_Play_Games.png" alt="I Play Games Logo" />
				<LowerThirds>
					{commentatorList && commentatorList.map((commentator, index) => (
						<NameplateWrapper key={index}>
							<Nameplate
							show={show} 
							name={commentator.name}
							pronouns={commentator.pronouns}
							tag={commentator.tag}
							animationLength={AnimationDuration} />
						</NameplateWrapper>
					))}
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

	display: flex;
	justify-content: space-evenly;
`;

const NameplateWrapper = styled.div`
	margin: 20px 0;
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