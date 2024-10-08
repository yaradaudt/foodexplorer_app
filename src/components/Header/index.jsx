import { useState } from 'react'
import { Link } from  'react-router-dom'
import { PiReceipt } from "react-icons/pi"
import { FiLogOut } from "react-icons/fi"

import logoSVG from '../../assets/logo.svg'
import { Button } from '../Button'
import { Search } from '../Search'
import { useAuth } from '../../hooks/auth'

import { Container, LogOut, Wrapper } from './styles'

export function Header(){
    const { signOut } = useAuth()
    const [cartCount, setCartCount] = useState(0)

    return(
        <Container>
            <Wrapper>
                <img src={logoSVG} 
                alt="Food Explorer Logo" 
                />

                <Search/>

                <Link to="/favorites">Meus Favoritos</Link>
                <Link to="/orders">Histórico de pedidos</Link>

            </Wrapper>

            <Button 
            className="cartButton"
            icon={PiReceipt}
            title={`Carrinho (${cartCount})`}
            />

            <LogOut onClick={signOut}>
                <FiLogOut />
            </LogOut>

        </Container>
    )
}

