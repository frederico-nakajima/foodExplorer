import { Container } from './styles';
import Receipt from '../../assets/Receipt.svg'


export function ButtonIcon({icon,title}){
    return(
        <Container type="button">
          {icon && <img src={Receipt} alt="Ícone" />} 
          {title}
        </Container>
    )
}
