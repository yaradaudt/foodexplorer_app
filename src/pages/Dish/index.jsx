import { Container, Content, DishDetailled, DishImage, DishDescription, DishIngredients, DishToCart } from  './styles';
import { Header } from "../../components/Header";   
import { Footer } from "../../components/Footer";
import { Button } from  "../../components/Button";
import { ButtonText } from  "../../components/ButtonText";
import dishImage from  '../../assets/dish.svg';

import { RxCaretLeft } from  'react-icons/rx';

export function Dish() {
    return(
        <Container>
            <Header />

            <Content>
                <ButtonText>
                    <RxCaretLeft /> 
                    voltar
                </ButtonText>

                <DishDetailled>
                    <DishImage>
                        <img src={dishImage} alt="Salad Dish" />
                    </DishImage>

                    <DishDescription>
                        <h1>Salada Ravanello</h1>
                        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                    </DishDescription>

                    <DishIngredients>
                        <IngredientsTags /> 
                    </DishIngredients>

                    <DishToCart>
                        <Increment />
                        <Decrement />
                        <Button title='incluir - R$25,00' />
                    </DishToCart>
                </DishDetailled>
            </Content>

            <Footer />
        </Container>
    )
}