import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import { AccionesProyectos } from '../acciones/view/AccionesProyectos.jsx';
import Inicio from '../Inicio/view/Inicio.jsx';
import { ListProyects } from '../listaProyectos/view/ListProyects.jsx';



export const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/donar" element={<ListProyects />} />
                <Route path="/donar/proyecto/:id" element={<AccionesProyectos />} />
            </Routes>
        </>
    )
}
