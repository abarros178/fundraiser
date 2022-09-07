import { Divider } from '@mui/material'
import { Space, Spin } from 'antd'
import React from 'react'

export const LoaderNeoSoft = ({ loading }) => {
    return (
        <div style={{ alignItems: 'center', display: 'flex' }}>
            <Spin size="large" />
        </div>

    )
}
