import React, { useEffect } from 'react'
import { LoaderNeoSoft } from '../../components/LoaderNeoSoft.jsx'
import { useHttpRequest } from '../../hooks/useHttpRequest.jsx'
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo.jsx'
import { METHOD, setting } from '../../settings/Settings'
import { ProyectItem } from './ProyectItem'

export const ProyectListInicio = () => {
    const { data, loading } = useHttpRequestTwo(setting.proyecto_main, METHOD.GET)



    return (
        <>

            {
                loading ?

                    <div style={{ position: 'relative', right: 0, bottom: 0, left: 0, top: 0 }}>
                        <LoaderNeoSoft />
                    </div>
                    
                    : (<section className="text-gray-600 bg-gray-100 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-col text-center w-full mb-20">
                                <h2 className="text-xm text-indigo-500 tracking-widest font-medium title-font mb-1">Algunas de nuestras iniciativas</h2>
                                <h1 className="sm:text-7xl text-2xl font-semibold title-font mb-4 text-gray-900">Te invitamos a que conozcas nuestros proyectos</h1>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Aqui puede observar la lista de proyectos</p>
                            </div>
                            <div className="flex flex-wrap">
                                {
                                    data?.map((proyecto, index) => (
                                        <ProyectItem key={index} proyecto={proyecto} />
                                    ))
                                }
                            </div>
                            <a href="/proyectos" className="text-indigo-500 border-t-4 mb-1" >
                                <center>
                                    Ver todos los proyectos
                                </center>
                            </a>
                        </div>
                    </section>)
            }

        </>
    )
}
