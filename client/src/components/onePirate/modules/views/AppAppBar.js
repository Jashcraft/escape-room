import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import withRoot from '../withRoot';
import { Grid } from '@mui/material';
function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Grid flexGrow={1} flexShrink={1}>
          <Toolbar sx={{ justifyContent: 'flex-start' }}>
            <Box sx={{ flex: 1 }} />

            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/"
              sx={{ fontSize: 24 }}
            >
              {"Pandora's Escape"}
            </Link>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <Link
                variant="h6"
                underline="none"
                color="inherit"
                href="/rules"
                sx={{ fontSize: 24, mr: '20px' }}
              >
                {"Rules"}
              </Link>
              <Link
                variant="h6"
                underline="none"
                color="inherit"
                href="/contact-us"
                sx={{ fontSize: 24, mr: '20px' }}
              >
                {"Contact Us"}
              </Link>
            </Box>

          </Toolbar>
        </Grid>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default withRoot(AppAppBar);
