import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { DishItem } from "../../components/DishItem";

import { RxCaretLeft } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";

import { toast } from "react-toastify";

export function EditDish() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [updatedImage, setUpdatedImage] = useState(null);

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [loading, setLoading] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`);
        const dish = response.data;

        setName(dish.title);
        setCategory(dish.category);
        setPrice(`R$ ${parseFloat(dish.price).toFixed(2).replace(".", ",")}`);
        setDescription(dish.description);
        setFileName(dish.image);
        setIngredients(dish.ingredients.map((ingredient) => ingredient.name));
      } catch (error) {
        console.error("Erro ao buscar o prato", error);
      }
    }
    fetchDish();
  }, [params.id]);

  function handleFileChange(e) {
    const file = e.target.files[0];
    setImage(file);
    setUpdatedImage(file);
    setFileName(file ? file.name : "");
  }

  async function handleAddIngredient() {
    if(newIngredient.trim() === "") return;

    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    setNewIngredient("");
    }

  function handleRemoveIngredient(deletedIngredient) {
    setIngredients(prevIngredients =>
      prevIngredients.filter(ingredient => ingredient !== deletedIngredient)
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

  async function handleEditDish() {
    if (!name || !category || !ingredients.length || !price || !description) {
      return toast.error("Por favor, preencha todos os campos.");
    }
    
    if(newIngredient) {
      return toast.error("Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }

    setLoading(true);

    try {
      if (updatedImage) {
        const formData = new FormData();
        formData.append("image", updatedImage);

        await api.patch(`/dishes/image/${params.id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      const updatedDish = {
        title: name,
        category,
        price: parseFloat(price.replace("R$", "").replace(",", ".")),
        description,
        ingredients,
      };

      await api.put(`/dishes/${params.id}`, updatedDish);

      toast.success("Prato atualizado com sucesso!");
    } catch (error) {
      console.log("Erro", error)
      toast.error("Erro ao atualizar prato.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (window.confirm("Tem certeza que deseja excluir este prato?")) {
      try {
        await api.delete(`/dishes/${params.id}`);
        toast.success("Prato excluído com sucesso!");
        navigate("/");
      } catch (error) {
        console.error("Erro ao excluir prato", error);
        toast.error("Erro ao excluir o prato");
      }
    }
  }

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <ButtonText onClick={handleGoBack}>
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
                ))
              }
                <DishItem 
                isNew
                placeholder="Adicionar"
                onChange={e => setNewIngredient(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredient}
                />
              </IngredientsWrapper>
            </MidWrapper>

            <MidWrapper>
              <Label>Preço</Label>
              <Input
                type="text"
                placeholder="R$ 0, 00"
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
              className="delete-dish"
              title="Excluir prato"
              onClick={handleDelete}
            />
            <Button
              className="save-dish"
              title="Salvar alterações"
              onClick={handleEditDish}
              loading={loading}
            />
          </ButtonWrapper>
        </Form>
      </AddDishWrapper>
      <Footer />
    </Container>
  );
}
