import React from 'react';
import { useReplicant } from '@nodecg/react-hooks';
import styled from 'styled-components'
import { MatchData } from 'schemas/matchData';
import { createRoot } from 'react-dom/client';
import { TeamScoreBox } from './components/TeamScoreBox';

export function ScoresOnly() {
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
		<StyledOmnibarOnly>
			<Content>
				<ScoreRow>
					<TeamScoreBox team={matchData?.teamA || ""} score={matchData?.scoreA || 0} left={true} />
					<TeamScoreBox team={matchData?.teamB || ""} score={matchData?.scoreB || 0} left={false} />
				</ScoreRow>
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
	padding: 0 350px 50px 350px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	
	width: 100%;
	height: 100%;
`;

const ScoreRow = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const root = createRoot(document.getElementById('root')!);
root.render(<ScoresOnly />);