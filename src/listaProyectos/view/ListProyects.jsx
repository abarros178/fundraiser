import { Col, Row, Space } from 'antd'
import React from 'react'
import { LoaderNeoSoft } from '../../components/LoaderNeoSoft'
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo'
import { METHOD, setting } from '../../settings/Settings'
import { ProyectoItemDonar } from '../components/ProyectoItemDonar'
export const ListProyects = () => {

    const { data = [], loading } = useHttpRequestTwo(setting.proyecto_main, METHOD.GET)

    return (
        <Row style={{ display: 'flex' }} gutter={16}>
            {
                loading ? <LoaderNeoSoft />
                    :
                    <>
                        {
                            data.map((item, index) => (
                                <Col span={12}>
                                    <ProyectoItemDonar key={index} data={item} />
                                </Col>
                            ))
                        }
                    </>
            }
        </Row>
    )
}

