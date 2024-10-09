import { Container, TopLink, AlinhamentoCountButton } from './styles';
import { DesktopHeaderIcon } from '../../components/DesktopHeaderIcon';
import { Tag } from '../../components/Tag'; 
import Dish from '../../assets/Dish.png';
import Plus from '../../assets/Plus.svg';
import Minus from '../../assets/Minus.svg';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';

import CaretLeft from '../../assets/CaretLeft.svg';

export function MealUser() {
    return (
        <Container>
            <DesktopHeaderIcon />

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
                        <p>
                            Rabanetes, folhas verdes e molho agridoce salpicados <br />
                            com gergelim. O pão naan dá um toque especial.
                        </p>

                        <div className='tags'>
                            <Tag title="alface" />
                            <Tag title="cebola" />
                            <Tag title="pão naan" />
                            <Tag title="pepino" />
                            <Tag title="rabanete" />
                            <Tag title="tomate" />
                        </div>

                        <AlinhamentoCountButton>
                            <div className="count">
                                <img src={Minus} alt="imagem de um sinal de menos" />
                                <span>01</span>
                                <img src={Plus} alt="imagem de um sinal de mais" />
                            </div>
                            <div className='button'>
                                <Button title="incluir ∙ R$ 25,00" />
                            </div>
                        </AlinhamentoCountButton>
                    </div>
                </div>
            </main>

            <Footer />
        </Container>
    );
}
