import { Container } from "./styled.js";

export default function BoxSala(props) {
  return (
    <Container>
        <div className='sala'>{props.sala}</div>
        <div className='hora'>{props.hora}</div>
        <div className='Idioma'>{props.idioma}</div>
    </Container>
  );
}