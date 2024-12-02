import React, { useState } from 'react';
import { AppBar, Box, Button, Container, Drawer, IconButton, MenuItem, Toolbar, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import './AppAppBar.css'; 

export default function AppAppBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      className="appbar" 
    >
      <Container maxWidth="lg">
        <Toolbar className="toolbar">
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="text" color="inherit" size="small">
                Informazioni personale
              </Button>
              <Button variant="text" color="inherit" size="small">
                Informazioni struttura
              </Button>
              <Button variant="text" color="inherit" size="small">
                Listino Prezzi
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <Button 
              variant="contained" 
              size="small" 
              sx={{
                backgroundColor: '#5f00a8', // Colore viola
                color: 'white',  // Colore testo bianco
                '&:hover': {
                  backgroundColor: '#8e44ad', // Colore viola chiaro al passaggio del mouse
                },
              }}
            >
              Accedi
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: '#9400d3' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem sx={{ color: 'white' }}>Informazioni personale</MenuItem>
                <MenuItem sx={{ color: 'white' }}>Informazioni struttura</MenuItem>
                <MenuItem sx={{ color: 'white' }}>Listino prezzi</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button 
                    variant="contained" 
                    fullWidth 
                    sx={{
                      backgroundColor: '#5f00a8',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#8e44ad',
                      },
                    }}
                  >
                    Accedi
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
