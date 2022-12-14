import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function ProyectoItemDonar({ loading, data }) {
  const navigate = useNavigate()
  //todo: mejorar la animacion de esta card
  return (
    <Card sx={{ maxWidth: 300, minHeight: 600, transitionDuration: '3s', "&:hover": {
      boxShadow:"#e9e9e9 0px 20px 20px 0px",
				transform:"translatey(-20px)",
				cursor:"pointer"
        
    }}}>
      <CardMedia
        style={{ maxWidth: '100%', maxHeight: '60%', height: "400px" }}
        component="img"
        alt="image"
        height="140"
        image={data.other?.img_v}
        onClick={() => navigate('/donar/proyecto/' + data.uid)}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
      </CardContent>
      
    </Card>
  );
}



