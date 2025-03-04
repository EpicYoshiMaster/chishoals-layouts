import React from 'react';
import { useReplicant } from '@nodecg/react-hooks';
import { MatchData } from 'schemas/matchData';
import styled from 'styled-components'
import { createRoot } from 'react-dom/client';
import { Omnibar } from './components/Omnibar';
import { Background } from './components/Background';
import { TeamScoreBox } from './components/TeamScoreBox';
import { FittedText } from './components/FittedText';

//Theme:
//#f04888
//#eae6f3

export function Intermission() {
	const [matchData, setMatchData] = useReplicant<MatchData>('match', { 
		bundle: 'squidwest-layout-controls',
		defaultValue: { 
			matchInfo: "Round 1",
			teamA: "Team A",
			teamB: "Team B",
			scoreA: 0,
			scoreB: 0,
			matchColor: { index: -1, name: "Unknown", teamA: "#ffffff", teamB: "#ffffff" },
			swapColor: false
		}
	});

	return (
		<StyledIntermission>
			<Background />
			<Content>
				<TopRow>
					<LargeFeed />
					<LargeFeed />
				</TopRow>
				<MiddleRow>
					<TeamScoreBox team={matchData?.teamA || ""} score={matchData?.scoreA || 0} left={true} />
					<SmallFeed />
					<TeamScoreBox team={matchData?.teamB || ""} score={matchData?.scoreB || 0} left={false} />
				</MiddleRow>
				<Omnibar />
			</Content>
		</StyledIntermission>
	);
}

const StyledIntermission = styled.div`
	position: relative;
	width: 1920px;
	height: 1080px;
`;

const Content = styled.div`
	position: relative;
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
`;

const TopRow = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	margin: 0;
	padding: 20px 40px 5px;

	box-sizing: border-box;
`;

const MiddleRow = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding: 5px 20px;
`;

const LargeFeed = styled.div`
	height: 500px;
	aspect-ratio: 16/9;
	box-sizing: content-box;

	border: 8px solid #f04888;
	background-color: #eae6f3;
`;

const SmallFeed = styled.div`
	height: 360px;
	aspect-ratio: 16/9;
	box-sizing: content-box;

	border: 8px solid #f04888;
	background-color: #eae6f3;
`;

const ScoreBox = styled.div`
	display: flex;

	align-items: center;
	margin: 0 5px;
	padding: 5px;
	height: 5rem;
	width: 100%;
	font-size: 3rem;
	color: #f04888;
	border: 8px solid #f04888;
	background-color: #eae6f3;
	box-sizing: content-box;
`;

const StyledFittedText = styled(FittedText)`
	height: 100%;
`;

const root = createRoot(document.getElementById('root')!);
root.render(<Intermission />);