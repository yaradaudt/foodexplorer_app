import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

    .wrapper {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        text-align: center;

        margin-left: 9.5rem;
        margin-right: 19rem;

        > img {
            width: 20rem;
        }
    }

`

export const Form = styled.form`
    width: 476px;
    height: 580px;

    margin-top: 3.5rem;
    margin-right: 1rem;
    padding: 0 4rem;

    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > h1 {
        padding-top: 4rem;
        font-size: 2rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

    }

    .logIn {
        margin-top: 2rem;
        padding: 1rem 0;
        width: 100%;
    }

    > h2 {
        margin-top: 2rem;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        font-family: 'Roboto', serif;
        font-weight: 400;
        align-self: flex-start;
    }

    > a {
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        margin-top: 1.5rem;
        padding-bottom: 3rem;
    }
`