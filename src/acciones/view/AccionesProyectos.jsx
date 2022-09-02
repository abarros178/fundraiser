import React from 'react'
import { METHOD, setting } from '../../settings/Settings'
import { useParams } from 'react-router-dom';
import { Space, Spin } from 'antd';
import { CardDonar } from '../components/CardDonar';
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo';



export const AccionesProyectos = () => {
    const params = useParams("id")
    const { data = [], loading } = useHttpRequestTwo(setting.proyecto_main + params.id, METHOD.GET)

    return (
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
    )
}
