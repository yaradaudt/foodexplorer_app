import { useState } from 'react'
import { Link } from  'react-router-dom'
import { PiReceipt } from "react-icons/pi"
import { FiLogOut } from "react-icons/fi"

import logoSVG from '../../assets/logo.svg'
import { Button } from '../Button'
import { Search } from '../Search'
import { useAuth } from '../../hooks/auth'
import { useCart } from '../../hooks/cart'

import { Container, LogOut, Wrapper } from './styles'

export function Header(){
    const { signOut } = useAuth()
    const { cartCount } = useCart()

    return(
        <Container>
            <Wrapper>
                <Link to="/">
                    <img src={logoSVG} 
                    alt="Food Explorer Logo" 
                    />
                </Link>

                <Search/>

                <Link to="/favorites">Meus Favoritos</Link>
                <Link to="/orders">Histórico de pedidos</Link>

            </Wrapper>

            <Link to="/cart">
                <Button 
                className="cartButton"
                icon={PiReceipt}
                title={`Carrinho (${cartCount})`}
                />
            </Link>

            <LogOut onClick={signOut}>
                <FiLogOut />
            </LogOut>

        </Container>
    )
}

