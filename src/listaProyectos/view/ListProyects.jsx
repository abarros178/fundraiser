import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { LoaderNeoSoft } from '../../components/LoaderNeoSoft'
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo'
import { METHOD, setting } from '../../settings/Settings'
import  ProyectoItemDonar  from '../components/ProyectoItemDonar'
export const ListProyects = () => {

    const { data = [], loading } = useHttpRequestTwo(setting.proyecto_main, METHOD.GET)

    return (
        <>
            <Card style={{ borderRadius: '5px', marginBottom: '10px', boxShadow: '5px gray solid' }}>
                <CardContent>
                    <Typography variant='h5'>
                        Proyectos
                    </Typography>
                </CardContent>
            </Card>

            {
                loading ? <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-between" }}>
                    <LoaderNeoSoft />
                </div>
                    :
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-between" }}>
                        <>
                            {
                                data.map((item, index) => (
                                    <div style={{ margin: 5 }}>
                                        <ProyectoItemDonar key={index} data={item} />
                                    </div>
                                ))
                            }
                        </>
                    </div>
            }
        </>
    )
}

