import React, { useState } from 'react'
import styled from 'styled-components';

interface BackgroundProps
{
	backgroundColor?: string;
}

const BACKGROUND_PATH = '/bundles/chishoals-layouts/images/backgrounds';
const DEFAULT_COLOR = "#eae6f3";

//Weights should add up to 1
type Category = { weight: number, backgrounds: Background[] };
type Background = { image: string, size?: string }

const BACKGROUND_CATS: Category[] = [
	{
		weight: 0.8,
		backgrounds: [
			{ image: 'bg_ika.png' },
			{ image: 'bg_octo.png' },
			{ image: 'bg_ika_octo.png' }
		]
	},
	{
		weight: 0.2,
		backgrounds: [
			{ image: 'bg_pixelnpc.png', size: '50%' },
			{ image: 'bg_jelleton.png', size: '50%' },
			{ image: 'bg_shooter.png', size: '100%' },
			{ image: 'bg_charger.png', size: '75%' },
			{ image: 'bg_blaster.png', size: '50%' },
			{ image: 'bg_slosher.png', size: '50%' },
			{ image: 'bg_dualies.png', size: '50%' },
			{ image: 'bg_splatling.png', size: '50%' },
			{ image: 'bg_roller.png', size: '50%' },
			{ image: 'bg_brella.png', size: '50%' },
			{ image: 'bg_splatana.png', size: '50%' },
			{ image: 'bg_stringer.png', size: '50%' },
			{ image: 'bg_brush.png', size: '50%' },
			{ image: 'bg_main.png', size: '75%' }
		]
	}
]

const GetRandomBackground = (): Background => {
	let random = Math.random();
	let category = 0;

	BACKGROUND_CATS.forEach(((item, index) => {
		if(random <= 0) return;
		random = random - item.weight;

		if(random <= 0) {
			category = index;
		}
	}))

	return BACKGROUND_CATS[category].backgrounds[Math.floor(Math.random() * (BACKGROUND_CATS[category].backgrounds.length))];
}

export const Background: React.FC<BackgroundProps> = ({ backgroundColor }) => {
	const [randomBackground] = useState<Background>(GetRandomBackground())

	return (
		<StyledBackground 
		$backgroundColor={backgroundColor ? backgroundColor : DEFAULT_COLOR} 
		src={`${BACKGROUND_PATH}/${randomBackground.image}`}
		$size={randomBackground.size}/>
	);
}

const StyledBackground = styled.div<{$backgroundColor: string, src: string, $size?: string}>`
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 0px;

	background-size: ${({ $size }) => $size ? $size : '10%'};
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