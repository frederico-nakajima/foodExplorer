import styled from 'styled-components';



export const Container = styled.button`
    display:flex;
    align-items:center;
    gap:3px;
    width: 100%;
    height: 48px;
    background-color:${({theme}) => theme.COLORS.RED_300} ;
    color:${({theme}) => theme.COLORS.WHITE} ;
    border: 0;
    padding:12px 35px;
    border-radius: 5px;
    color:${({theme}) => theme.COLORS.WHITE};
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;

    >button{
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
    background:transparent;
    border:none;   
    color:${({theme}) => theme.COLORS.WHITE};

    } 

`;
  

   

    


  



