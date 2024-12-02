import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import './MainContent.css';

export default function MainContent() {
  return (
    <Box className="main-container">
      <div className="header">
        <Typography variant="h1" gutterBottom>
          Benvenuto in Otre
        </Typography>
        <Typography variant='h2'>Ecco cosa ti offriamo</Typography>
      </div>
      <Grid container spacing={2} className="grid-container">
        <Grid item xs={12} md={4} className="grid-item">
          <Box className="cell">
            <img
              src="https://res.cloudinary.com/checkmoov/image/upload/c_fill,h_320,w_480/Otre-Club_2.jpg"
              alt="Immagine 1"
              className="cell-image"
            />
            <Typography variant="h5" className="cell-title">
              Corsi
            </Typography>
            <Typography variant="body2" className="cell-description">
              Molteplici corsi tra cui i più importanti solo pilates, posturale, running e walking
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} className="grid-item">
          <Box className="cell">
            <img
              src="https://res.cloudinary.com/checkmoov/image/upload/c_fill,h_320,w_480/Otre-Club_4.jpg"
              alt="Immagine 2"
              className="cell-image"
            />
            <Typography variant="h5" className="cell-title">
              Sala fitness
            </Typography>
            <Typography variant="body2" className="cell-description">
              Sala fitnes ben attrezzata sia lato macchinari che lato corpo libero che cardio
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} className="grid-item">
          <Box className="cell">
            <img
              src="https://res.cloudinary.com/checkmoov/image/upload/c_fill,h_320,w_480/Otre-Club_5.jpg"
              alt="Immagine 3"
              className="cell-image"
            />
            <Typography variant="h5" className="cell-title">
              Piscina
            </Typography>
            <Typography variant="body2" className="cell-description">
              Corsi di piscina sin dalle piccole età inclusi alcuni corsi come ad esempio acquagym
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
