import { Card, CardContent, Box, Typography, Button } from '@mui/material'
import { makeStyles, withStyles } from '@material-ui/styles'
import theme from 'themes/theme'
import { useRef } from 'react'


// const S = withStyles(Button)(theme=>({
//   root:{

//   }
// }))
const useStyle = makeStyles(()=>({
  card:{
    background: "#5F68E8",
    backgroundImage: "url(/scan-bg.png)",
    // filter: "blur(5px)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    width: "100%",
    height: "100vh",
    [theme.breakpoints.up('sm')]:{
      backgroundImage: "url(/pc-scan-bg-2.png)",
      padding: theme.spacing(2),
      backgroundSize: "80%",
      width: "auto",
    }
  },
  box:{
    display: "flex",
    width: "100%",
    height: "100vh",
    alignItems: "end",
    justifyContent: "end"
  },
  text: {
    color: "#fff",
    padding: theme.spacing(),
  },
  button:{
    background: "#fa76a3",
    color: "#fff",
    marginBottom: theme.spacing(3),
    width: '80%',
    margin: "10%",
    borderRadius: "15px",
    [theme.breakpoints.up('sm')]:{
      width: '100px',
      marginLeft:'10px',
      padding: theme.spacing(2)
    }
  }
}))
export default function Business (){
  const classes = useStyle()
  const video = useRef<any>(null)
  const canvas = useRef(null)
  const checkedVideo = async () =>{
    alert(' This browser does not support code scanning. Please use other devices to scan codes')

    console.log(video.current)
    return;
    if(!navigator?.mediaDevices?.getUserMedia){
      return 
    }
   const req = await navigator.mediaDevices.getUserMedia({ video: true })
   .then(stream=>{
    // if(window.URL.createObjectURL){
      // console.log(window.URL.createObjectURL(stream))
    // }
    // console.log(stream)
    // if (video.current.src.srcObject) {
    //   video.current.src.srcObject = stream;
    // }else if (window.URL.createObjectURL) {
    //   console.log('createObjectURL', window.URL.createObjectURL(stream as any))
    //   video.current.src = window.URL.createObjectURL(stream as any);
    // } else if (window.webkitURL) {
    //   console.log('webkitURL',  window.webkitURL.createObjectURL(stream as any))
    //   video.current.src = window.webkitURL.createObjectURL(stream as any);
    // } else {
    //   video.current.src = stream;
    // }
    video.current.src = window.URL.createObjectURL(stream as any)
    video.current.playsInline = true;
    // video.current.play().then(res=>{
    //   console.log(res)
    // })
    // video.current.
    //  = stream
   }, err=>{
    console.log(err)
   })
   .catch(e=>{
    console.log(e)
   })
    console.log(req)
  }
  return<Card className={classes.card}>
      <Box className={classes.box}>
    <div>
      <video ref={video} controls ></video>
      <canvas ref={canvas} />
    </div>
        <div >
        <Typography className={classes.text} variant="h2" component="div">
          HELLO WORLD
        </Typography>
        <Typography  className={classes.text} component="div">
          <p>Now you are entering a business terminal, and you need to identify the user's QR code</p>
        </Typography>
        <Button autoFocus className={classes.button} onClick={()=>checkedVideo()} variant="contained">Scan Code</Button>
        </div>
    </Box>
    {/* This browser does not support code scanning. Please use other devices to scan codes */}
  </Card>
}