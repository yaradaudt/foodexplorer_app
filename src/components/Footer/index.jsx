import { Container, FooterLogo, Copyright } from './styles'
import footerLogo from '../../assets/footerLogo.svg'

export function Footer(){
    return(
        <Container>
           <FooterLogo >
                <img src={footerLogo}
                alt="Food explorer logo"
            />
            </FooterLogo>

            <Copyright>
                <p>&copy; 2024 - Todos os direitos reservados.</p>
            </Copyright>

                

        </Container>
    )
} 