import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Container } from './styles'
import { SliderCarousel } from "../SliderCarousel"

export function Section({ categoryName }) {
    const [dishes,  setDishes] = useState([])

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await api.get("/dishes", {
                    params: {
                        category: categoryName,
                    },
                })
                setDishes(response.data)
            } catch(error) {
                console.error(`Erro ao carregar pratos de ${categoryName}`, error)
            }
    }
   fetchDishes()
    }, [categoryName])

    return (
        <Container>
            <h2>{categoryName}</h2>
            <SliderCarousel dishes ={dishes} />
        </Container>
    )
}