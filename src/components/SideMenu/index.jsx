import { useNavigate, Link } from "react-router-dom";
import { Container, Title, Header, Nav, SearchWrapper } from "./styles";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

import { Search } from "../Search";
import { ButtonText } from "../ButtonText";

import { FiX } from "react-icons/fi";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const buttonTitle =
    user.role === USER_ROLE.ADMIN ? "Novo prato" : "Meus favoritos";
  const buttonLink = user.role === USER_ROLE.ADMIN ? "/new" : "/favorites";

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <Title onClick={onCloseMenu}>
          <FiX /> Menu
        </Title>
      </Header>
    
    <SearchWrapper>
      <Search />
    </SearchWrapper>

    <Nav>
      <Link to={buttonLink}>
        <ButtonText>{buttonTitle}</ButtonText>
      </Link>
      <ButtonText onClick={handleSignOut}>Sair</ButtonText>
    </Nav>
    </Container>
  );
}
