import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../../services/api";

import { Container, ResultsWrapper, ResultsList } from "./styles";

import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { DishCard } from "../../components/DishCard";
import { Footer } from "../../components/Footer";

import { RxCaretLeft } from "react-icons/rx";

export function SearchResults() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const [dishes, setDishes] = useState([]);

  const query = searchParams.get("query")

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchDishes() {
      try {
        const titleResponse = await api.get(`/dishes?title=${query}`);
        const ingredientsResponse = await api.get(`/dishes?ingredients=${query}`);

        const combinedResults = [
          ...new Map(
            [...titleResponse.data, ...ingredientsResponse.data].map(dish => [dish.id, dish])
          ).values(),
        ]
        setDishes(combinedResults);
      } catch (error) {
        console.error("Erro ao buscar pratos:", error);
      }
    }
      fetchDishes();
  }, [query]);
  

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
      <ResultsWrapper>
        <h1>Resultados da busca por: {query}</h1>
    
        {dishes.length > 0 ? (
          <ResultsList>
            {dishes.map((dish) => (
              <DishCard key={dish.id} data={dish} />
            ))}
          </ResultsList>
        ) : (
          <p>Nenhum prato encontrado.</p>
        )}
      </ResultsWrapper>

      <Footer />
    </Container>
  );
}
