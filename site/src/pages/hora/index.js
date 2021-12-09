import {Container} from './styled.js'

import CabeLA from '../../componentes/comun/CabeLA'
import Box from '../../componentes/comun/BoxFilmeB'
import BoxSa from '../../componentes/comun/BoxSala'


export default function Hora(){
const Sala08 = 'Sala 08'
const Sala09 = 'Sala 09'
const Sala10 = 'Sala 10'
const Len = 'Legendado'
const Du = 'Dublado'
const Ho1 = '13:00'
const Ho2 = '13:15'
const Ho3 = '13:30'
const Ho4 = '16:15'
const Ho5 = '17:20'
const Ho6 = '18:10'




    return(
       <Container>
        <div className='cima'>
                <CabeLA />
                <div className='desc'>Selecione o horário e o idioma</div>
           </div>
           <div className='Boxs'>
               <div className='Big'> <Box /> </div>
               <div className='BoxHo'><BoxSa sala={Sala08} hora={Ho1} idioma={Du}/> 
                                      <BoxSa sala={Sala09} hora={Ho2} idioma={Len}/>
                                      <BoxSa sala={Sala10} hora={Ho3} idioma={Du}/>
                                      <BoxSa sala={Sala08} hora={Ho4} idioma={Len}/>
                                      <BoxSa sala={Sala09} hora={Ho5} idioma={Du}/>
                                      <BoxSa sala={Sala10} hora={Ho6} idioma={Du}/>
               </div>
           </div>
        </Container>


    )
}
