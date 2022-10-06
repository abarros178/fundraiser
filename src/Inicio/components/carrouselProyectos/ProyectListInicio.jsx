import React from 'react'
import { LoaderNeoSoft } from '../../../components/LoaderNeoSoft.jsx'
import { useHttpRequestTwo } from '../../../hooks/useHttpRequestTwo.jsx'
import { METHOD, setting } from '../../../settings/Settings'
import { ProyectItem } from './ProyectItem'
import Carousel from 'react-material-ui-carousel'
import { Box } from '@mui/material'

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
                            autoPlay
                            animation='slide'
                            duration={700}
                        >
                            {
                                data?.map((proyecto, index) => (
                                    <Box key={index} sx={{ height: "100%", width: "100%" }} height="600px">
                                        <ProyectItem proyecto={proyecto} />
                                    </Box>
                                ))
                            }
                        </Carousel>


                    </>
            }

        </>
    )
}
