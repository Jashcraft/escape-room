import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import HeroPhoto from './images/photo-hero.jpg'

const backgroundImage = HeroPhoto;

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Escape Your Week At Pandora's Escape
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="#rooms"
        sx={{ minWidth: 200 }}
      >
        Check Out Our Rooms
      </Button>
      <Typography variant='h5' sx={{fontStyle: 'italic', mt: '10px'}}>Formerly known as "Colorado Escapes"</Typography>
    </ProductHeroLayout>
  );
}
