import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useHttpRequest } from '../../hooks/useHttpRequest';
import { METHOD, setting } from '../../settings/Settings';

export default function ProyectoItemDonar({ data: { other, title, descripcion, uid }, tipo = 1 }) {
  const navigate = useNavigate()
  const { execute } = useHttpRequest(setting.visitas_main, METHOD.POST)
  //todo: mejorar la animacion de esta card
  return (
    <Card sx={{
      width: "100%", minHeight: 600, transitionDuration: '3s', "&:hover": {
        boxShadow: "#e9e9e9 0px 20px 20px 0px",
        transform: "translatey(-20px)",
        cursor: "pointer"

      }
    }}>
      <CardMedia
        style={{ maxWidth: '100%', maxHeight: '60%', height: "400px" }}
        component="img"
        alt="image"
        height="140"
        image={other?.img_v}
        onClick={() => {
          navigate('/donar/proyecto/' + uid)
          execute({
            action: {
              type: 'CARD_INICIO',
              proyecto: uid
            }
          })
        }}

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {
          tipo === 2 &&
          <Typography variant="body1" color="text.secondary">
            {descripcion}
          </Typography>
        }
      </CardContent>

    </Card>
  );
}



