import styled, { keyframes, css } from "styled-components";
import React, { useCallback, useEffect, useState } from "react";

interface NameplateProps {
	show: boolean;
	name?: string;
	pronouns?: string;
	tag?: string;
}

//if show is changed this should trigger an animation


//show vs. visible?
//animation time

export const Nameplate: React.FC<NameplateProps> = ({ show, name, pronouns, tag }) => {

	const [ visible, setVisible ] = useState<boolean>(false);
	const [ active, setActive ] = useState<boolean>(false);
	
	let onAnimEnd = useCallback((animName: string) => {
		if(animName === HideNameplate.getName()) {
			setVisible(false);
		}

		setActive(false);
	}, []);

	useEffect(() => {
		if(show && !visible) {
			setVisible(true);
			setActive(true);
		}

		if(!show && visible) {
			setActive(true);
		}
	}, [show, visible]);

	return (
		<NameplateBox
		$show={show}
		$visible={visible}
		$active={active} 
		onAnimationEnd={(event) => { onAnimEnd(event.animationName); }}>
			<Name>
				{name}
			</Name>
			<Pronouns>
				{pronouns}
			</Pronouns>
			<Tag>
				{tag}
			</Tag>
		</NameplateBox>
	);
}

const ShowNameplate = keyframes`
	0% {
		opacity: 1;
		clip-path: polygon(
			50% 0,
			50% 0,
			50% 100%,
			50% 100%
		);
	}

	100% {
		opacity: 1;
		clip-path: polygon(
			0 0,
			100% 0,
			100% 100%,
			0 100%
		)
	}
`;

const HideNameplate = keyframes`
	0% {
		opacity: 1;
		clip-path: polygon(
			0 0,
			100% 0,
			100% 100%,
			0 100%
		)
	}

	100% {
		opacity: 1;
		clip-path: polygon(
			50% 0,
			50% 0,
			50% 100%,
			50% 100%
		);
	}
`;

const NameplateBox = styled.div<{ $show: boolean, $visible: boolean, $active: boolean }>`
	position: relative;
	display: grid;

	padding: 5px;
	height: 150px;
	width: 660px;

	text-align: center;

	border: 8px solid #f04888;
	background-color: #eae6f3;
	color: #a72456;

	${({$visible}) => $visible ? css`opacity: 1;` : css`opacity: 0;` };

	${(props) => {
		if(props.$active) {
			return css`animation: 750ms ease-in 0s ${props.$show ? ShowNameplate : HideNameplate} forwards;`	
		}
		else {
			return css`animation: none;`
		}
	}}
`;

const Name = styled.div`
	font-size: 3rem;
`;

const Pronouns = styled.div`
	font-size: 2rem;
`;

const Tag = styled.div`
	font-size: 2rem;
`;