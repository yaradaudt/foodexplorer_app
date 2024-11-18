import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoins";

export const Container = styled.div`
  max-width: 6.25rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;
  font-size: 1.25rem;
  font-weight: 500;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    justify-content: center;
    transform: scale(1.1);
  }
  

  button {
    border: none;
    background: none;
    font-size: 1.5rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
  `
