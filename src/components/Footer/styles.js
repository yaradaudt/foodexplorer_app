import styled from 'styled-components'

export const Container = styled.footer`
    grid-area: footer;

    display: flex;
    align-items: center;
    width: 100%;
    height: 4.5rem;
    position: absolute;
    bottom: 0;
    left: 0;

    border: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    .footerLogo {
        padding-left: 6.5rem;
    }

    .copyright {
        margin-right: 2rem;
    }


`