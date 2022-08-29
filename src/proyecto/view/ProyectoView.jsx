import React, { useEffect } from 'react'
import { useHttpRequest } from '../../hooks/useHttpRequest'
import { METHOD, setting } from '../../settings/Settings'

export const ProyectoView = ({ idProyecto }) => {
    const { data, execute, loading } = useHttpRequest(setting.proyecto_main + idProyecto, METHOD.GET)
    useEffect(() => {
        execute()
    }, [])

    return (
        <div>ProyectoView</div>
    )
}
