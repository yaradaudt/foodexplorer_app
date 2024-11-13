import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoins";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;
export const Wrapper = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 20rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

export const Form = styled.form`
  width: 29.75rem;
  height: auto;

  padding: 0 4rem;

  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    margin-top: 2rem;
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: none;
    }
  }

  input:focus {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .logIn {
    margin-top: 2rem;
    width: 100%;
  }

  > h2 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-family: "Roboto", serif;
    font-weight: 400;
    align-self: flex-start;
  }

  a {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 500;
    margin-top: 1.5rem;
    padding-bottom: 3rem;
  }
`;
