import React, { useEffect } from 'react'
import { useHttpRequest } from '../../hooks/useHttpRequest'
import { METHOD, setting } from '../../settings/Settings'
import { useParams } from 'react-router-dom';
import { Tabs } from 'antd';
import { SobreProyecto } from '../components/SobreProyecto';
import { Donar } from '../components/Donar';
import { Row, Space } from 'antd'
import { NavBar } from '../../components/NavBar';
import { Toolbar } from '@mui/material';
const { TabPane } = Tabs;

export const AccionesProyectos = () => {
    const params = useParams("id")
    console.log(params);
    const { data, execute, loading } = useHttpRequest(setting.proyecto_main + params.id, METHOD.GET)
    console.log(data);
    useEffect(() => {
        execute()
    }, [])

    return (
        <>
            <NavBar />
            <Toolbar />
            <Space style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Tabs type='card'>
                    <TabPane tab="Acerca del proyecto" key="1" >
                        <SobreProyecto />
                    </TabPane>
                    <TabPane tab="Donar para el proyecto" key="2">
                        <Donar />
                    </TabPane>

                </Tabs>
            </Space>
        </>
    )
}
