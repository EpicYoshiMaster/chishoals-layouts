import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

interface CarouselComponentProps {
    children: React.ReactNode;
    speed?: number;
    transitionSpeed?: number;
    once?: boolean;
    indexRelative?: number; //Set the index of the item which should be set as relative (should be the largest present), 
    startIndex?: number;
}

const DEFAULT_SPEED = 5000;
const DEFAULT_TRANSITION_SPEED = 1000;

export const CarouselComponent: React.FC<CarouselComponentProps> = ({ children, speed, transitionSpeed, once, indexRelative, startIndex }) => {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const carouselIntervalId = useRef<number | null>(null);
    const activeCarouselIndexRef = useRef(startIndex || 0);

    useEffect(() => {
        let childElements = React.Children.toArray(children);

        if(childElements.length > 1) {
            //Function ID from Set Interval, to clear it later
            carouselIntervalId.current = window.setInterval(() => {

                if(once && activeCarouselIndexRef.current + 1 >= childElements.length) {
                    if(carouselIntervalId.current) clearInterval(carouselIntervalId.current);
                    return;
                }

                const nextIndex = (activeCarouselIndexRef.current + 1) % childElements.length;

                setCarouselIndex(nextIndex);
                activeCarouselIndexRef.current = nextIndex;
            }, speed || DEFAULT_SPEED);
        }

        return () => {
            if(carouselIntervalId.current) clearInterval(carouselIntervalId.current);
        }
    }, []);

    return (
        <CarouselContainer>
            {React.Children.toArray(children).map((child, index) => (
                <CarouselItem key={index} $active={index === carouselIndex} $isRelative={indexRelative ? index === indexRelative : false} speed={(transitionSpeed ? transitionSpeed : DEFAULT_TRANSITION_SPEED) / 2}>
                    {child}
                </CarouselItem>
            ))}
        </CarouselContainer>
    )
}

const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const CarouselItem = styled.div<{$active: boolean, $isRelative: boolean, speed: number}>`
    position: ${props => props.$isRelative ? `relative` : `absolute`};
    max-height: 100%;

    width: 100%;
    height: 100%;

    opacity: ${props => props.$active ? 1 : 0};
    transition: opacity ${props => props.speed}ms linear;
    transition-delay: ${props => props.$active ? props.speed : 0}ms;

    & img { height: 100%; }
`;