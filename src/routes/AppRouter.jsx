import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import { AccionesProyectos } from '../acciones/view/AccionesProyectos.jsx';
import Inicio from '../Inicio/view/Inicio.jsx';
import { ListProyects } from '../listaProyectos/view/ListProyects.jsx';
import { ReportesView } from '../reportes/ReportesView.jsx';



export const AppRouter = () => {

    return (
        <>cmdcdn
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/reportewdwclisi  " element={<ReportesView />} />
                <Route path="/donar" element={<ListProyects />} />
                <Route path="/donar/proyecto/:id" element={<AccionesProyectos />} />
            </Routes>
        </>
    )
}
