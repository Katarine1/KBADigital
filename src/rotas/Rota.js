import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../paginas/Home/Home';

const Rota = () => {
    return(
        <BrowserRouter>
            <Route path="/" component={Home} exact />
        </BrowserRouter>
    );
}

export default Rota;
