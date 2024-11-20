import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import {
  Container,
  AddDishWrapper,
  Form,
  Label,
  TopSection,
  TopWrapper,
  CustomFileInput,
  FileLabel,
  FileNameDisplay,
  Select,
  MidSection,
  MidWrapper,
  BottomSection,
  Textarea,
  ButtonWrapper,
  IngredientsWrapper,
} from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { DishItem } from "../../components/DishItem";

import { RxCaretLeft } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";

import { toast } from "react-toastify";

export function AddDish() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setFileName(file ? file.name : "");
  };

  function handleAddIngredient() {
    if (newIngredient.trim() === "") return;

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deletedIngredient) {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient !== deletedIngredient)
    );
  }

  function handlePriceChange(e) {
    const rawValue = e.target.value.replace(/[^\d,]/g, "");
    setPrice(rawValue);
  }

  function formatPriceOnBlur() {
    if (price) {
      const numericValue = parseFloat(price.replace(",", ".")).toFixed(2);
      setPrice(`R$ ${numericValue.replace(".", ",")}`);
    }
  }

  async function handleAddNewDish() {
    if (!name || !category || !ingredients.length || !price || !description) {
      return toast.error("Por favor, preencha todos os campos.");
    }

    setLoading(true);

    try {
      const response = await api.post("/dishes", {
        title: name,
        category,
        price: parseFloat(price.replace("R$", "").replace(",", ".")),
        description,
        ingredients,
      });

      const dishId = response.data.id;

      if (image) {
        const formData = new FormData();
        formData.append("image", image);

        await api.patch(`/dishes/image/${dishId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      toast.success("Prato criado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao criar prato:", error);
      toast.error("Erro ao criar prato.");
    } finally {
      setLoading(false);
    }
  }

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <ButtonText onClick={handleGoBack}>
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
                {fileName ? fileName : "Escolha uma imagem"}
                <CustomFileInput
                  id="file-upload"
                  type="file"
                  onChange={handleFileChange}
                />
              </FileLabel>
            </TopWrapper>

            <TopWrapper>
              <Label>Nome</Label>
              <Input
                className="dish-name"
                type="text"
                name="name"
                value={name}
                placeholder="Nome do Prato"
                onChange={(e) => setName(e.target.value)}
              />
            </TopWrapper>

            <TopWrapper>
              <Label>Categoria</Label>
              <Select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Selecionar</option>
                <option value="Refeições">Refeições</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Sobremesas">Sobremesas</option>
              </Select>
            </TopWrapper>
          </TopSection>

          <MidSection>
            <MidWrapper>
              <Label>Ingredientes</Label>
              <IngredientsWrapper>
                {ingredients.map((ingredient, index) => (
                  <DishItem
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}

                <DishItem
                  isNew
                  placeholder="Adicionar"
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </IngredientsWrapper>
            </MidWrapper>

            <MidWrapper>
              <Label>Preço</Label>
              <Input
                className="dish-price"
                type="text"
                placeholder="R$ 0,00"
                value={price}
                onChange={handlePriceChange}
                onBlur={formatPriceOnBlur}
              />
            </MidWrapper>
          </MidSection>

          <BottomSection>
            <Label>Descrição</Label>
            <Textarea
              type="text"
              value={description}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
              onChange={(e) => setDescription(e.target.value)}
            />
          </BottomSection>

          <ButtonWrapper>
            <Button
              title="Salvar alterações"
              onClick={handleAddNewDish}
              loading={loading}
            />
          </ButtonWrapper>
        </Form>
      </AddDishWrapper>
      <Footer />
    </Container>
  );
}
