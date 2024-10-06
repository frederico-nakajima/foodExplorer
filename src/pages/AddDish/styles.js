import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 100%;
                >Header{
                    display:none;
                        
                }

             
                >Footer{
                    height: 77px;
                    margin-top:150px;
                    margin-left:-55px;
                    width: 364px;
                        >main{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            gap: 50px;
                            width: 364px;
                                >p{
                                    font-size:12px;
                                }

                                >Brand{
                                    h2{
                                        font-size:12px;
                                    }
                                    
                                }
                        }        
                                
                }       

              
                                    
                                    
                                

        >main{
            display: flex;
            flex-direction: column;
    
    
    
            width:428px;
       
        
            .imagem-salada-categoria{
                    
                width: 364px;
                height: 300px;
                display: flex;
                flex-direction: column;
                
                
            
        
                .UploadSimple{
                    
                    display:flex;
                    flex-direction:column;
                    width:270px;
                
                    
                        >div{
                        
                            width: 364px;
                            padding-left:25px;
                            padding-top:3px;
                            border-radius: 5px;
                            background-color:${({theme}) => theme.COLORS.BACKGROUND_800};   
                            >input{
                                border-radius: 5px;
                                height: 48px;
                                border:0;
                                background-color:${({theme}) => theme.COLORS.BACKGROUND_800};
                                outline:none;
                                
                                &::placeholder {
                                    color:${({theme}) => theme.COLORS.GRAY_300};
                                    font-family: "Roboto", serif;
                                    font-size: 16px;
                                    font-style: normal;
                                    font-weight: 400;
                                
                                    text-align:center;
                                    }
                            }
                                
                                
                }
                        
            }
                    
                    
        .inputs{
            
            width: 364px;
            height: 541px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            gap: 32px;
            
            
            
            .nome{
               width: 364px;
                
            }
            
            
            
            .dados{
                display: flex;
                flex-direction:column;
                
                align-items: flex-start;
                >label{
                    
                margin-top:-8px;
            }
                    
        }
                    
                    
                    
                select{
                    border-radius: 4px;
                    width: 364px;
                    height: 48px;
                    background-color:${({theme}) => theme.COLORS.BACKGROUND_800};
                    appearance: none;
                    -webkit-appearance: none;

                    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_54)'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_54'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");

                    background-repeat:no-repeat;
                    background-position: right 24px top 50%;
                    color: #C1BCCC;
                    font-family: Poppins;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 26px; /* 162.5% */
                    padding:0 24px;
                    border:0;
                    margin-top:4px; 
                }
                    
            }
        }

        .section{
          
            width: 364px;
            
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom:15px;
            
            

            .preco{
                display: flex;
                flex-direction:column;
               
                align-items: flex-start;
               >label{
                margin-bottom:10px;
                margin-top:-10px;
               }
            }
        }

      
        
            label{
                color:${({theme}) => theme.COLORS.GRAY_200};
                font-family: Roboto;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 100%; /* 16px */
                margin-bottom:8px;
            }

               
        
        
        .buttons{
            display: flex;
            justify-content: flex-end;
            align-items:center;
            margin-top:13px;
            
            >button{
               width: 364px;
                height: 48px;
                padding-right:15px;
                padding-left:15px;
                border-radius: 5px;
                color:${({theme}) => theme.COLORS.WHITE} ;
                background-color: ${({ theme }) => theme.COLORS.RED_200};
                border:0;
                text-align: center;
                font-family: Poppins;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 24px; /* 171.429% */
               
                

           }
           
        }
        
        

        .tags{
            display: flex;
            align-items: center;
            height: 51px;
            gap: 15px;
            width: 265px;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
            padding: 0px 0px 0px 0px;
            border-radius: 8px;
           
            margin-bottom:20px;
        
        }

        
        }
    }

    
            

    

`;


           
           
                
           
            

export const CaretLeftLink = styled.a`
    position:relative;
    margin:0px auto 120px auto ;
    display: flex;
    
    gap:2px;
    width: 450px;
   
   
    >img{
        width:20px;
        height:20px;
        margin-bottom:40px;
    }
    >a{
        position:absolute;
        top:0px;
        left:30px;
        
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-family:"Poppins",serif;
        font-size: 16.5px;
        font-style: normal;
        font-weight: 700;
        line-height: 140%; /* 33.6px */

        
     }


`;


export const Form = styled.form`
       
   width: 364px;
    height: 541px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
   
   
    >header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1.adicionarPrato{
            display:none;
            font-family: Poppins;
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; 
            
        }
         h1.novoPrato{
            display:block;
            font-family: Poppins;
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; 
            margin-bottom:24px;
            
        }
   
            
       
    }

   
    

`;























// import styled from 'styled-components';


// export const Container = styled.div`
//     width: 100%;
//     height: 100vh;

//     display: grid;
//     grid-template-rows: 94px 85px auto 94px;
//     grid-template-areas:
//     "header"
//     "link"
//     "content"
//     "footer";
    
   
   
   

