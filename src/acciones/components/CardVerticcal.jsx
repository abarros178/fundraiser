import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function CardVertical({ data: { other, title, descripcion, uid }, tipo = 1 }) {
    const navigate = useNavigate()
    //todo: mejorar la animacion de esta card
    return (
        <Card sx={{
            maxWidth: 300, minHeight: "100%", minWidth: "100%",
        }}>
            <CardMedia
                style={{ maxWidth: '100%', maxHeight: '60%', height: "400px" }}
                component="img"
                alt="image"
                height="140"
                image={other?.img_v}
                onClick={() => navigate('/donar/proyecto/' + uid)}

            />
            <CardContent>
                {
                    tipo === 2 &&
                    <Typography variant="body1" color="text.secondary">
                        {other.historia}
                    </Typography>
                }
            </CardContent>

        </Card>
    );
}



