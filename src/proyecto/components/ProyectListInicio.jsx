import React from 'react'
import { LoaderNeoSoft } from '../../components/LoaderNeoSoft.jsx'
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo.jsx'
import { METHOD, setting } from '../../settings/Settings'
import { ProyectItem } from './ProyectItem'
import Carousel from 'react-material-ui-carousel'

export const ProyectListInicio = () => {
    const { data, loading } = useHttpRequestTwo(setting.proyecto_main, METHOD.GET)



    return (
        <>

            {
                loading ?

                    <div style={{ position: 'relative', right: 0, bottom: 0, left: 0, top: 0 }}>
                        <LoaderNeoSoft />
                    </div>

                    : <>
                        {/* <section className="plans-container--slider">
                            {
                                data?.map((proyecto, index) => (
                                    <ProyectItem key={index} proyecto={proyecto} />
                                ))
                            }
                        </section>
                        <section className="botones">
                            <button className="scroll-button" onclick="scrollLeftNx()" id="bLess">Atras</button>
                            <button className="scroll-button" onclick="scrollRightNx()" id="bMore">Siguiente</button>
                        </section>

                        <a href="/proyectos" className="text-indigo-500 border-t-4 mb-1" >
                            <center>
                                Ver todos los proyectos
                            </center>
                        </a> */}
                        <Carousel
                            next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
                            prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
                            
                        >
                            {
                                data?.map((proyecto, index) => (
                                    <ProyectItem key={index} proyecto={proyecto} />
                                ))
                            }
                        </Carousel>
                    </>
            }

        </>
    )
}
