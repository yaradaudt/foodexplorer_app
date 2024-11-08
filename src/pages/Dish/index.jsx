import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Content, DishDetailled, DishImage, DishDescription, DishIngredients, DishToCart } from  './styles'

import { api } from '../../services/api'
import { useCart } from '../../hooks/cart'

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from  "../../components/Button"
import { ButtonText } from  "../../components/ButtonText"
import { IngredientsTags } from '../../components/IngredientsTags'
import { NumberVar } from  '../../components/NumberVar'

import { RxCaretLeft } from  'react-icons/rx'

export function Dish() {
    const { id } = useParams()
    const [dish, setDish] = useState(null)
    const [number, setNumber] = useState(1)
    const { addToCart } = useCart()

    const navigate = useNavigate()

    useEffect(() => {
        const fetchDishDetails = async () => {
            try {
                const response = await api.get(`/dishes/${id}`)
                setDish(response.data)
            } catch (error) {
                console.error("Erro ao carregar os detalhes do prato", error)
            }
        }
        fetchDishDetails()
    }, [id])

    function handleGoBack() {
        navigate(-1)
    }

    function handleAddToCart() {
        const item = {...dish, quantity: number }
        addToCart(item)
    }

    return(
        <Container>
            <Header />
                <ButtonText onClick={handleGoBack}>
                    <RxCaretLeft /> 
                    voltar
                </ButtonText>
            <Content>
                {dish ? (
                    <>
                        <DishImage>
                            <img src={`${api.defaults.baseURL}/files/${dish.image}`} alt={dish.title} />
                        </DishImage>

                        <DishDetailled>
                            <DishDescription>
                                <h1>{dish.title}</h1>
                                <p>{dish.description}</p>

                                <DishIngredients>
                                    {dish.ingredients && dish.ingredients.map((ingredient, index) => (
                                        <IngredientsTags key={index} title={ingredient.name} />      
                                    ))}
                                </DishIngredients>

                                <DishToCart>
                                    <NumberVar number={number} setNumber={setNumber} />
                                    <Button title={`incluir - ${dish.price}`} onClick={handleAddToCart}/>
                                </DishToCart>
                            </DishDescription>
                        </DishDetailled>
                    </>
                ) : (
                    <p>Carregando...</p>
                )}
            </Content>

            <Footer />
        </Container>
    )
}