import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
export const ProyectItem = ({ proyecto }) => {
    const navigate = useNavigate()
    return (

        <>
            <Card
                sx={{
                    minWidth: "20%", minHeight: "100%", "&:hover": {
                        boxShadow: "#e9e9e9 0px 20px 20px 0px",
                        cursor: "pointer"

                    }
                }}
                onClick={() => navigate("/donar/proyecto/" + proyecto.uid)}
                hover="true"
            >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {proyecto.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {proyecto.descripcion}
                    </Typography>
                </CardContent>
            </Card>



        </>
    )
}
