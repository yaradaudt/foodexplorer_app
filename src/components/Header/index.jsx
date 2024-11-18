import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Container, Menu, LogOut } from "./styles";
import { PiReceipt } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { useCart } from "../../hooks/cart";

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

        <Link to="/">
          <img src={logoSrc} alt="Food Explorer Logo" />
        </Link>

        <Search />

        {user.role === USER_ROLE.CUSTOMER && (
          <Link to="/favorites">Meus Favoritos</Link>
        )}
        <Link to="/orders">Histórico de pedidos</Link>      
      
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
