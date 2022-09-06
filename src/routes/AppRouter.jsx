import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import { AccionesProyectos } from '../acciones/view/AccionesProyectos.jsx';
import Inicio from '../Inicio/view/Inicio.jsx';
import { ListProyects } from '../listaProyectos/view/ListProyects.jsx';
import { ProyectoView } from '../proyecto/view/ProyectoView.jsx';



export const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/proyecto" element={<ProyectoView />} />
                <Route path="/donar/proyecto/:id" element={<AccionesProyectos />} />
                <Route path="/donar" element={<ListProyects />} />
            </Routes>
        </>
    )
}
