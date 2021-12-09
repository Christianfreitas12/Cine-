import {Container} from './styled.js'
import CabeLA from '../../componentes/comun/CabeLA'
import Box from '../../componentes/comun/BoxFilmeB' 



export default function Ingressos(){



    return(
       <Container>
       <div className='cima'>
                <CabeLA />
                <div className='desc'>Selecione a melhor opção de pagamento</div>
           </div>

           <div className='Cont'>
               <Box />
               <div className='sele'> 
                    <div className='Lugares'> </div>
                    <div className='Pedido'> </div>
                </div>
           </div>

        </Container>
    )
}
