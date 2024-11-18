import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoins";

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 22rem;
  padding-left: 0.8rem;
  border-radius: 5px;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    flex: 0;
    width: 100%;
  }
  
  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    border: none;
  }
  
  input {
    height: 3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 1rem;

    &:disabled {
      opacity: 0.5;
    }

    &:focus {
      outline: none;
    }
  }
`;
