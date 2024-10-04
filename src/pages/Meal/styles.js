import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 94px 85px auto 94px;
    grid-template-areas:
    "header"
    "link"
    "content"
    "footer";
    
   
   
   

    >main{
        grid-area: content;
        margin-top:40px;
      
        
       >div{
           
            display:flex;
            align-items:center;
            justify-content:center;
            width:100%;
            gap:47px;

            >img{
                width: 390px;
                height: 390px;
               
            }
                
            .dish{
                display:flex;
                flex-direction:column;
                margin-top:70px;
                >h1{
                    font-family: Poppins;
                    font-size: 40px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 140%; /* 56px */
                    margin-bottom:24px;
                    }
            
                >p{
                    font-family: Poppins;
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 140%; /* 33.6px */
                    margin-bottom:24px;
                    

                
                }

                >div{
                    display:flex;
                    gap:12px;
                    margin-bottom:48px;
                }

                >.Button{
                display:flex;
                padding-right:550px;
                    
                }
            }  
        
        }
            
    }
           


        
        

    
            

    

`;

                



































































export const TopLink = styled.div`
    position:relative;
    margin:40px auto 24px auto ;
    display: flex;
    align-items: center;
    gap:5px;
    width: 1137px;
   
   

    >a{
        position:absolute;
        top:0px;
        left:30px;
        
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-family:"Poppins",serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 140%; /* 33.6px */

        
     }


`;
           
           
                
           
            





































            
       
 
    


