import React from 'react'
import { AppBar, Box, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { NavBar } from '../components/NavBar'
import OutlinedCard from '../components/ProyectoItem'
export const Proyecto = () => {
    return (

        <>

            <NavBar />
            <Box component='main'
                sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <OutlinedCard />
                        </div>
                    </div>
                </div>
            </Box>
        </>
    )
}
