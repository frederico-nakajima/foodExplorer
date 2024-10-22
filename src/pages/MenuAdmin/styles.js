import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
div.wrapper{
    width: 100%;
    max-width:428px;
    height: 100vh;
    margin:0 auto;
        .header-mobile {
            display: flex;
            height: 100px; 
        }

        .header-desktop {
             display: none; 
        }  
    }

     // DESKTOP Container
    div.wrapper{ 
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
    max-width:100%;
    height: 100vh;
    margin:0 auto;
    
    
        .header-mobile {
            display: none; 
        }

        .header-desktop {
            display: flex;
        gap:10px;

        }  
    }
    }
`;

export const Banner  = styled.div`
margin:15px auto;
width: 376px;
height: 120px;
position:relative;
    >.imgBanner img{
    width: 191px;
    height: 149px;
    border:1px solid ${({ theme }) => theme.COLORS.WHITE};
    }

    >div.textBox{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:center;
        width: 376px;
        height: 120px;
        align-items:flex-end;
        padding-right:0px;
        position:absolute;
        z-index:-1;
        top: 30px;
        border-radius: 8px;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        border:1px solid ${({ theme }) => theme.COLORS.WHITE};

        h1{
            font-family: Poppins;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; /* 56px */
            
        }
        div.paragrafo-banner{
        display:flex;
        flex-direction:column;
        width:188px;
            p{
            font-family: Roboto;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%; /* 16px */
            }    
        }
    }
   
 
    //DESKTOP Banner
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
    margin:32px auto;
    width:1120px;
    height:406px;
    border:1px solid ${({ theme }) => theme.COLORS.WHITE};
 
    >.imgBanner img{
    width:632px;
    height:406px;
    border:1px solid ${({ theme }) => theme.COLORS.WHITE};
    }
   
    
    
    
    >div.textBox{
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    width:1120px;
    height:260px;
    align-items:flex-end;
    padding-right:70px;
    position:absolute;
    z-index:-1;
    top: 146px;
    border-radius: 8px;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
       
        >h1{
            font-family: Poppins;
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; /* 56px */
        }
        >div.paragrafo-banner{
        display:flex;
        flex-direction:row;
        width:419px;
            p{
                font-family: Roboto;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 100%; /* 16px */
            }
        }       
   

    }
`;

export const Content  = styled.div`         
  
 
   @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
    
    }
`;

    
    
    
        
     
   

