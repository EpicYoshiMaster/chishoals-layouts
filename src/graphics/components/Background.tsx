import React, { useState } from 'react'
import styled from 'styled-components';

interface BackgroundProps
{
	backgroundColor?: string;
}

const DEFAULT_COLOR = "#eae6f3";

export const Background: React.FC<BackgroundProps> = ({ backgroundColor }) => {
	let bgOptions = ['/bundles/chishoals-layouts/images/bg_ika.png', '/bundles/chishoals-layouts/images/bg_octo.png', '/bundles/chishoals-layouts/images/bg_ika_octo.png'];
	const [option] = useState(Math.floor(Math.random() * (bgOptions.length)))

	return (
		<StyledBackground $backgroundColor={backgroundColor ? backgroundColor : DEFAULT_COLOR} src={bgOptions[option]} />
	);
}

const StyledBackground = styled.div<{$backgroundColor: string, src: string}>`
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 0px;

	background-size: 10%; //10%
	background-repeat: repeat;
	background-image: url(${props => props.src});
	background-color: ${({ $backgroundColor }) => $backgroundColor};
	background-attachment: scroll;
	
    animation: scrolling 90s linear infinite;

	@keyframes scrolling {
  	from{
      	background-position: 1920px 1920px;
  	}
  	to{
      	background-position: 0 0;
  	}
	}
`;