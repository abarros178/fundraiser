import { Grid, Typography } from '@mui/material'
import React from 'react'

export const AuthLayout = ({ children, title }) => {
    return (
        <>
            <Grid
                container
                spacing={0}
                direction='column'
                alignItems='center'
                justifyContent='center'
                sx={{ minHeight: '100vh', backgroundColor: 'primary.main' }}
                padding={5}
            >
                <Grid
                    item
                    className='box-shadow'
                    xs={6}
                    sx={{
                        backgroundColor:'white',
                        padding:4,
                        width: { sm: 450 }
                    }}

                >
                    <Typography
                        variant='h5'
                        sx={{ mb: 1 }}
                    >
                        {title}
                    </Typography>
                    {children}
                </Grid>
            </Grid>
        </>
    )
}
