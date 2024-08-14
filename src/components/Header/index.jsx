import { Container, LogOut } from './styles'
import logoSVG from '../../assets/logo.svg'
import { Button } from '../Button'
import { Search } from '../Search'

//import { PiReceipt } from "react-icons/pi"
import { FiLogOut } from "react-icons/fi"


export function Header(){
    return(
        <Container>
            <div className="wrapper">
                <img src={logoSVG} 
                alt="Food Explorer Logo" 
                />

                <Search/>

                <a href="#">Meus Favoritos</a>
                <a href="#">Histórico de pedidos</a>

            </div>

            <Button className="cartButton"
            //icon={PiReceipt} // this is not showing in the preview, I'll need to figure it out later.
            title="Carrinho"/>

            <LogOut>
                <FiLogOut />
            </LogOut>

        </Container>
    ) // lembrar de alterar "a" para redirecionar rotas nas devidas páginas
}