//     >main{
//         grid-area: content;
//         display:flex;
//         width: 1145px;
//         overflow-y: auto;
//         padding-right: 0px;
//         margin: 0 auto;
       
        
//        .imagem-salada-categoria{
//         display:flex;
       
//             .UploadSimple{
                
//                 display:flex;
//                 flex-direction:column;
//                 width:270px;
//                 margin-right:32px;
                
//                     >div{
//                         display: flex;
//                         align-items: center;
//                        justify-content:center;
//                         width:100%;
//                         padding-left:25px;
//                         padding-top:3px;
//                         border-radius: 5px;
//                         background-color:${({theme}) => theme.COLORS.BACKGROUND_800};   
//                         >input{
//                             border-radius: 5px;
//                             height: 48px;
//                             border:0;
//                             background-color:${({theme}) => theme.COLORS.BACKGROUND_800};
//                             outline:none;
                            
//                             &::placeholder {
//                                 color:${({theme}) => theme.COLORS.GRAY_300};
//                                 font-family: "Roboto", serif;
//                                 font-size: 16px;
//                                 font-style: normal;
//                                 font-weight: 400;
                               
//                                 text-align:center;
//                                 }
//                         }
                            
                            
//             }
                    
//         }
                    
                    
//         .inputs{
//             display: flex;
//             align-items: center;
            
//             gap: 32px;
//             margin: 0px 0px 32px 2px;
//             position:relative;
            
//             .nome{
//                 width:475px;
                
//             }
            
            
            
//             .dados{
//                 display: flex;
//                 flex-direction:column;
                
//                 align-items: flex-start;
//                 >label{
                    
//                 margin-top:-8px;
//             }
                    
//         }
                    
                    
                    
//                 select{
//                     border-radius: 4px;
//                     width: 325px;
//                     height: 48px;
//                     background-color:${({theme}) => theme.COLORS.BACKGROUND_800};
//                     appearance: none;
//                     -webkit-appearance: none;
//                     background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_54)'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_54'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
//                     background-repeat:no-repeat;
//                     background-position: right 24px top 50%;
//                     color: #C1BCCC;
//                     font-family: Poppins;
//                     font-size: 16px;
//                     font-style: normal;
//                     font-weight: 400;
//                     line-height: 26px; /* 162.5% */
//                     padding:0 24px;
//                     border:0;
//                     margin-top:4px; 
//                 }
                    
//             }
//         }

//         .section{
//             display: flex;
//             align-items: center; 
//             justify-content: space-between;
//             margin-bottom:32px;
//             border:0;
            

//             .preco{
//                 display: flex;
//                 flex-direction:column;
               
//                 align-items: flex-start;
//                >label{
//                 margin-bottom:5px;
//                 margin-top:-10px;
//                }
//             }
//         }

      
        
//             label{
//                 color:${({theme}) => theme.COLORS.GRAY_200};
//                 font-family: Roboto;
//                 font-size: 16px;
//                 font-style: normal;
//                 font-weight: 400;
//                 line-height: 100%; /* 16px */
//                 margin-bottom:8px;
//             }

               
        
        
//         .buttons{
//             display: flex;
//             justify-content: flex-end;
//             align-items:center;
//             margin-top:13px;
            
//             >button{
//                 width: 175.5px;
//                 height: 48px;
//                 padding-right:15px;
//                 padding-left:15px;
//                 border-radius: 5px;
//                 color:${({theme}) => theme.COLORS.WHITE} ;
//                 background-color: ${({ theme }) => theme.COLORS.RED_200};
//                 border:0;
//                 text-align: center;
//                 font-family: Poppins;
//                 font-size: 14px;
//                 font-style: normal;
//                 font-weight: 500;
//                 line-height: 24px; /* 171.429% */
               
                

//            }
           
//         }
        
        

//         .tags{
//             display: flex;
//             align-items: center;
//             height: 51px;
//             gap: 24px;
//             width:885px;
//             background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
//             padding: 0px 600px 0px 16px;
//             border-radius: 8px;
//             margin-top:8px;
//             margin-bottom:20px;
        
//         }

        
//         }
//     }

    
            

    

// `;

                
           
           
                
           
            

// export const TopLink = styled.div`
//     position:relative;
//     margin:40px auto 24px auto ;
//     display: flex;
//     align-items: center;
//     gap:5px;
//     width: 1137px;
   
   

//     >a{
//         position:absolute;
//         top:0px;
//         left:30px;
        
//         display: flex;
//         align-items: center;
//         color: ${({ theme }) => theme.COLORS.WHITE};
//         font-family:"Poppins",serif;
//         font-size: 20px;
//         font-style: normal;
//         font-weight: 700;
//         line-height: 140%; /* 33.6px */

        
//      }


// `;


// export const Form = styled.form`
//     width: 1137px;
//     margin: 0 auto ;
   
//     >header{
//         display: flex;
//         align-items: center;
//         justify-content: space-between;

//         margin-bottom: 36px;
//         h1{
//             font-family: Poppins;
//             font-size: 32px;
//             font-style: normal;
//             font-weight: 500;
//             line-height: 140%; /* 44.8px */ 
            
//         }
   
            
       
//     }
    

// `;