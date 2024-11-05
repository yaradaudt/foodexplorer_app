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
        speed: 800,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "4%",
        focusOnSelect: false, 
        swipeToSlide: true,
        arrows: true,
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