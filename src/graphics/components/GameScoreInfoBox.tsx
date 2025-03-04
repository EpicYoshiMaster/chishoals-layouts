import React from "react"
import styled, { css } from "styled-components"
import { FittedText } from "./FittedText"

interface GameTeamScoreBoxProps {
	team: string;
	score: number;
	color: string;
	mainWidth: number;
	secondaryWidth: number;
}

const paddingWidth = 10;
const colorDisplayWidth = 15;
const colorMargin = 5;

export const GameScoreInfoBox: React.FC<GameTeamScoreBoxProps> = ({ team, score, color, mainWidth, secondaryWidth }) => {
	return (
		<TeamAndScore>
			<TeamBox $width={mainWidth}>
				<ColorDisplay $color={color} />
				<FittedText text={team} font="Splatoon" align="left" maxWidth={mainWidth - paddingWidth - colorDisplayWidth - colorMargin} />
			</TeamBox>
			<ScoreBox $width={secondaryWidth}>
				<FittedText text={`${score}`} font="Splatoon" align="center" maxWidth={secondaryWidth - 5} />
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
	color: var(--game-main-text);
	background-color: var(--game-main-bg);
	border: 3px solid var(--game-border);
	border-radius: 0.5rem;
`;

const TeamBox = styled.div<{ $width: number }>`
	position: relative;
	height: 100%;
	padding: 5px;
	width: ${({ $width }) => $width}px;
	display: flex;
	flex-direction: row;
	align-items: center;

	box-sizing: border-box;
`;

const ColorDisplay = styled.div<{ $color: string }>`
	width: ${colorDisplayWidth}px;
	min-width: ${colorDisplayWidth}px;
	margin-right: ${colorMargin}px;
	height: 100%;
	
	border-radius: 5px;
	background-color: ${({ $color }) => $color};
`;

const ScoreBox = styled.div<{ $width: number }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${({ $width }) => $width}px;
	height: 100%;

	font-size: 3rem;

	color: var(--game-sub-text);
	background-color: var(--game-sub-bg);
	border-left: 4px solid var(--game-border);
	border-radius: 0 4px 4px 0;
`;