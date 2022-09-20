import { Grid } from '@mui/material'
import React from 'react'
import { useHttpRequestTwo } from '../../../hooks/useHttpRequestTwo'
import { METHOD, setting } from '../../../settings/Settings'
import { AboutMe } from './AboutMe'
export const AboutUs = () => {
    const { data, loading } = useHttpRequestTwo(setting.usuarios_main_admin, METHOD.GET)


    return (
        <>
            <Grid container
                direction="row"
                justifyContent="flex-start"
                display="flex"
                alignItems="center" rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>

                {
                    !loading &&
                    data?.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <AboutMe data={item}  />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}
