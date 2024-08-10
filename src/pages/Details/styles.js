import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 6rem auto 4.5rem; // verificar este valor depois que estiver possivel de visualizar
    grid-template-areas: 
    "header"
    "content"
    "footer"
    ;
`