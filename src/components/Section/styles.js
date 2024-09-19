import styled from 'styled-components'

export const Container = styled.section`
    margin: 4rem 0;

    > h2 {
        margin-bottom: 1.5rem;

        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-weight: 600;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
    
`