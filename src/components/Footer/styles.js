import styled from 'styled-components';


export const Container = styled.footer`
    grid-area: footer;
    padding:24px auto;
    height: 94px;
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    border-bottom-width:1px ;
    border-bottom-style:solid ;
    border-bottom-color:${({theme}) => theme.COLORS.WHITE} ;
     
    background-color:${({theme}) => theme.COLORS.BACKGROUND_600};
  
    

  >main{
    display: flex;
    justify-content:center;
    align-items: center;
    gap:720px;
    width:1170px;
     
    

    p{
      color:${({theme}) => theme.COLORS.WHITE_200} ;
      font-family: "Roboto",serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 22.4px */
      
    
    }
  }
`;


      
   



export const Brand = styled.div`
  display:flex;
  align-items:center;
  
  gap:10px;

  >img{
    width: 30px;
    height: 30px;
  }
  >div{
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    
    h2{
    font-family: "Roboto", serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width:150px;
    color:${({theme}) => theme.COLORS.GRAY_700};
    }
      
  }
`;


// >Footer{
//   border:1px solid ${({theme}) => theme.COLORS.WHITE};
//   height: 77px;
//   margin-top:150px;
//   margin-left:-55px;
//   width:428px;
//       >main{
         
          
      
//           gap: 0px;
//           width: 364px;
//               >p{
//                   font-size:10px;
//               }
//               h2{
//                   font-size:15px;
//               }    

            
//       }        
              
// }   