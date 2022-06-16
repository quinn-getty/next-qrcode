// import { Card, CardContent, Box, Typography, Button } from '@mui/material'
// import { styled } from '@mui/material/styles';
// import { red, green, blue } from '@mui/material/colors';
import { Card, CardContent, Box, Typography, Button } from '@mui/material'
import { makeStyles } from '@material-ui/styles'
import theme from 'themes/theme'
import Link from 'components/Link'
import NextLink from 'next/link';



const useStyle = makeStyles(()=>{
  return({
  card:{
    width: "98%",
    [theme.breakpoints.up('sm')]:{
      padding: theme.spacing(2),
      marginLeft: "70%",
      width: "auto",
    }
  },
  buttonBox:{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
    [theme.breakpoints.up('sm')]:{
      justifyContent: "space-around",
    }
  },
  button:{
    marginBottom: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]:{
      width: '48%',
    }
  },
  link:{
    color: "#FFF",
  }
})
}
)
export default function Welcome (){
  const classes = useStyle()

  return <>
    <Card variant="outlined" className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="div">
          Demo
        </Typography>
        <Typography>
          This is a QR Code Integration demo
        </Typography>
        <Typography>
          Please select a role
        </Typography>
        <Box className={classes.buttonBox}>
          <Button autoFocus className={classes.button} variant="contained">
            <Link className={classes.link} href='/user'> I'm user </Link></Button>
          <Button autoFocus className={classes.button} variant="outlined">
            <NextLink href='/business'>I'm business</NextLink></Button>
        </Box>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  </>
}