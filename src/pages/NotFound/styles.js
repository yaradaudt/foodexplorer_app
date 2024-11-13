import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  > a {
    font-family: "Poppins", serif;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    margin-top: 1.5rem;
  }
`;