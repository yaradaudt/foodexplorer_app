import styled from 'styled-components'

export const Container = styled.header`
    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    gap: 2rem;

    width: 100%;
    height: 6rem;

    border: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    .wrapper {
        display: flex;
        align-items: center;
        padding: 1.5rem 0;
        gap: 2.5rem;

        a {
            display: flex;
            font-size: 1rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }
    .cartButton {
        width: 13.5rem;
        height: 3.5rem;
        margin: auto 0;
    }

    `

export const LogOut = styled.button`
    display: flex;
    align-items: right;
    border: none;
    background: none;


    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 1.5rem;
        
    }

`