import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoins";

export const Container = styled.section`
  padding-top: 4rem;
  width: 100%;

  > h2 {
    padding-left: 6rem;
    padding-bottom: 1.5rem;

    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    font-weight: 600;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 1.9rem;
      padding: 0 0 1.5rem 5rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding: 0 0 1rem 4rem;
      font-size: 1.75rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      padding: 0 0 1rem 2rem;
      font-size: 1.5rem;
    }
  }
`;
