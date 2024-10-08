import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  width: 22rem;
  padding-left: 0.8rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    border: none;
  }

  input {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 1rem;

    &:disabled {
      opacity: 0.5; 
    }

    &:focus {
      outline: none;
    }
  }
`