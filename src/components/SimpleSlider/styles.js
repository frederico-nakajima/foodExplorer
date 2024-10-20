import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`

max-width: 428px;

margin:46px 10px;

    >div.swiper{
        >h1.title{
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 25.2px */
        margin-bottom: 24px;
        }
    }
        

    
   @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
    max-width:1140px;
    margin:0 auto;
    } 
    
   





`;






