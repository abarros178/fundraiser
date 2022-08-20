import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from '../App';
import { Proyecto } from '../proyecto/view/Proyecto';
export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/proyecto" element={<Proyecto />}/>
            </Routes>
        </>
    )
}
