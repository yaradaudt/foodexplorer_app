import styled from "styled-components"
import { RxCaretRight, RxCaretLeft } from "react-icons/rx"

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    overflow: visible;
    margin: auto;
    align-items: center;
    padding: 0 6rem;
    
    .slick-slide {
        width: 100%;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        transition: transform 0.5s ease-in-out;
    }

    .slick-center {
        transform: scale(1.07);
        z-index: 2;
    }

    .slick-track {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .slick-list {
        overflow: hidden;
    }

    .slick-prev, .slick-next {
        z-index: 1;
    }
`
export const RightArrowWrapper = styled.div`
    width: 16rem; 
    height: 29rem;
    position: absolute;
    
    transform: translateY(-50%);
    z-index: 10;
    pointer-events: none;

    background: ${({ theme }) => `linear-gradient(
        to left,
        ${theme.COLORS.GRADIENT_100} 0%,
        rgba(0, 0, 0, 0.1) 100%
    )`};

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${({ theme }) => `linear-gradient(
            to left,
            ${theme.COLORS.GRADIENT_100} 0%,
            rgba(0, 0, 0, 0) 100%
        )`};
    }
`
export const LeftArrowWrapper = styled.div`
    width: 16rem; 
    height: 29rem;
    position: absolute;

    transform: translateY(-50%);
    z-index: 10;
    pointer-events: none;

    background: ${({ theme }) => `linear-gradient(
        to right,
        ${theme.COLORS.GRADIENT_100} 0%,
        rgba(0, 0, 0, 0.1) 100%
    )`};

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        background: ${({ theme }) => `linear-gradient(
            to right,
            ${theme.COLORS.GRADIENT_100} 0%,
            rgba(0, 0, 0, 0.1) 100%
        )`};
    }
`

export const CustomNextArrow = styled(RxCaretRight)`
    position: absolute;
    top: 50%;
    right: 2rem;
    pointer-events: auto;
    cursor: pointer;
    font-size: 3.5rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &:hover {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
`

export const CustomPrevArrow = styled(RxCaretLeft)`
    position: absolute;
    top: 50%;
    pointer-events: auto;
    cursor: pointer;
    left: 2rem;
    font-size: 3.5rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &:hover {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

`
