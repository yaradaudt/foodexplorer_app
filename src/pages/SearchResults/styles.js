import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoins";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > button {
    margin-top: 8rem;
    padding-left: 6rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding-left: 5rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding-left: 4rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      padding-left: 2rem;
      margin-top: 7rem;
      font-size: 1.5rem;

      svg {
        font-size: 2rem;
      }
    }
  }
`;

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 2rem 5rem 0 6rem;

  h1 {
    font-size: 1.75rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 2rem 4rem 0 5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 1.5rem 3rem 0 4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 1.5rem 2rem 0 2rem;
  }
`;

export const ResultsList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 1.5rem;
margin-top: 2rem;
height: 100%;

@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
  justify-content: center;
}

@media (max-width: ${DEVICE_BREAKPOINTS.SM}){
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}
`;
