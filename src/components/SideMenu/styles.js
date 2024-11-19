import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoins"

export const Container = styled.aside`
display: none;

@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: flex;
    position: fixed;
    flex-direction: column;
    gap: 2rem;
    z-index: 999;
    width: 100%;
    height: 100vh;
    overflow-y: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  gap: 1rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 2rem;

  `;

export const Title = styled.button`
  display: flex;
  align-items: center;
  padding-top: 1.5rem;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background: transparent;
  border: none;

  svg {
    font-size: 2rem;
  }
`;

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 2rem; 

    button {
        font-weight: 400;
        border-bottom: solid 1px ${({ theme }) => theme.COLORS.BACKGROUND_1000};
        width: 100%;
        padding-bottom: 0.5rem;
    }

`
export const SearchWrapper = styled.div`
    padding: 0 2rem;
`

