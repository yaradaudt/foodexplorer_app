import { Container, RightArrowWrapper, LeftArrowWrapper, CustomNextArrow, CustomPrevArrow } from './styles'
import { DishCard } from '../../components/DishCard'
import Slider from  'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const dishes = [
    { title: "Salada Ravanello", price: "R$ 49,90", image: "https://via.placeholder.com/150" },
    { title: "Torradas de Parma", price: "R$ 39,90", image: "https://via.placeholder.com/150" },
    { title: "Spaguetti Gambe", price: "R$ 59,90", image: "https://via.placeholder.com/150" },
    { title: "Prato 4", price: "R$ 49,90", image: "https://via.placeholder.com/150" },
    { title: "Prato 5", price: "R$ 39,90", image: "https://via.placeholder.com/150" },
    { title: "Prato 6", price: "R$ 59,90", image: "https://via.placeholder.com/150" },
];

export function SliderCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2.5,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: "15%",
        focusOnSelect: true,
        nextArrow: (
            <RightArrowWrapper>
                <CustomNextArrow />
            </RightArrowWrapper>
        ),
        prevArrow: (
            <LeftArrowWrapper>
                <CustomPrevArrow />
            </LeftArrowWrapper>
        ),
    }

    return(
        <Container>
            <Slider {...settings}>
                {dishes.map((dish, index) => (
                    <DishCard key={index} data={dish}/>
                ))}
            </Slider>
        </Container>
    )
}