import React, { useEffect } from 'react'
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo'
import { METHOD, setting } from '../../settings/Settings'
import { ProyectListInicio } from '../components/ProyectListInicio'

export const ProyectoListView = ({ idProyecto }) => {
    const { data, execute, loading } = useHttpRequestTwo(setting.proyecto_main + idProyecto, METHOD.GET)


    return (
        <>
            <ProyectListInicio />
        </>
    )
}
