import { Container } from './styles';



export function ButtonIcon({icon:Icon,children,  ...rest}){
    return(
      <Container>
        {Icon && <img src={Icon} alt="Icone" />}
        <button {...rest}>
          {children}
        </button>
    </Container>
    )
}
