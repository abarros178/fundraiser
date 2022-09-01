import React from 'react'
import { StarOutlined, StarFilled, UpCircleTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
export const Aprendiendo = () => {
    return (

        <>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', flexDirection: 'column' }}>
                <StarOutlined style={{ color: 'red', fontSize: '100px' }} rotate={15} spin={true} ></StarOutlined>

                <UpCircleTwoTone style={{ marginTop: '10px', fontSize: '100px', }} twoToneColor='red' /></div>

            <div>
                <Button type='primary' >Hola</Button>
                <Button type='default' >Hola</Button>
                <Button ghost  >Hola</Button>
                <Button type='ghost'  >Hola</Button>
            </div>

        </>
    )
}
