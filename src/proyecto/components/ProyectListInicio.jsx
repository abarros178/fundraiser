import React, { useEffect } from 'react'
import { useHttpRequest } from '../../hooks/useHttpRequest.jsx'
import { METHOD, setting } from '../../settings/Settings'
import { ProyectItem } from './ProyectItem'

export const ProyectListInicio = () => {
    const { data, loading, execute } = useHttpRequest(setting.proyecto_main, METHOD.GET)

    useEffect(() => {
        console.log('object');
        execute()
    }, [])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xm text-indigo-500 tracking-widest font-medium title-font mb-1">Algunas de nuestras iniciativas</h2>
                    <h1 className="sm:text-7xl text-2xl font-semibold title-font mb-4 text-gray-900">Te invitamos a que conozcas nuestros proyectos</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Aqui puede observar la lista de proyectos</p>
                </div>
                <div className="flex flex-wrap">
                    {
                        data?.map((proyecto) => (
                            <ProyectItem proyecto={proyecto} />
                        ))
                    }
                </div>
                <a href="/proyectos" className="text-indigo-500 border-t-4 mb-1" >
                    <center>
                        Ver todos los proyectos
                    </center>
                </a>
            </div>
        </section>
    )
}
