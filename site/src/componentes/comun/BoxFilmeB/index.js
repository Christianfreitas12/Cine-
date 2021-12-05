import { Container } from "./styled.js";

export default function BoxFilme() {
  return (
    <Container>
        <div className='img'><img src='/assets/images/image 15.svg' alt=''/></div>
        <div className='Espe'>
            <div className='Nome'>Harry Potter e a Pedra Filosofal </div>
            <div className='Idioma'> Legendado e Dublado </div>
            <div className='Cla'> Classificação: +12 </div>
        </div>
    </Container>
  );
}