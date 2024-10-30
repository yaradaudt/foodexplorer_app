import styled from 'styled-components'

export const Container = styled.section`
    padding-top: 4rem;

    > h2 {
        padding-left: 6rem;
        padding-bottom: 1.5rem;

        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-weight: 600;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
    
`