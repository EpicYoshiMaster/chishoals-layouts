/**
 * Horizontally squishes text within a max width
 * 
 * A React version of:
 * fitted-text -  https://github.com/inkfarer/fitted-text
 * sc-fitted-text - https://github.com/SupportClass/sc-fitted-text
 * 
 */
import React, { useRef, useEffect, useMemo, useState } from 'react'
import FontFaceObserver from 'fontfaceobserver'
import styled from 'styled-components';

type FittedTextAlign = 'left' | 'center' | 'right';

interface FittedTextProps
{
	text: string;
	maxWidth: number;
	align: FittedTextAlign;
	font: string;
}

const justifyAlign = (align: FittedTextAlign) => {
	switch(align) {
		case 'center': return 'center';
		case 'right': return 'flex-end';
		case 'left': return 'unset';
	}
}

export const FittedText: React.FC<FittedTextProps> = ({ text, maxWidth, align, font }) => {
	const textFit = useRef<HTMLDivElement>(null);
	const [textScale, setTextScale] = useState(0);

	useEffect(() => {
		const observer = new FontFaceObserver(font).load().then(() => {
			if(!textFit.current) return;

			const width = textFit.current.scrollWidth;

			if(width > maxWidth) {
				setTextScale(maxWidth / width);
			}
			else {
				setTextScale(1);
			}
		}).catch(() => {
			setTextScale(1);
		})
	}, [text, maxWidth, align, font, setTextScale]);

	return (
		<TextSpace 
		$maxWidth={maxWidth}
		$align={align}
		>
			<TextFit
			ref={textFit} 
			$scale={textScale}
			$font={font}
			$align={align}
			>
			{text}	
			</TextFit>
		</TextSpace>
	)
}

const TextSpace = styled.div<{ $maxWidth: number, $align: FittedTextAlign }>`
	position: relative;
	display: flex;

	justify-content: ${({$align}) => justifyAlign($align)};
	
	white-space: nowrap;
	max-width: ${({$maxWidth}) => $maxWidth > 0 ? `${$maxWidth}px` : `unset`};
`;

const TextFit = styled.div<{ $scale: number, $font: string, $align: FittedTextAlign }>`
	text-align: ${({$align}) => $align};
	transform-origin: ${({$align}) => `${$align} center`};
	width: max-content;
	transform: scaleX(${({ $scale }) => $scale});
	font-family: ${({ $font}) => $font};
`;