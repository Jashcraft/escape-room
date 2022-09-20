import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import Puzzle from './images/puzzle.svg'
import New from './images/new.svg'
import Door from './images/door.svg'

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={Puzzle}
                alt="BrainPuzzle"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Challenging:
              </Typography>
              <Typography variant="h5">
                {
                  'We have a variety of difficulty levels that will suit any and all escapists! '
                }

                {
                  'Whether it’s your first escape room or your thousandth, we have the perfect level for you and your team!'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={New}
                alt="New Sign"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Themes:
              </Typography>
              <Typography variant="h5">
                {
                  'From Sci-Fi to fantasy to adventure to horror, we have an array of themes to suit any of your interests!  '
                }

                {'We have rooms for date nights, family nights, and spooky nights! Get your team together and select an adventure that fits your mood!'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={Door}
                alt="A Door"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Fun For All Ages:
              </Typography>
              <Typography variant="h5">
                {'Our puzzles and room designs are made for you to be creative and have fun with your family and friends! We challenge you to think outside the box and lead your group to victory!'}
                {' **Some rooms are age restricted, please read room descriptions and terms of the room**'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
