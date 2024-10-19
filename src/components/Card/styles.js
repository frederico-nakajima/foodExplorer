import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';




export const CardWrapper = styled.div`
    max-width:210px;
    height:350px;
    padding:24px;
    position:relative;
   
    border:1px solid ${({ theme }) => theme.COLORS.WHITE};
   
        .favoritar{
            position:absolute;
            top:16px;
            right:16px;
            z-index: 1;
        }
        a{
            
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:15px;
        
        
            >img{
                width:88px;
                height:88px;
            }
            >h2{
                display:flex;
                align-items:center;
                color: var(--Light-Light-300, #E1E1E6);
                text-align: center;
                font-family: Poppins;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 24px; /* 33.6px */

                >i{
                font-size:12px;
                margin-left: 5px;
                }
            }

            >p{
                color: var(--Light-Light-400, #C4C4CC);
                text-align: center;
                font-family: Roboto;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 22.4px */


            }
            >span{
                color: var(--Tints-Cake-200, #82F3FF);
                text-align: center;
                font-family: Roboto;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 100%; /* 51.2px */
            }

        }


    //CardWrapper desktop
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    max-width:306px;
    height:462px;
    padding:24px;
    position:relative;
    margin-bottom:45px;
    border:1px solid ${({ theme }) => theme.COLORS.WHITE};
    
        .favoritar{
            position:absolute;
            top:16px;
            right:16px;
            z-index: 1;
        }
        a{
            
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:15px;
        
        
            >img{
                width:176px;
                height:176px;
            }
            >h2{
                display:flex;
                align-items:center;
                color: var(--Light-Light-300, #E1E1E6);
                text-align: center;
                font-family: Poppins;
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: 140%; /* 33.6px */

                >i{
                font-size:15px;
                margin-left: 8px;
                }
            }

            >p{
                color: var(--Light-Light-400, #C4C4CC);
                text-align: center;
                font-family: Roboto;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 22.4px */


            }
            >span{
                color: var(--Tints-Cake-200, #82F3FF);
                text-align: center;
                font-family: Roboto;
                font-size: 32px;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 51.2px */
            }

        }

    

    }
`;








export const AlinhamentoCountButton = styled.div`
    display: flex;
    flex-direction:column;
    gap:10px;
    width:100%;
  
  
    
    
    margin-top:10px;
    .count {
        display: flex;
        justify-content:center;
        align-items: center;
        gap:10px;

        span{
            color: var(--Light-Light-400, #C4C4CC);
            font-family: Roboto;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%; /* 32px */
        }

            
    }

    .button {
        display: flex;
       
    }


    //AlinhamentoCountButton desktop
   @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
   display: flex;
   flex-direction:row;
    padding-left:24px;
    width:304px;
    margin-top:10px;
    
  
  
  
   .count {
       display: flex;
       align-items: center;
       gap:10px;

       span{
           color: var(--Light-Light-400, #C4C4CC);
           font-family: Roboto;
           font-size: 20px;
           font-style: normal;
           font-weight: 700;
           line-height: 160%; /* 32px */
       }

           
   }

   .button {
       display: flex;
      
   }
`;















