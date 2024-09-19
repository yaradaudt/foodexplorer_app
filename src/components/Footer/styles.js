import styled from 'styled-components'

export const Container = styled.footer`
    grid-area: footer;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 4.5rem;

    padding: 0 6rem;

    bottom: 0;
    left: 0;

    border: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

`

export const FooterLogo = styled.div`
    height: 1.9rem;
`

export const Copyright = styled.div`
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 0.8rem;
`