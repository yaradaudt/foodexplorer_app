import { useState } from 'react'
import { Container, AddDishWrapper, Form, Label, TopSection, TopWrapper, CustomFileInput, FileLabel, FileNameDisplay, Select, MidSection, MidWrapper, BottomSection, Textarea, ButtonWrapper, IngredientsWrapper, BtnAddIngredient } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { IngredientsTags } from '../../components/IngredientsTags'
import { ButtonText } from '../../components/ButtonText'

import { RxCaretLeft } from  'react-icons/rx'
import { FiUpload } from 'react-icons/fi'
import { FiPlus } from 'react-icons/fi'

export function AddDish() {
    const [fileName, setFileName] = useState(''); 
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFileName(file ? file.name : ''); 
    };
    
    return (
        <Container>
            <Header />
                <ButtonText>
                    <RxCaretLeft /> 
                        voltar
                </ButtonText>

                <AddDishWrapper>
                    <h1>Adicionar Prato</h1>

                    <Form>
                        <TopSection>
                            <TopWrapper>
                                <Label>Imagem do prato </Label>
                                <FileLabel htmlFor="file-upload">
                                <FiUpload />
                                Selecione imagem
                                <CustomFileInput
                                id="file-upload"
                                type="file"
                                onChange={handleFileChange}
                                />
                            </FileLabel>
                            {fileName && <FileNameDisplay>{fileName}</FileNameDisplay>}
                            </TopWrapper>

                            <TopWrapper>
                                <Label>Nome</Label>
                                <Input type="text" placeholder="Ex.: Salada Ceasar" />
                            </TopWrapper>

                            <TopWrapper>
                                <Label>Categoria</Label>
                                <Select>
                                    <option value="">Selecionar</option>
                                    <option value="refeicoes">Refeições</option>
                                    <option value="bebidas">Bebidas</option>
                                    <option value="sobremesas">Sobremesas</option>
                                </Select>
                            </TopWrapper>
                        </TopSection>

                        <MidSection>
                            <MidWrapper>
                                <Label>Ingredientes</Label>
                                <IngredientsWrapper>
                                    <BtnAddIngredient>Adicionar
                                        <FiPlus />
                                    </BtnAddIngredient>
                                </IngredientsWrapper>
                            </MidWrapper>

                            <MidWrapper>
                                <Label>Preço</Label>
                                <Input type="number" placeholder="R$ 0,00" />
                            </MidWrapper>
                        </MidSection>

                        <BottomSection>
                            <Label>Descrição</Label>
                                <Textarea type="text" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."/>
                        </BottomSection>

                        <ButtonWrapper>
                            <Button title="Salvar alterações"/>
                        </ButtonWrapper>
                    </Form>

                </AddDishWrapper>
            <Footer />
        </Container>
    )

}