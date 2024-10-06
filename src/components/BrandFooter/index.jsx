import { Container,Brand } from './styles';
import Polygon from '../../assets/Polygon.png';




export function BrandFooter(){
    return(
        <Container>
           
           <main>
               <Brand>
                    <img src={Polygon} alt="imagem de um polígono" />
                    <div>
                        <h2>food explorer</h2>
                    </div>
                </Brand>
                        

                
               
                
               
                <p>© 2023 - Todos os direitos reservados.</p>
                    
           </main>
               
                  
                
              

           
                
        </Container>
    )
}
                
                
            
