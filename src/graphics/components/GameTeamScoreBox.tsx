import React from "react"
import styled, { css } from "styled-components"
import { FittedText } from "./FittedText"

interface GameTeamScoreBoxProps {
	team: string;
	score: number;
	left: boolean;
}

export const GameTeamScoreBox: React.FC<GameTeamScoreBoxProps> = ({ team, score, left }) => {
	return (
		<TeamAndScore>
			<TeamBox>
				<FittedText text={team} font="Splatoon" align={left ? "left" : "right"} maxWidth={290} />
			</TeamBox>
			<ScoreBox>
				<FittedText text={`${score}`} font="Splatoon" align="center" maxWidth={45} />
			</ScoreBox>
		</TeamAndScore>
	)
}

const TeamAndScore = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;

	height: 3rem;
	width: 100%;
	font-size: 2rem;
	color: #f04888;
	border: 3px solid #b31451;
	border-radius: 0.5rem;
	background-color: #eae6f3;
	//box-sizing: content-box;
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