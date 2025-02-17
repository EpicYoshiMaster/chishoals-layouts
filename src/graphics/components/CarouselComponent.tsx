import React, { useState, useEffect, useRef, useMemo } from 'react'
import styled from 'styled-components'

interface CarouselComponentProps {
    children: React.ReactNode;
    playing?: boolean; //Whether or not the carousel is currently playing
    speed?: number;
    transitionSpeed?: number;
    once?: boolean;
    startIndex?: number;
}

const DEFAULT_SPEED = 5000;
const DEFAULT_TRANSITION_SPEED = 1000;

export const CarouselComponent: React.FC<CarouselComponentProps> = ({ children, playing = true, speed, transitionSpeed, once, startIndex }) => {
    const [carouselIndex, setCarouselIndex] = useState(startIndex || 0);
    const carouselIntervalId = useRef<number | null>(null);
    const activeCarouselIndexRef = useRef(startIndex || 0);

    const childElements = useMemo(() => {
        return React.Children.toArray(children);
    }, [children]);

    useEffect(() => {

        if(playing && childElements.length > 1) {
            //Force it to the last element
            if(activeCarouselIndexRef.current >= childElements.length) {
                setCarouselIndex(childElements.length - 1);
                activeCarouselIndexRef.current = childElements.length - 1;
            }

            //Function ID from Set Interval, to clear it later
            carouselIntervalId.current = window.setInterval(() => {
                if(!playing) return;

                if(once && activeCarouselIndexRef.current + 1 >= childElements.length) {
                    if(carouselIntervalId.current) clearInterval(carouselIntervalId.current);
                    return;
                }

                const nextIndex = (activeCarouselIndexRef.current + 1) % childElements.length;

                setCarouselIndex(nextIndex);
                activeCarouselIndexRef.current = nextIndex;
            }, speed || DEFAULT_SPEED);
        }
        else if(playing) {
            setCarouselIndex(0);
            activeCarouselIndexRef.current = 0;
        }

        return () => {
            if(carouselIntervalId.current) clearInterval(carouselIntervalId.current);
        }
    }, [playing, childElements.length]);

    return (
        <CarouselContainer>
            {childElements.map((child, index, array) => (
                <CarouselItem key={index} $active={index === carouselIndex} $isRelative={index === array.length - 1} speed={(transitionSpeed ? transitionSpeed : DEFAULT_TRANSITION_SPEED) / 2}>
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
`;