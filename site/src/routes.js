import {Routes, BrowserRouter, Route} from 'react-router-dom';

import Home from '../src/pages/home/index';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact={true} element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

