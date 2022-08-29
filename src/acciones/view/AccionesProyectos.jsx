import React, { useEffect } from 'react'
import { useHttpRequest } from '../../hooks/useHttpRequest'
import { METHOD, setting } from '../../settings/Settings'

export const AccionesProyectos = ({ idProyecto }) => {

    const { data, execute, loading } = useHttpRequest(setting.proyecto_main + idProyecto, METHOD.GET)
    console.log(data);
    useEffect(() => {
        execute()
    }, [])

    return (
        <div>AccionesProyectos</div>
    )
}
