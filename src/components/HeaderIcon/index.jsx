import { Container,Brand,Search } from './styles';
import polygonImageHeader from '../../assets/Polygon-header.png';
import busca from '../../assets/busca.svg';
import SignOut from '../../assets/SignOut.svg'
import { ButtonIcon } from '../../components/ButtonIcon'
import Receipt from '../../assets/Receipt.svg'

export function HeaderIcon(){
    return(
        <Container>
           
           <main>
               <Brand>
                    <img src={polygonImageHeader} alt="imagem de um polígono" />
                    <div>
                        <h2>food explorer</h2>
                        <p>admin</p>
                    </div>
                </Brand>

                <Search>
                    <img src={busca} alt="ícone de busca" /> {/* Ícone de busca */}
                    <input placeholder="Busque por pratos ou ingredientes" />
                </Search>
               
                
                <div className="buttonIcon">
                    <ButtonIcon icon={Receipt}  title="Pedidos (0)"/>
                </div>
               
                    
                <img src={SignOut} alt="ícone de sair do app" />
           </main>
               
                  
                
              

           
                
        </Container>
    )
}
                
                
            
