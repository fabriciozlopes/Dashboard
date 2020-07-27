import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App';
import Desc from './Desc';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={App} />
            <Route path="/desc/:id" component={Desc} />
        </BrowserRouter>
    )
}