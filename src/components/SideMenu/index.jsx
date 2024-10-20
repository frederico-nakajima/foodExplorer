import {X} from "@phosphor-icons/react";

import { Container, Nav, Title, Header} from "./styles";

export function SideMenu({menuIsOpen, onCloseMenu}) {
  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <Title><X onClick={onCloseMenu}/> Menu</Title>
      </Header>

      <Nav>
        <a href="#"> Home</a>
      </Nav>
    </Container>
  );
}
       

  