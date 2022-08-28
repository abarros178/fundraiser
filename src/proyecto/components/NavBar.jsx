import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { Toolbar, AppBar, IconButton, Grid, Typography } from '@mui/material'
import React from 'react'

export const NavBar = ({ drawerWidth = 0 }) => {
    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge="start"
                    sx={{ mr: 3, display: { sm: 'none' } }}
                >
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <IconButton color='secondary'>
                        {/* /<LogoutOutlined /> */}
                        <Typography variant='h6' noWrap component='div'> FundacionBrr </Typography>
                    </IconButton>

                    <IconButton color='error'>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}
