import { Container } from './styles'
import footerLogo from '../../assets/footerLogo.svg'
import copyright from '../../assets/copyright.svg'

export function Footer(){
    return(
        <Container>
           <div className="footerLogo" >
                <img src={footerLogo}
                alt="Food explorer logo"
            />
            </div>

            <div className="copyright">
                <img src={copyright} 
                alt="2023 - Todos os direitos reservados."
            />
            </div>

                

        </Container>
    )
} 