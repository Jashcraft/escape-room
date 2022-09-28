import * as React from 'react';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';

function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Link href='/ContactUs' variant='h2'>
        Have Questions? Call Us!
      </Link>
    </Container>
  );
}

export default ProductSmokingHero;
