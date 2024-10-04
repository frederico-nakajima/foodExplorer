import styled from 'styled-components';


export const Container = styled.div`
    height: 100vh;
    position:relative;

   
   



`;

export const Content = styled.div`
   position:absolute;
    top:341px;
    left:222px;

    >.content{
        display:flex;
        align-items:center;
        gap:30px;
        
        p{
            color:${({theme}) => theme.COLORS.WHITE};
            font-family: "Roboto",serif;
            font-size: 42px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;


        
        }
        
    
    }



`
;

export const Form = styled.form`
    position:absolute;
    top:142px;
    right:108px;
    padding: 64px;
    width:476px;
    height:621px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:32px;
    background-color:${({theme}) => theme.COLORS.BACKGROUND_700};
   
    
    >a{
        
        color:${({theme}) => theme.COLORS.WHITE};
        align-self: center;
        color: var(--Light-Light-100, #FFF);
        text-align: center;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;

   
        }
        
        
    >div{
        display: flex;
        flex-direction: column;
        align-items: start-flex;
        gap: 10px;
        width:476px;
        padding:0 64px;
    }    
        
       

`;


