import {Container} from './styled.js'
import Nome from '../../componentes/comun/Nome/index'

export default function Home(){
    return(
       <Container>
        <div className='top'>
            <div className='img'> <img src='/assets/images/image 13.svg' alt='' /> </div>   
            <Nome />
         </div>
         <div className='Des'>O que você quer fazer?</div>
         <div className='botao'><button>Comprar ingressos</button> </div>
        </Container>


    )
}
