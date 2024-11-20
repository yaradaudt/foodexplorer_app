import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoins";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  position: absolute;
  border: none;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  padding: 0 5rem 0 6rem;
  gap: 2rem;
  
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding-left: 5rem;
    padding-right: 4rem;
    gap: 0.5rem;
  }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding-left: 4rem;
    padding-right: 3rem;
  }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }
  
  img {
    max-width: 15rem;
    margin-top: 0.2rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: 10rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      margin-top: 0.5rem;
      margin-right: 1rem;
      width: 12rem;
    }
  }

  .cartButton {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    margin: 0;
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    height: 3rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 0.8rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      display: none;
    }

    svg {
      font-size: 2rem;

      @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        font-size: 1.5rem;
      }
    }
  }
`;

export const CartIconWrapper = styled.div`
  display: none;
  
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: flex;
    position: absolute;
    right: 2rem;
  
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

`
export const CartBadge = styled.span`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  background-color: ${({ theme }) => theme.COLORS.RED_200};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1rem;
  font-weight: bold;
  border-radius: 50%;
  padding: 0.2rem 0.4rem;
  display: flex;
`

export const Menu = styled.button`
  background: transparent;
  border: none;
  display: none;

  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: flex;
    justify-self: center;
    position: relative;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: none;
  }
`;

export const LinkFavs = styled(Link)`
  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: auto;
    display: flex;
    font-size: 0.8rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: none;
  }
`;

export const LinkOrders = styled(Link)`
  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: auto;
    display: flex;
    font-size: 0.8rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: none;
  }
`;

export const LogOut = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.5rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 1.25rem;
    }
  }
`;
