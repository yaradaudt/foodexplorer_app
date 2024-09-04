import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;
  
  border: none;
  background: none;

  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};


  > svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  
`