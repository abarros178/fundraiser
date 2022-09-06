import { Col, Row, Space } from 'antd'
import React from 'react'
import { LoaderNeoSoft } from '../../components/LoaderNeoSoft'
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo'
import { METHOD, setting } from '../../settings/Settings'
import ItemPrueba from '../components/Item'
import { ProyectoItemDonar } from '../components/ProyectoItemDonar'
export const ListProyects = () => {

    const { data = [], loading } = useHttpRequestTwo(setting.proyecto_main, METHOD.GET)

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
                loading ? <div style={{ position: 'relative', right: 0, bottom: 0, left: 0, top: 0 }}>
                    <LoaderNeoSoft />
                </div>
                    :
                    <>
                        {
                            data.map((item, index) => (
                                <div style={{ margin: 5 }}>
                                    <ItemPrueba key={index} data={item} />
                                </div>
                            ))
                        }
                    </>
            }
        </div>
    )
}

