// import { Card, CardContent, Box, Typography, Button } from '@mui/material'
// import { styled } from '@mui/material/styles';
// import { red, green, blue } from '@mui/material/colors';
import { Card, CardContent, Box, Typography, Button } from '@mui/material'
import { makeStyles } from '@material-ui/styles'
import theme from 'themes/theme'

const useStyle = makeStyles(()=>{
  return({
  card:{
    width: "98%",
    [theme.breakpoints.up('sm')]:{
      padding: theme.spacing(2),
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
          <Button autoFocus className={classes.button} variant="contained">I'm user</Button>
          <Button autoFocus className={classes.button} variant="outlined">I'm business</Button>
        </Box>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  </>
}