import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  main {
    grid-area: content;
    justify-self: center;
    overflow-y: scroll;
  }
`;

export const Content = styled.div`
  margin: 16rem 0;

  display: flex;
  flex-direction: column;
  left: 1;
  align-items: center;
  justify-content: center;
`;
export const Banner = styled.div`
  display: flex;
  position: relative;
  width: 78rem;
  height: 16.25rem;
  padding: 0 6rem;
  border-radius: 0.5rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.COLORS.GRADIENT_200} 0%,
    ${({ theme }) => theme.COLORS.GRADIENT_300} 100%
  );
`;
export const BannerImage = styled.div`
  display: flex;
  position: absolute;
  left: -4.1rem;
  bottom: -0.86rem;
`;
export const BannerText = styled.div`
  position: absolute;
  text-align: left;
  align-items: center;
  top: 5.5rem;
  right: 6.25rem;

  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > p {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;
