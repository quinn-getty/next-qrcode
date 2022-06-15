import * as React from 'react';
import type { NextPage } from 'next';
import { Box,Container, Card, CardContent,Typography, CardActions, Button, createStyles } from '@mui/material'
import Welcome from 'components/Welcome';

const Home: NextPage = () => {
  
  return (
    // <Container >
      <Box display="flex" alignItems="center" justifyContent="center" height="100vh" width="100%">
        <Welcome/>
      </Box>
    // </Container>
  );
};

export default Home;
