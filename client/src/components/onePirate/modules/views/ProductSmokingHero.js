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
        Have any questions? Call Us!
      </Typography>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        (720)-422-7055
      </Typography>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        6000 E Evans Ave #3-205,
        Denver, Co
        80222
      </Typography>
    </Container>
  );
}

export default ProductSmokingHero;
