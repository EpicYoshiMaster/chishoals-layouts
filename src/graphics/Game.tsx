import React from 'react';
import styled, { css } from 'styled-components'
import { useReplicant } from '@nodecg/react-hooks';
import { createRoot } from 'react-dom/client';
import { Omnibar } from './components/Omnibar';
import { MatchData } from 'schemas';
import { TeamScoreBox } from './components/TeamScoreBox';
import { FittedText } from './components/FittedText';

export function Game() {
	const [matchData, setMatchData] = useReplicant<MatchData>('match', { 
		bundle: 'squidwest-layout-controls',
		defaultValue: { 
			teamA: "Team A",
			teamB: "Team B",
			scoreA: 0,
			scoreB: 0
		}
	});

	return (
		<StyledOmnibarOnly>
			<Content>
				<TeamAndScore $top={true}>
					<TeamBox>
						<FittedText text={matchData?.teamA || ""} font="Splatoon" align="left" maxWidth={290} />
					</TeamBox>
					<ScoreBox>
						{matchData?.scoreA || 0}
					</ScoreBox>
				</TeamAndScore>
				<TeamAndScore $top={false}>
					<TeamBox>
						<FittedText text={matchData?.teamB || ""} font="Splatoon" align="left" maxWidth={290} />
					</TeamBox>
					<ScoreBox>
						{matchData?.scoreB || 0}
					</ScoreBox>
				</TeamAndScore>
			</Content>
		</StyledOmnibarOnly>
	);
}

const TeamAndScore = styled.div<{ $top: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: 'row';

	height: 3rem;
	width: 100%;
	font-size: 2rem;
	color: #f04888;
	border: 3px solid #b31451;
	border-radius: 0.5rem;
	background-color: #eae6f3;
	box-sizing: content-box;
`;

const TeamBox = styled.div`
	padding: 5px;

	box-sizing: border-box;
`;

const ScoreBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 100%;

	font-size: 3rem;

	color: #eae6f3;
	background-color: #f04888;
	border-left: 4px solid #b31451;
	border-radius: 0 4px 4px 0;
`;

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

	width: 350px;
`;

const root = createRoot(document.getElementById('root')!);
root.render(<Game />);