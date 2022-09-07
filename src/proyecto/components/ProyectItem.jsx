import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
export const ProyectItem = ({ proyecto }) => {
    const navigate = useNavigate()
    return (
        /*  <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
             <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{proyecto.title}</h2>
             <p className="leading-relaxed text-base mb-4">{proyecto.descripcion}</p>
             <a className="text-indigo-500 inline-flex items-center">Learn More
                 <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                     <path d="M5 12h14M12 5l7 7-7 7"></path>
                 </svg>
             </a>
         </div> */

        <>
            <Card
                sx={{ minWidth: "20%", minHeight: "100%", }}
                onClick={() => navigate("/donar/proyecto/"+proyecto.uid)}
            >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {proyecto.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {proyecto.descripcion}
                    </Typography>
                </CardContent>
                {/* <div style={{ position: "relative", height:"100%"}}>
                    <div style={{
                        float: "right",
                        bottom: 0,
                        right: "0px"
                    }}>

                        <CardActions >
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </div>
                </div> */}
            </Card>



        </>
    )
}
