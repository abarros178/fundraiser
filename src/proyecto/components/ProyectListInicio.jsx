import React from 'react'
import { LoaderNeoSoft } from '../../components/LoaderNeoSoft.jsx'
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo.jsx'
import { METHOD, setting } from '../../settings/Settings'
import { ProyectItem } from './ProyectItem'
import Carousel from 'react-material-ui-carousel'
import { Grid } from '@mui/material'

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
                        <Grid item xs={12} md={6}>
                            <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                style={{ minHeight: "400px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/donaciones-79b72.appspot.com/o/chico_agradecido.jpg?alt=media&token=fea79837-14d5-4e81-87f9-eb0fab939a3e" />

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Carousel
                                autoPlay={false}
                                stopAutoPlayOnHover
                                height="400px"
                            >
                                {
                                    data?.map((proyecto, index) => (
                                        <>

                                            <ProyectItem key={index} proyecto={proyecto} />
                                        </>
                                    ))
                                }
                            </Carousel>
                        </Grid>

                    </>
            }

        </>
    )
}
