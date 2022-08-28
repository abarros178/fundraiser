import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from '../App';
import Inicio from '../proyecto/view/Inicio';
import Proyecto from '../proyecto/view/Proyecto';
import { Proyectos } from '../proyecto/view/Proyectos';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/proyectos" element={<Proyectos />}/>
                <Route path="/proyecto" element={<Proyecto />}/>
            </Routes>
        </>
    )
}
