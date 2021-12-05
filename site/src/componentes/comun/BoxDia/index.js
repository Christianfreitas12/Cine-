import { Container } from "./styled.js";

export default function BoxDia(props) {
  return (
    <Container>
      <div className="DiaSema">{props.DiaSemana}</div>
      <div className="Dia">{props.Dia}</div>
      <div className="Mes">{props.Mes}</div>
    </Container>
  );
}
