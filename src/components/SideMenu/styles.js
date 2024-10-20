import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.aside`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  width: 100%;
  height: 2000px;

  display: flex;
  flex-direction: column;
  position:absolute;
  z-index:9999;
  
  transform: translateX(-100%);
  transition:transform 0.3s ease-in-out;

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
  gap: 7px;
  color: ${({ theme }) => theme.COLORS.BLUE_200};
  font-size: 24px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    align-items: center;
    gap: 7px;
    padding-left: 40px;
    height: 56px;
    font-size: 20px;

 
  }
`;

