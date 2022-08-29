import React, { useEffect } from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Inicio from '../proyecto/view/Inicio/Inicio';
import { ProyectoView } from '../proyecto/view/proyecto/ProyectoView';



export const AppRouter = () => {
    
    return (
        <>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/proyecto" element={<ProyectoView />} />
            </Routes>
        </>
    )
}
