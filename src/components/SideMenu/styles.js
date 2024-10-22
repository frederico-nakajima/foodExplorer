import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.aside`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  width: 100%;
  height: 100vh; 
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;  /* Isso faz o Footer sempre ficar no final */
  position:absolute;
  top: 0;   /* Garante que o menu comece no topo da tela */
  left: 0; 
  z-index:9999;
  opacity: ${(props) => (props['data-menu-is-open'] ? '1' : '0')};
  display: ${(props) => (props['data-menu-is-open'] ? 'flex' : 'none')};
  
  transform: translateX(-100%);
  transition:transform 0.3s ease-in-out;
  overflow-y: auto; 
  
  &[data-menu-is-open="true"]{
   transform: translateX(0);
  }

   @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
    display:none;
    }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 32px 24px;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 21px;
  font-family: Roboto;
  font-weight: 400;

  // >svg{
  // width:28px;
  // heigth:28px;            
  // }
`;


export const Search = styled.div`
    margin-left:30px;
    margin-right:30px;
    margin-bottom:40px;
    padding-left:14px;
    border-radius: 5px;
    background-color:${({theme}) => theme.COLORS.BACKGROUND_800};
      border:0;
   
    }
`;


export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  
  > a.above-nav {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 8px;
    font-weight: 400;
    font-family: Poppins;
  }
  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    align-items: center;
    gap: 7px;
    padding-left: 40px;
    height: 56px;
    font-size: 24px;
    font-weight: 300;
    font-family: Poppins;

 
  }
`;

