import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, FavButton, DishToCart } from "./styles";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { useFavorites } from "../../hooks/favorites";
import { USER_ROLE } from "../../utils/roles";

import { NumberVar } from "../NumberVar";
import { Button } from "../Button";

import { RiArrowRightSLine } from "react-icons/ri";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { PiPencilSimple } from "react-icons/pi";

import { toast } from "react-toastify";

export function DishCard({ data }) {
  const { user } = useAuth();
  const { id, title, price, description, image } = data;
  const { addToCart } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const [number, setNumber] = useState(1);

  const imageURL = `${api.defaults.baseURL}/files/${image}`;

  function handleAddToCart() {
    const item = { ...data, quantity: number };
    addToCart(item);
  }

  function handleToggleFavorite() {
    if (isFavorite(id)) {
      removeFavorite(id);
      toast.info("Removido dos favoritos!");
    } else {
      addFavorite(id);
      toast.success("Adicionado aos favoritos!");
    }
  }

  const formattedPrice = `R$ ${parseFloat(price).toFixed(2).replace(".", ",")}`;

  return (
    <Container>
      {user.role === USER_ROLE.ADMIN ? (
        <FavButton as={Link} to={`/edit/${id}`}>
          <PiPencilSimple />
        </FavButton>
      ) : (
        <FavButton onClick={handleToggleFavorite}>
          {isFavorite(id) ? <AiFillHeart /> : <AiOutlineHeart />}
        </FavButton>
      )}

      <img src={imageURL} alt={`Imagem de ${title}`} />
      <h3 className="product-title">
        <Link to={`/dishes/${id}`}>{title}
        </Link>
        <RiArrowRightSLine />
      </h3>
      <p className="description">{description}</p>
      <h1 className="price">{formattedPrice}</h1>

      {user.role === USER_ROLE.CUSTOMER && (
        <DishToCart>
          <NumberVar number={number} setNumber={setNumber} />
          <Button title="incluir" onClick={handleAddToCart} />
        </DishToCart>
      )}
    </Container>
  );
}
