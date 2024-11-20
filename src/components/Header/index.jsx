import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Menu,
  SearchWrapper,
  LinkOrders,
  LinkFavs,
  CartIconWrapper,
  CartBadge,
  LogOut,
} from "./styles";
import { PiReceipt } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { USER_ROLE } from "../../utils/roles";

import { Button } from "../Button";
import { Search } from "../Search";
import logoSVG from "../../assets/logo.svg";
import adminLogoSVG from "../../assets/admin-logo.svg";

export function Header({ onOpenMenu }) {
  const { user } = useAuth();
  const { signOut } = useAuth();
  const { cartCount } = useCart();

  const logoSrc = user.role === USER_ROLE.ADMIN ? adminLogoSVG : logoSVG;

  const buttonTitle =
    user.role === USER_ROLE.ADMIN ? "Novo Prato" : `Carrinho (${cartCount})`;
  const buttonLink = user.role === USER_ROLE.ADMIN ? "/new" : "/cart";

  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <Container>
      <Menu onClick={onOpenMenu}>
        <RxHamburgerMenu />
      </Menu>

      <Link to="/" className="logo-home">
        <img src={logoSrc} alt="Food Explorer Logo" />
      </Link>

      <SearchWrapper>
        <Search />
      </SearchWrapper>

      {user.role === USER_ROLE.CUSTOMER && (
        <LinkFavs to="/favorites">Meus Favoritos</LinkFavs>
      )}
      <LinkOrders to="/orders">Histórico de pedidos</LinkOrders>

      {user.role === USER_ROLE.CUSTOMER && (
        <CartIconWrapper>
          <Link to="/cart">
            <PiReceipt size={32} />
            {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
          </Link>
        </CartIconWrapper>
      )}

      <Link to={buttonLink}>
        <Button
          className="cartButton"
          icon={user.role === USER_ROLE.CUSTOMER ? PiReceipt : null}
          title={buttonTitle}
        />
      </Link>

      <LogOut onClick={handleSignOut}>
        <FiLogOut />
      </LogOut>
    </Container>
  );
}
