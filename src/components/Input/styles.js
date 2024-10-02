import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  > input {
    height: 3rem;
    width: 100%;
    box-sizing: border-box;    
    padding: 0.75rem 0.85rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: none;
    border-radius: 5px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:focus{
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }

  }
`