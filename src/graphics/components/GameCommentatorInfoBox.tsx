import React from "react";
import { CarouselComponent } from "./CarouselComponent";
import { FittedText } from "./FittedText";
import { styled } from 'styled-components';

interface GameCommentatorInfoBoxProps {
	name: string;
	tag: string;
	pronouns: string;
	playing: boolean;
	fullWidth: number;
	nameWidth: number;
	pronounsWidth: number;
}

export const GameCommentatorInfoBox: React.FC<GameCommentatorInfoBoxProps> = ({ name, tag, pronouns, playing, fullWidth, nameWidth, pronounsWidth }) => {
	return (
		<CommentatorBox>
			<CommentatorName>
				<CarouselComponent speed={10000} playing={playing}>
					<FittedText text={name} font="Splatoon" align="left" maxWidth={pronouns !== "" ? nameWidth : fullWidth}  />
					{tag !== "" && <FittedText text={tag} font="Splatoon" align="left" maxWidth={pronouns !== "" ? nameWidth : fullWidth}  />}
				</CarouselComponent>
			</CommentatorName>
			{pronouns !== "" && 
			<CommentatorPronouns>
				<FittedText text={pronouns} font="Splatoon" align="left" maxWidth={pronounsWidth} />
			</CommentatorPronouns>
			}
		</CommentatorBox>
	)
}

const CommentatorBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;

	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 3rem;
	font-size: 2rem;

	color: var(--game-main-text);
	background-color: var(--game-main-bg);
	border: 3px solid var(--game-border);
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

	color: var(--game-sub-text);
	background-color: var(--game-sub-bg);
	border-left: 4px solid var(--game-border);
	border-radius: 0 4px 4px 0;
`;