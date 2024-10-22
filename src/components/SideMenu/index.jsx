import {X} from "@phosphor-icons/react";
import { Input } from '../../components/Input';
import { Container, Nav, Title, Header,Search} from "./styles";
import busca from '../../assets/busca.svg';
import { Footer } from '../../components/Footer';
import { useEffect } from 'react';

export function SideMenu({menuIsOpen, onCloseMenu, navText = "Sair", aboveNavText, aboveNavLink }) {
  useEffect(() => {
    // Adicionar ou remover a classe no body para desativar a rolagem
    if (menuIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Limpeza ao desmontar o componente
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuIsOpen]);

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <Title><X onClick={onCloseMenu}/> Menu</Title>
      </Header>
      <Search>
        <Input icon={busca} placeholder='Busque por pratos ou ingredientes' />
      </Search>
      <Nav>
      {aboveNavText && (
          <a href={aboveNavLink || "#"}>{aboveNavText}</a>  
        )}
        <a href="#">{navText}</a>
      </Nav>
      <Footer/>
    </Container>
  );
}
      
       



  