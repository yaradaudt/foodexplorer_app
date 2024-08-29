import styled from  'styled-components';

export const Container = styled.span`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 0.9rem;
    padding: 0.25rem 0.5rem;
    margin-right: 0.75rem;
    border-radius: 0.3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
`