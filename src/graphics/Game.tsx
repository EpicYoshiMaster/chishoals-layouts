import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'
import { useReplicant, useListenFor } from '@nodecg/react-hooks';
import { createRoot } from 'react-dom/client';
import { MatchData, CommentatorData, CommentatorInfo, EventData, EventInfo } from 'schemas';
import { GameTeamScoreBox } from './components/GameTeamScoreBox';
import { FittedText } from './components/FittedText';
import { CarouselComponent } from './components/CarouselComponent';

const defaultCommentator: CommentatorInfo = { name: "Commentator Name", pronouns: "any/all", tag: "@TagName" }
const FullWidth = 340;
const CommentatorWidth = 235;
const PronounsWidth = 95;

export function Game() {
	const [eventData] = useReplicant<EventData>('eventData', { bundle: 'squidwest-layout-controls' });
	const [matchData] = useReplicant<MatchData>('match', { 
		bundle: 'squidwest-layout-controls',
		defaultValue: { 
			teamA: "Team A",
			teamB: "Team B",
			scoreA: 0,
			scoreB: 0
		}
	});

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
						<FittedText text={`${currentEvent.name} ${currentEvent.number > 0 ? '#' + currentEvent.number  : ''}`} font="Splatoon" align="left" maxWidth={FullWidth} />
					</InfoBox>
					<GameTeamScoreBox team={matchData?.teamA || ""} score={matchData?.scoreA || 0} left={false}  />
					<GameTeamScoreBox team={matchData?.teamB || ""} score={matchData?.scoreB || 0} left={false}  />
				</Scoreboard>
				<Commentators $show={showCommentary}>
					<InfoBox>
						<FittedText text="Commentary" font="Splatoon" align="left" maxWidth={FullWidth} />
					</InfoBox>
					<CommentatorBox>
						<CommentatorName>
							<CarouselComponent speed={10000} playing={showCommentary}>
								<FittedText text={commentatorOne.name || ""} font="Splatoon" align="left" maxWidth={commentatorOne.pronouns ? CommentatorWidth : FullWidth}  />
								{commentatorOne.tag !== "" && <FittedText text={commentatorOne.tag} font="Splatoon" align="left" maxWidth={commentatorOne.pronouns ? CommentatorWidth : FullWidth}  />}
							</CarouselComponent>
						</CommentatorName>
						{commentatorOne.pronouns && commentatorOne.pronouns !== "" && 
						<CommentatorPronouns>
							<FittedText text={commentatorOne.pronouns} font="Splatoon" align="left" maxWidth={PronounsWidth} />
						</CommentatorPronouns>
						}
					</CommentatorBox>
					<CommentatorBox>
						<CommentatorName>
							<CarouselComponent speed={10000} playing={showCommentary}>
								<FittedText text={commentatorTwo.name || ""} font="Splatoon" align="left" maxWidth={commentatorTwo.pronouns ? CommentatorWidth : FullWidth}  />
								{commentatorTwo.tag !== "" &&  <FittedText text={commentatorTwo.tag} font="Splatoon" align="left" maxWidth={commentatorTwo.pronouns ? CommentatorWidth : FullWidth}  />}
							</CarouselComponent>
						</CommentatorName>
						{commentatorTwo.pronouns && <CommentatorPronouns>
							<FittedText text={commentatorTwo.pronouns} font="Splatoon" align="left" maxWidth={PronounsWidth} />
						</CommentatorPronouns>
						}
					</CommentatorBox>
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

	color: #eae6f3;
	background-color: #f04888;
	border: 3px solid #b31451;
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

const CommentatorBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;

	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 3rem;
	font-size: 2rem;

	color: #f04888;
	background-color: #eae6f3;
	border: 3px solid #b31451;
	border-radius: 0.5rem;
`;

const CommentatorName = styled.div`
	padding: 5px;
	position: relative;
`;

const CommentatorPronouns = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 105px;
	height: 100%;
	font-size: 1.5rem;

	color: #eae6f3;
	background-color: #f04888;
	border-left: 4px solid #b31451;
	border-radius: 0 4px 4px 0;
`;

const root = createRoot(document.getElementById('root')!);
root.render(<Game />);