import styled from 'styled-components'

export const Container = styled.header`
    grid-area: header;
    width: 100%;

    height: 6rem;

    border: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    display: flex;
    justify-content: space-between;
    align-items: center;

    .wrapper {
        display: flex;
        margin: 1.5rem 0 1.5rem 6.5rem;
        align-items: center;
        gap: 2rem;

        a {
            font-size: 0.9rem;
            display: flex;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }
    
    > Button {
        width: 11.5rem;
        height: 3.5rem;
        margin: auto;
    }

    `

export const LogOut = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background: none;
    margin: 0;

    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 1.5rem;
        
    }

`