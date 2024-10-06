import { Container,TopLink } from './styles';
import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag' 
import Dish from '../../assets/Dish.png'

import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer';
import {Link} from 'react-router-dom'

import CaretLeft from '../../assets/CaretLeft.svg';

export function Meal(){
    return(
        <Container>
            <Header/>


            <TopLink>
                    <img src={CaretLeft} alt="imagem de uma seta apontando para esquerda" />
                    <Link to="/">
                        Voltar
                    </Link>
            </TopLink>
                        

            <main>
            <div>
                <img src={Dish} alt="imagem de um prato de comida de um restaurante" />
                
                   <div className='dish'>
                        <h1>Salada Ravanello</h1>
                        <p>Rabanetes, folhas verdes e molho agridoce salpicados <br /> com gergelim. O pão naan dá um toque especial.</p>
                        <div>
                            <Tag title="alface"/><Tag title="cebola"/><Tag title="pão naan"/><Tag title="pepino"/><Tag title="rabanete"/><Tag title="tomate"/>
                        </div>
                        <div className='Button'><Button title="Editar prato" /></div>
                   </div>
            </div>
            </main>

            <Footer/>
        </Container>
    )
}



