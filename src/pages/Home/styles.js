import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoins";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  main {
    justify-self: center;
    overflow-y: scroll;
  }
`;

export const Content = styled.div`
  margin: 16rem 0;

  display: flex;
  flex-direction: column;
  left: 1;
  align-items: center;
  justify-content: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin: 8rem 0;
  }
`;
export const Banner = styled.div`
  display: flex;
  position: relative;
  width: 87%;
  height: 16.25rem;
  padding: 0 6rem;
  border-radius: 0.5rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.COLORS.GRADIENT_200} 0%,
    ${({ theme }) => theme.COLORS.GRADIENT_300} 100%
  );

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 14rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 10rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    height: 6rem;
  }
`;
export const BannerImage = styled.div`
  display: flex;
  position: absolute;
  left: -4.1rem;
  bottom: -0.86rem;
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    left: -2.1rem;
    bottom: -0.1rem;
  }
  img {
    width: 100%;
    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: 80%;
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 50%;
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      width: 40%;
    }
  }
`;
export const BannerText = styled.div`
  position: absolute;
  text-align: left;
  align-items: center;
  top: 5.5rem;
  right: 6.25rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    top: 5rem;
    right: 2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    top: 3rem;
    right: 1rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    top: 1.5rem;
    right: 1rem;
  }

  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 2rem;
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 1.5rem;
    }
  }
  > p {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 0.7rem;
    }
  }
`;
