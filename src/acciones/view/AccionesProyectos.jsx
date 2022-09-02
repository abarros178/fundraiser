import React from 'react'
import { METHOD, setting } from '../../settings/Settings'
import { useParams } from 'react-router-dom';
import { Space, Spin } from 'antd';
import { CardDonar } from '../components/CardDonar';
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo';



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
                                    <Space size="middle">
                                        <Spin size="large" />
                                    </Space>
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
