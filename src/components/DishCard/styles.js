import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    max-width: 21rem;
    border-radius: 0.5rem;
    height: 29rem;
   background-color: ${({theme}) => theme.COLORS.BACKGROUND_200};

    img {
        padding-top: 0.5rem;
        max-width: 11rem;
        border-radius: 50%;
    }

    .product-title {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.LIGHT_300};

        svg {
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-size: 1.5rem;   
        }
    }

    .description {
        font-size: 0.9rem;
        text-align: center;
    }

    .price {
        font-size: 2rem;
        font-weight: 300;
        color: ${({theme}) => theme.COLORS.BLUE_200};
    }
`

export const FavButton = styled.button`
    display: flex;
    flex-wrap: wrap;
    align-self: flex-end;
    background: none;
    border: none;
    position: absolute;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-size: 1.5rem;
    cursor: pointer;
    
`

export const DishToCart = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 0;
    
    button {
        margin: 0;
    }





`