import { useState } from 'react'
import { Link } from "react-router-dom"
import { Container, FavButton, DishToCart } from './styles'

import { api } from '../../services/api'
//import { useAuth } from "../../hooks/auth";
import { useCart } from '../../hooks/cart'
import { useFavorites } from '../../hooks/favorites'

import { NumberVar } from '../NumberVar'
import { Button } from '../Button'

import { RiArrowRightSLine } from "react-icons/ri"
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { toast } from  'react-toastify'

export function DishCard({ data }) {
    //const { user } = useAuth()
    const { id, title, price, description, image } = data
    const { addToCart } =  useCart()
    const { addFavorite, removeFavorite, isFavorite } = useFavorites()

    const [number, setNumber] = useState(1);
    
    const imageURL = `${api.defaults.baseURL}/files/${image}`

    function handleAddToCart() {
      const item = { ...data, quantity: number }
      addToCart(item)
    }

    function handleToggleFavorite() {
        if (isFavorite(id)) {
          removeFavorite(id)
          toast.info('Removido dos favoritos!')
        } else {
          addFavorite(id)
          toast.success('Adicionado aos favoritos!')
        }
      }

    return(
        <Container>
                <FavButton onClick={handleToggleFavorite}>
                  {isFavorite(id) ? <AiFillHeart /> : <AiOutlineHeart />}
                </FavButton>
                <img 
                src={imageURL} alt={`Imagem de ${title}`} />
                    <h3 className="product-title">
                      <Link to={`/dish/${id}`}>{title}</Link>
                      <RiArrowRightSLine />
                    </h3>
                    <p className="description">{description}</p>
                    <h1 className="price">{price}</h1>
                <DishToCart>
                  <NumberVar number={number} setNumber={setNumber}/>
                  <Button title='incluir' onClick={handleAddToCart}/>
                </DishToCart>
        </Container>
    )
}