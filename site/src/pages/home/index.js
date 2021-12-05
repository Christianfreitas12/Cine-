import {Container} from './styled.js'
import CabeBA from '../../componentes/comun/CabeBA'

import { useNavigate } from 'react-router-dom'


export default function Home(){

    const navigate = useNavigate();

    return(
       <Container>
        <CabeBA />
         <div className='Des'>O que você quer fazer?</div>
         <div className='botao'><button>Comprar ingressos</button> </div>
        </Container>


    )
}
