import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoins";

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4.5rem;

  padding-left: 6rem;
  padding-right: 5rem;

  border: none;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding-left: 5rem;
    padding-right: 4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding-left: 4rem;
    padding-right: 3rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 0.5rem 2rem;
    height: 3rem;
  }
`;

export const FooterLogo = styled.div`
  img {
    max-width: 12rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: 10rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 9rem;
    }
  }
`;

export const Copyright = styled.p`
  display: flex;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  font-size: 0.8rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 0.7rem;
   }
`;
