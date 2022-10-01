import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import { AccionesProyectos } from '../acciones/view/AccionesProyectos.jsx';
import { LoginPage } from '../auth/pages/LoginPage.jsx';
import Inicio from '../Inicio/view/Inicio.jsx';
import { ListProyects } from '../listaProyectos/view/ListProyects.jsx';
import { ReportesView } from '../reportes/ReportesView.jsx';



export const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/reportes" element={<ReportesView />} />
                <Route path="/donar" element={<ListProyects />} />
                <Route path="/donar/proyecto/:id" element={<AccionesProyectos />} />
            </Routes>
        </>
    )
}
