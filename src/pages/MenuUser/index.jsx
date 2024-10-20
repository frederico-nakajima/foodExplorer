import { Container,Banner,Content } from './styles';
import { DesktopHeaderIcon } from '../../components/DesktopHeaderIcon';
import { MobileHeaderIcon } from '../../components/MobileHeaderIcon'
import { Footer } from '../../components/Footer';
import { SimpleSlider } from '../../components/SimpleSlider';
import { SideMenu } from '../../components/SideMenu';
import Pngegg from '../../assets/pngegg.png';
import { useState } from 'react';



export function MenuUser() {
    const[menuIsOpen,setMenuIsOpen] = useState(false);
    return (
        <Container>
            <SideMenu
            menuIsOpen={menuIsOpen}
            onCloseMenu={() => setMenuIsOpen(false)}/>
            <div className="wrapper">
                <div className="header-mobile">
                    <MobileHeaderIcon onOpenMenu={() => setMenuIsOpen(true)}/>
                </div>
                <div className="header-desktop">
                    <DesktopHeaderIcon />
                </div>
                
                <Banner>
                    <div className="imgBanner">
                        <img src={Pngegg} alt="imagem de biscoitos e frutinhas" />
                    </div>
                    <div className='textBox'>
                        <h1>Sabores inigualáveis</h1>
                        <div className="paragrafo-banner">
                            <p>Sinta o cuidado do preparo com</p> <p>ingredientes selecionados</p>
                        </div>
                    </div>
                </Banner>
                
                <Content>
                    <SimpleSlider/>
                    <SimpleSlider/>
                    <SimpleSlider/>
                </Content>
                <Footer />
            </div>
        </Container>
    );
} 


          





