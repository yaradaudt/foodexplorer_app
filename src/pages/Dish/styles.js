import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoins";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  > button {
    margin-top: 8rem;
    margin-left: 6rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        margin-left: 4rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        margin-left: 3rem;
        font-weight: 600;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: start;
  flex-grow: 1;
  padding: 3.5rem 5rem 2rem 7.6rem;
  gap: 3rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 4.5rem 2rem 4.5rem;
    gap: 1.5rem;
  }
`;

export const DishImage = styled.div`
  flex: 1;
  max-width: 22.5rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;
    height: auto;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 90%;
        justify-content: center;
    }
  }
`;

export const DishDetailled = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  gap: 2rem;

`;

export const DishDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: "Poppins", sans-serif;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 1.25rem;

  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 2.25rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        font-size: 2rem;
        font-weight: 500;
    }
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 1.25rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        font-size: 1rem;
    }
  }
`;

export const DishIngredients = styled.div`
  display: flex;
`;

export const DishToCart = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    gap: 1rem;
  }

  button {
    margin: 0;
  }
`;
