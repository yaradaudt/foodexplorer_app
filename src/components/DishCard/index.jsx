import { useState } from 'react'
import { Link } from "react-router-dom"
import { useCart } from '../../hooks/cart'
import { Container, FavButton, DishToCart } from './styles'
import { RiArrowRightSLine } from "react-icons/ri"
import { NumberVar } from '../NumberVar'
import { Button } from '../Button'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import dishImage from '../../assets/dish.svg'
import { api } from '../../services/api'
import { useFavorites } from '../../hooks/favorites'
//import { useAuth } from "../../hooks/auth";

export function DishCard({ data }) {
    //const { user } = useAuth()
    //const imageURL = `${api.defaults.baseURL}/files/${data.image}`
    //const { addFavorite, removeFavorite, isFavorite } = useFavorites()
    const { title, price, image } = data;
    const { addToCart } =  useCart();

    const [number, setNumber] = useState(1);

    function handleAddToCart() {
      const item = { ...data, quantity: number }
      addToCart(item)
    }

    /*function handleToggleFavorite() {
        if (isFavorite(dish.id)) {
          removeFavorite(dish.id)
        } else {
          addFavorite(dish.id)
        }
      }    */

    return(
        <Container>
                <FavButton>
                <AiOutlineHeart />
                </FavButton>
                <img 
                src={image} alt={`Imagem de ${title}`} />
                    <h3 className="product-title">{title}
                    <RiArrowRightSLine />
                    </h3>
                    <p className="description">Rabanetes, folhas verdes e molho agridoce salpicados com gergelim </p>
                    <h1 className="price">{price}</h1>
                <DishToCart>
                <NumberVar number={number} setNumber={setNumber}/>
                <Button title='incluir' onClick={handleAddToCart}/>
                </DishToCart>
        </Container>
    )
}