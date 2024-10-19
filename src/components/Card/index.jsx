import { CardWrapper,AlinhamentoCountButton } from './styles';
import Spaguetti from '../../assets/Spaguetti.png';
import Plus from '../../assets/Plus.svg';
import Minus from '../../assets/Minus.svg';
import Love from '../../assets/love.svg';
import CaretRight from '../../assets/CaretRight.svg';
import { Button } from '../../components/Button';

export function Card(){
    return(
        
        <CardWrapper>
            <div className="favoritar">
                <img src={Love} alt="icone de um coração favoritar" />
            </div>
            <a href="#">
                <img src={Spaguetti} alt="Spaguetti Gambe" />
                <h2>Spaguetti Gambe<i className="fas fa-chevron-right"></i> </h2>
                <p>Massa fresca com camarões e pesto. </p>
                <span>R$ 79,97</span>
            </a>
            <AlinhamentoCountButton>
                <div className="count">
                    <img src={Minus} alt="imagem de um sinal de menos" />
                    <span>01</span>
                    <img src={Plus} alt="imagem de um sinal de mais" />
                </div>
                <div className='button'>
                    <Button title="incluir" />
                </div>
            </AlinhamentoCountButton>
        </CardWrapper>
        
    )
}

              







