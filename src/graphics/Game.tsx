import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'
import { useReplicant, useListenFor } from '@nodecg/react-hooks';
import { useWrappedReplicant } from '../helpers/hooks'
import { createRoot } from 'react-dom/client';
import { MatchData } from 'schemas/matchData';
import { CommentatorData, CommentatorInfo } from 'schemas/commentatorData';
import { EventData, EventInfo } from 'schemas/eventData';
import { GameScoreInfoBox } from './components/GameScoreInfoBox';
import { FittedText } from './components/FittedText';
import { GameCommentatorInfoBox } from './components/GameCommentatorInfoBox';

const defaultMatchData: MatchData = { 
	matchInfo: "Round 1",
	teamA: "Team A",
	teamB: "Team B",
	scoreA: 0,
	scoreB: 0,
	matchColor: { index: -1, name: "Unknown", teamA: "#ffffff", teamB: "#ffffff" },
	swapColor: false
}
const defaultCommentator: CommentatorInfo = { name: "Commentator Name", pronouns: "any/all", tag: "@TagName" }

const FullWidth = 340;

const TeamWidth = 300;
const ScoreWidth = 50;

const CommentatorWidth = 235;
const PronounsWidth = 95;

export function Game() {
	const [eventData] = useReplicant<EventData>('eventData', { bundle: 'squidwest-layout-controls' });
	const [matchData] = useWrappedReplicant<MatchData>('match', defaultMatchData, 'squidwest-layout-controls');

	const [comms] = useReplicant<CommentatorData>('commentators', {
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

	const [currentEvent, setCurrentEvent] = useState<EventInfo>({ name: "Current Event Name", location: "Event Location", number: 1, date: "Today" });
	const [commentatorOne, setCommentatorOne ] = useState<CommentatorInfo>(defaultCommentator);
	const [commentatorTwo, setCommentatorTwo ] = useState<CommentatorInfo>(defaultCommentator);

	useEffect(() => {
		if(!comms) return;

		setCommentatorOne(comms.commentatorOne);
		setCommentatorTwo(comms.commentatorTwo);
	}, [comms]);

	useEffect(() => {
		if(!eventData) return;

		setCurrentEvent(eventData.currentEvent);
	}, [eventData]);

	const [showScoreboard, setShowScoreboard] = useState(false);
	const [showCommentary, setShowCommentary] = useState(false);

	useListenFor('scoresControl', (value: boolean) => {
		setShowScoreboard(value);
	}, { bundle: 'squidwest-layout-controls' });

	useListenFor('commsControl', (value: boolean) => {
		setShowCommentary(value);
	}, { bundle: 'squidwest-layout-controls' });

	return (
		<StyledOmnibarOnly>
			<Content>
				<Scoreboard $show={showScoreboard}>
					<InfoBox>
						<FittedText text={`${currentEvent.name} ${currentEvent.number > 0 ? '#' + currentEvent.number  : ''}${matchData.matchInfo !== "" ? " - " + matchData.matchInfo : ""}`} font="Splatoon" align="left" maxWidth={FullWidth} />
					</InfoBox>
					<GameScoreInfoBox 
						color={!matchData.swapColor ? matchData.matchColor.teamA : matchData.matchColor.teamB} 
						team={matchData.teamA || ""} 
						score={matchData.scoreA || 0}
						mainWidth={TeamWidth}
						secondaryWidth={ScoreWidth}
					/>
					<GameScoreInfoBox 
						color={matchData.swapColor ? matchData.matchColor.teamA : matchData.matchColor.teamB} 
						team={matchData.teamB || ""} 
						score={matchData.scoreB || 0}
						mainWidth={TeamWidth}
						secondaryWidth={ScoreWidth}
					/>
				</Scoreboard>
				<Commentators $show={showCommentary}>
					<InfoBox>
						<FittedText text="Commentary" font="Splatoon" align="left" maxWidth={FullWidth} />
					</InfoBox>
					<GameCommentatorInfoBox
						name={commentatorOne.name}
						pronouns={commentatorOne.pronouns}
						tag={commentatorOne.tag}
						playing={showCommentary}
						fullWidth={FullWidth}
						nameWidth={CommentatorWidth}
						pronounsWidth={PronounsWidth}
					/>
					<GameCommentatorInfoBox 
						name={commentatorTwo.name}
						pronouns={commentatorTwo.pronouns}
						tag={commentatorTwo.tag}
						playing={showCommentary}
						fullWidth={FullWidth}
						nameWidth={CommentatorWidth}
						pronounsWidth={PronounsWidth}
					/>
				</Commentators>
			</Content>
		</StyledOmnibarOnly>
	);
}

const StyledOmnibarOnly = styled.div`
	position: relative;
	width: 1920px;
	height: 1080px;
	background-color: transparent;
`;

const Content = styled.div`
	position: relative;
	margin: 25px 0 0 20px;

	font-size: 2rem;

	width: 356px;
`;

const InfoBox = styled.div`
	font-size: 2rem;
	padding: 0 5px;

	color: var(--game-title-text);
	background-color: var(--game-title-bg);
	border: 3px solid var(--game-border);
	border-radius: 0.5rem;
`;

const Scoreboard = styled.div<{ $show: boolean }>`
	position: relative;
	opacity: ${({ $show }) => $show ? 1 : 0};
	
	transition: opacity 0.75s ease;
`;

const Commentators = styled.div<{ $show: boolean }>`
	margin-top: 1rem;

	position: relative;
	opacity: ${({ $show }) => $show ? 1 : 0};
	
	transition: opacity 0.75s ease;	
`;

const root = createRoot(document.getElementById('root')!);
root.render(<Game />);