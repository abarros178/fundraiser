import React, { useEffect } from 'react'
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo'
import { METHOD, setting } from '../../settings/Settings'

export const ProyectoView = ({ idProyecto }) => {
    const { data, execute, loading } = useHttpRequestTwo(setting.proyecto_main + idProyecto, METHOD.GET)


    return (
        <div>ProyectoView</div>
    )
}
