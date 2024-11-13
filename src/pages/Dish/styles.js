import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    > button {
        margin-top: 8rem;
        padding-left: 6rem;
    }
`

export const Content = styled.div`
    display: flex;
    flex-grow: 1;
    padding-left: 7.6rem;
    gap: 3rem;

`
export const DishImage = styled.div` 
    flex: 1;
    padding-top: 2.75rem;

    img {
        max-width: 100%;
        height: auto;
    }

`

export const DishDetailled = styled.div`
    display: flex;
    flex: 2;
    align-items: center;
    gap: 2rem;
    padding-right: 7.6rem;
    
`

export const DishDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-family: 'Poppins', sans-serif;

    h1 {
        font-size: 2.5rem;
        font-weight: bold;
    }

    p {
        font-size: 1.5rem;
        font-weight: 300;
    }

`

export const DishIngredients = styled.div`
    display: flex;
    flex-wrap: wrap;

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
