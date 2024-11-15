import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoins";

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  position: absolute;
  border: none;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  padding-left: 6rem;
  padding-right: 5rem;
  gap: 2rem;

  img {
    max-width: 12rem;
    margin-top: 0.2rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) { 
    width: 10rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding-left: 5rem;
    padding-right: 4rem;
    gap: 0.75rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding-left: 4rem;
    padding-right: 3rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: none;
}
  a,
  .cartButton {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 0.9rem;
    }
  }

  .cartButton {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    margin: 0;

    svg {
      font-size: 2rem;

      @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        font-size: 1.5rem;
      }
    }
  }
`;

export const LogOut = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.5rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 1.25rem;
    }
  }
`;
