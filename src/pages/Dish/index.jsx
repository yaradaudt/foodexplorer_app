import { Container, Content, DishDetailled, DishImage, DishDescription, DishIngredients, DishToCart } from  './styles';
import { useState } from 'react';
import { Header } from "../../components/Header";   
import { Footer } from "../../components/Footer";
import { Button } from  "../../components/Button";
import { ButtonText } from  "../../components/ButtonText";
import { IngredientsTags } from '../../components/IngredientsTags';
import { NumberVar } from  '../../components/NumberVar';
import dishImage from  '../../assets/dish.svg';

import { RxCaretLeft } from  'react-icons/rx';

export function Dish() {
    const [number, setNumber] = useState(1);

    return(
        <Container>
            <Header />
                <ButtonText>
                    <RxCaretLeft /> 
                    voltar
                </ButtonText>
            <Content>
                <DishImage>
                    <img src={dishImage} alt="Salad Dish" />
                </DishImage>

                <DishDetailled>
                    <DishDescription>
                        <h1>Salada Ravanello</h1>
                        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

                        <DishIngredients>
                            <IngredientsTags title='tomate' /> 
                            <IngredientsTags title='alface' /> 
                            <IngredientsTags title='rabanete' />      
                        </DishIngredients>

                        <DishToCart>
                            <NumberVar number={number} setNumber={setNumber} />
                            <Button title='incluir - R$25,00' />
                        </DishToCart>
                    </DishDescription>

                </DishDetailled>

            </Content>

            <Footer />
        </Container>
    )
}