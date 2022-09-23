import { Box, Container, Divider, Grid } from '@mui/material'
import { Space, Spin } from 'antd'
import React from 'react'
import "./components.css"
export const LoaderNeoSoft = ({ loading }) => {
    return (
        <Box width="100%" height="500px" style={{ position: "relative" }} >
            <span  style={{ position: "absolute", top: "50%", left: "50%" }} class="loader"></span>
           {/*  <Spin  size="large" /> */}
        </Box>

    )
}
