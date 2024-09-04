import styled from "styled-components";

export const Container = styled.div`
  max-width: 6.25rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin-top: 1.5rem;
  gap: 1rem;
  font-size: 1.25rem;
  font-weight: 500;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  

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
