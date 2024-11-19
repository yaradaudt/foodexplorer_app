import styled from "styled-components";
import { RxCaretRight, RxCaretLeft } from "react-icons/rx";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoins";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  overflow: visible;
  margin: auto;
  align-items: center;
  padding: 0 6rem 0 5rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 4rem 0 5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 3rem 0 4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 0 1rem 0 2rem;
  }

  .slick-slide {
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease;
    opacity: 0.7;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      opacity: none;
    }
  }

  .slick-center {
    transform: scale(1.07);
    z-index: 2;
    opacity: 1;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      transform: none;
      z-index: 1;
      opacity: none;
    }
  }

  .slick-track {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .slick-list {
    overflow: hidden;
  }

  .slick-prev,
  .slick-next {
    z-index: 10;
  }
`;

export const RightArrowWrapper = styled.div`
  width: 16rem;
  height: 100%;
  position: absolute;

  transform: translateY(-50%);
  z-index: 10;
  pointer-events: none;

  background: ${({ theme }) => `linear-gradient(
        to left,
        ${theme.COLORS.GRADIENT_100} 0%,
        rgba(0, 0, 0, 0.1) 100%
    )`};

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 0;
    background: none;
  }

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

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      width: 0;
      background: none;
    }
  }
`;
export const LeftArrowWrapper = styled.div`
  width: 16rem;
  height: 100%;
  position: absolute;

  transform: translateY(-50%);
  z-index: 10;
  pointer-events: none;

  background: ${({ theme }) => `linear-gradient(
        to right,
        ${theme.COLORS.GRADIENT_100} 0%,
        rgba(0, 0, 0, 0.1) 100%
    )`};

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 0;
    background: none;
  }

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

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      width: 0;
      background: none;
    }
  }
`;

export const CustomNextArrow = styled(RxCaretRight)`
  position: absolute;
  top: 50%;
  right: 1rem;
  pointer-events: auto;
  cursor: pointer;
  font-size: 3.5rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  &:hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }


`;

export const CustomPrevArrow = styled(RxCaretLeft)`
  position: absolute;
  top: 50%;
  left: 1rem;
  pointer-events: auto;
  cursor: pointer;
  font-size: 3.5rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  &:hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }


`;
