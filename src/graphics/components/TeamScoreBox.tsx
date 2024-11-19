import React from "react"
import styled, { css } from "styled-components"
import { FittedText } from "./FittedText"

interface TeamScoreBoxProps {
	team: string;
	score: number;
	left: boolean;
}

export const TeamScoreBox: React.FC<TeamScoreBoxProps> = ({ team, score, left }) => {
	return (
		<TeamAndScore $left={left}>
			<TeamBox>
				<FittedText text={team} font="Splatoon" align={left ? "left" : "right"} maxWidth={470} />
			</TeamBox>
			<ScoreBox>
				{score}
			</ScoreBox>
		</TeamAndScore>
	)
}

const TeamAndScore = styled.div<{ $left: boolean }>`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-direction: ${({ $left }) => $left ? 'row' : 'row-reverse'};

	${({ $left }) => $left ? css`margin-right: 10px;` : css`margin-left: 10px;`}
	height: 5rem;
	width: 100%;
	font-size: 3rem;
	color: #f04888;
	border: 8px solid #f04888;
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
	width: 100px;
	height: 100%;

	font-size: 5rem;

	color: #eae6f3;
	background-color: #f04888;
`;