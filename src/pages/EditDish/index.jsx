import { useState } from 'react'
import { Container, AddDishWrapper, Form, Label, TopSection, TopWrapper, CustomFileInput, FileLabel, FileNameDisplay, Select, MidSection, MidWrapper, BottomSection, Textarea, ButtonWrapper, IngredientsWrapper, BtnAddIngredient } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { RxCaretLeft } from  'react-icons/rx'
import { FiUpload } from 'react-icons/fi'
import { FiPlus } from 'react-icons/fi'

export function EditDish() {
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
                    <h1>Editar prato</h1>

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
                                <Input type="text" placeholder="Salada Ceasar" />
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
                                <Textarea type="text" placeholder="A Salada César é uma opção refrescante para o verão."/>
                        </BottomSection>

                        <ButtonWrapper>
                            <Button className="delete-dish" title="Excluir prato"/>
                            <Button className="save-dish" title="Salvar alterações"/>
                        </ButtonWrapper>
                    </Form>

                </AddDishWrapper>
            <Footer />
        </Container>
    )

}