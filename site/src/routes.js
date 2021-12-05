import {Routes, BrowserRouter, Route} from 'react-router-dom';

import Home from '../src/pages/home/index';
import Dia from '../src/pages/date/index';
import Filmes from '../src/pages/filmes/index';
import Hora from '../src/pages/hora'


export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact={true} element={<Home />} />
                <Route path='/Dia' exact={true} element={<Dia />} />
                <Route path='/Filmes' exact={true} element={<Filmes />} />
                <Route path='/Hora' exact={true} element={<Hora />} />
            </Routes>
        </BrowserRouter>
    );
}

