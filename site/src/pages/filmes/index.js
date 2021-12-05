import {Container} from './styled.js'
import CabeLA from '../../componentes/comun/CabeLA';
import BoxFilme from '../../componentes/comun/BoxFilme/index';


export default function Filmes(){
    return(
       <Container>
           <div className='cima'>
                <CabeLA />
                <div className='desc'>Selecione o filme que deseja assistir </div>
           </div>
           <div className='Boxs'>
                <BoxFilme />
                <BoxFilme />
                <BoxFilme />
                <BoxFilme />
                <BoxFilme />
                <BoxFilme />
           </div>
        </Container>

    )
}
