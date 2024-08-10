import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 6.5rem auto; // verificar este valor depois que estiver possivel de visualizar
    grid-template-areas: 
    "header"
    "content"
    "footer"
    ;
`