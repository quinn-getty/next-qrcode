import * as React from 'react';
import type { NextPage } from 'next';
import { Box,Container, Card, CardContent,Typography, CardActions, Button, createStyles } from '@mui/material'
import Welcome from 'components/Welcome';
import { makeStyles } from '@material-ui/styles'
import link from 'components/Link'
import theme from 'themes/theme'
const useStyle = makeStyles(()=>({
  card:{
    // image-10.webp
    backgroundImage: "url(/image-10.webp)",
    backgroundSize: "100%",
    [theme.breakpoints.up('sm')]:{
      backgroundRepeat: "no-repeat",
    }

  }
}))

const Home: NextPage = () => {
  const classes = useStyle()
  
  return (
    // <Container >
      <Box className={classes.card} display="flex" alignItems="center" justifyContent="center" height="100vh" width="100%">
        <Welcome/>
      </Box>
    // </Container>
  );
};

export default Home;
