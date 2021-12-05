import {Container} from './styled.js'

import BoxBig from '../../componentes/comun/BigDia';
import Box from '../../componentes/comun/BoxDia';
import CabeLA from '../../componentes/comun/CabeLA'

export default function Date(){
    const DiaSema1 = 'Sabado';
    const Dia1 = '05';
    const Mes = 'MAIO';
    const DiaSema2 = 'Domingo';
    const Dia2 = '06';
    const DiaSema3 = 'Segunda';
    const Dia3 = '07';
    const DiaSema4 = 'Terça';
    const Dia4 = '08';
    const DiaSema5 = 'Quarta';
    const Dia5 = '09';
    const DiaSema6 = 'Quinta';
    const Dia6 = '10';


    return(
       <Container>
            <CabeLA />
           <div className='Desc'>Escolha a data que você deseja comprar o ingresso.</div>
           <div className='Boxs'>
                <div className='Big'> <BoxBig /> </div>
                <div className='Box'> <Box DiaSemana={DiaSema1} Dia={Dia1} Mes={Mes}/> 
                                      <Box DiaSemana={DiaSema2} Dia={Dia2} Mes={Mes}/> 
                                      <Box DiaSemana={DiaSema3} Dia={Dia3} Mes={Mes}/> 
                                      <Box DiaSemana={DiaSema4} Dia={Dia4} Mes={Mes}/> 
                                      <Box DiaSemana={DiaSema5} Dia={Dia5} Mes={Mes}/> 
                                      <Box DiaSemana={DiaSema6} Dia={Dia6} Mes={Mes}/> 
                 </div>
           </div>
        </Container> 
    )
}