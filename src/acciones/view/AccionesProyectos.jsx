import React from 'react'
import { METHOD, setting } from '../../settings/Settings'
import { useParams } from 'react-router-dom';
import { Space, Spin } from 'antd';
import { CardDonar } from '../components/CardDonar';
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo';
import { LoaderNeoSoft } from '../../components/LoaderNeoSoft';



export const AccionesProyectos = () => {
    const params = useParams("id")
    const { data = [], loading, error } = useHttpRequestTwo(setting.proyecto_main + params.id, METHOD.GET)

    return (
        <>

            {
                error ?
                    <h1>Lo sentimos, ocurrio un problema al cargar la pagina, intentelo de nuevo</h1>
                    :
                    <>

                        {
                            loading ?
                                <>
                                    <div style={{ position: 'relative', right: 0, bottom: 0, left: 0, top: 0 }}>
                                        <LoaderNeoSoft />
                                    </div>
                                </>
                                :
                                <>
                                    <CardDonar proyecto={data} id={params.id} />
                                </>
                        }
                    </>
            }

        </>
    )
}
