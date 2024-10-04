import { Container,Form,TopLink } from './styles';
import { Header } from '../../components/Header';
import { Textarea } from '../../components/Textarea'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import UploadSimple from '../../assets/UploadSimple.svg';
import {Link} from 'react-router-dom'
import { Footer } from '../../components/Footer';
import CaretLeft from '../../assets/CaretLeft.svg';

export function EditDish(){
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

              
                <Form>
                    
                    <header>
                        <h1>Editar prato</h1>
                    </header>
                        
                    <div className="imagem-salada-categoria">
    
                        <div className='UploadSimple'>
                            <label htmlFor="UploadSimple">Imagem do prato</label>
                            <div>
                                <img src={UploadSimple} alt="ícone de busca" />
                                <input placeholder="Selecione imagem"  id="UploadSimple"/>
                            </div>
                        </div>
    
                        <div className="inputs">
    
    
                            <div className='nome'>
                                <label htmlFor="nome">Nome</label>
                                <Input placeholder="Ex.: Salada Ceasar" id="nome"/>
                            </div>
    
                            <div className="dados">
                                <label htmlFor="categoria">Categoria</label>
                                <select id="categoria">
                                <option value="live">Refeição</option>
                                <option value="podcast">Sobremesa</option>
                                <option value="mentorship">Bebida</option>
                                </select>
                            </div>
    
                        </div>
                    </div>


                    <div className="section">
    
                        <Section title="Ingredientes">
                            <div className='tags'>
                                <NoteItem  placeholder="Pão Naan"/>
                                <NoteItem isnew placeholder="Adicionar"/>
                            </div>
                        </Section>
    
    
                            <div className='preco'>
                                <label htmlFor="preco">Preço</label>
                                <Input placeholder="R$ 00,00" id="preco"/>
                            </div>
                    </div>

                

                    <div className="decricao">
                        <label htmlFor="descricao">Descrição</label>
                        <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" id="descricao"/>
                    </div>
                        
                    <div className="buttons">
                        <button>Excluir prato</button>
                        <button>Salvar alterações</button>
                    </div>
                </Form>
            </main>

            <Footer/>
        </Container>
    )
}



