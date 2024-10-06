import { Container,Banner,Content } from './styles';
import { HeaderIcon } from '../../components/HeaderIcon';
import { Footer } from '../../components/BrandFooter';
import Pngegg from '../../assets/pngegg.png';
import { Card } from '../../components/Card';

export function MenuUser() {
    return (
        <Container>
            <HeaderIcon />
            <div className="underHeader">
                <Banner>
                    <div className="imgBanner">
                        <img src={Pngegg} alt="imagem de biscoitos e frutinhas" />
                    </div>
                    <div className='textBox'>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </Banner>
            </div>
            
            <Content>

            <Card/>











            </Content>
            <Footer />
        </Container>
    );
} 