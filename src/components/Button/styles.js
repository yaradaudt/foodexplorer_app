import styled from 'styled-components'

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.RED_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    height: 3.5rem;
    border: 0;
    padding: 0 1rem;
    margin-top: 1.5rem;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1rem;

    &:disabled {
        opacity: 0.5;
    }

`