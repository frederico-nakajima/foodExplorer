import { Container,Form,Content } from './styles';
import polygonImage from '../../assets/Polygon 1.png';

import {Link} from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function SignUp(){
    return(
        <Container>

            <Content>
                <div className="content">
                    <img src={polygonImage} alt="imagem de um polígono" />
                    <p>food explorer</p>
                </div>
            </Content>


            <Form>
                <h1>Crie sua conta</h1>

                <div>
                    <label htmlFor="name">Seu nome:</label>
                    <Input
                    placeholder="Exemplo: Maria da Silva"
                    type="text"
                    id="name"
                    />
                </div>
                


                <div>
                    <label htmlFor="email">Email:</label>
                    <Input
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                    id="email"
                    />
                </div>



                <div>
                    <label htmlFor="password">Senha:</label>
                    <Input
                    placeholder="No mínimo 6 caracteres"
                    type="current-password"
                    id="password"
                    />
                </div>    

                <Button title="Criar conta"/>
                <Link to="/">
                    Já tenho uma conta
                </Link>
                    
                
            </Form>

            

        </Container>
    )
}
