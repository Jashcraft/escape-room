import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Typography variant="h4" component="span">
        Got any questions? Call Us!
      </Typography>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        (555)-555-5555
      </Typography>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        555 E El Camino Real,
        Glendale, CA
        80000
      </Typography>
    </Container>
  );
}

export default ProductSmokingHero;
