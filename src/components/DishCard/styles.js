import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoins";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  max-width: 21rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 95%;
    gap: 0.75rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 85%;
    gap: 0.5rem;
  }

  img {
    padding-top: 0.5rem;
    width: 75%;
    border-radius: 50%;
  }

  .description {
    font-size: 0.9rem;
    text-align: center;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 0.75rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: none;
    }
  }

  .price {
    font-size: 2rem;
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.BLUE_200};

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 1.75rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 1.5rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 1rem;
    }
  }
`;

export const LinkTitle = styled(Link)`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 1rem;
      text-align: left;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      text-align: center;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        font-size: 1rem;
        font-weight: 600;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 2rem;

      @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        font-size: 1.5rem;
       }

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-size: 1rem;
       }

    }
`

export const FavButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
  background: none;
  border: none;
  position: absolute;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1.25rem;
  }
`;

export const DishToCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    transform: scale(0.8);
    padding-right: 1rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    transform: scale(0.7);
    gap: 1.5rem;
  }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 100%;
    transform: scale(0.8);
    flex-direction: column;
    gap: 0.5rem;
    padding: 0;
   }

  button {
    margin: 0;
    width: 100%;
  }
`;
