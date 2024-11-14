import { Container, RightArrowWrapper, LeftArrowWrapper, CustomNextArrow, CustomPrevArrow } from './styles'
import { DishCard } from '../../components/DishCard'

import Slider from  'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function SliderCarousel({ dishes }) {
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
        responsive: [
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: "0%",
                },
            },

            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0%",
                },
            },
        ]
    }

    return(
        <Container>
            <Slider {...settings}>
                {dishes.map((dish) => (
                    <DishCard key={dish.id} data={dish}/>
                ))}
                </Slider>
        </Container>
    )
}