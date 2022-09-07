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
                        <Carousel
                            autoPlay={false}
                            stopAutoPlayOnHover
                            height="400px"
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
