import { Container,Banner,Content } from './styles';
import { DesktopHeaderIcon } from '../../components/DesktopHeaderIcon';
import { MobileHeader } from '../../components/MobileHeader'
import { Footer } from '../../components/Footer';
import { SimpleSlider } from '../../components/SimpleSlider';
import { SideMenu } from '../../components/SideMenu';
import Pngegg from '../../assets/pngegg.png';
import { useState } from 'react';



export function MenuAdmin() {
    const[menuIsOpen,setMenuIsOpen] = useState(false);
    return (
        <Container>
            <SideMenu
            menuIsOpen={menuIsOpen}
            onCloseMenu={() => setMenuIsOpen(false)}
            navText="Sair"                   
            aboveNavText="Novo prato"         
            aboveNavLink="/novo-prato"/>
            <div className="wrapper">
                <div className="header-mobile">
                    <MobileHeader onOpenMenu={() => setMenuIsOpen(true)}/>
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


          





