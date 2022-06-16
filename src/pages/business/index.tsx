import { Card, CardContent, Box, Typography, Button } from '@mui/material'
import { makeStyles, withStyles } from '@material-ui/styles'
import theme from 'themes/theme'
import { useRef, useState } from 'react'
import jsQR  from "jsqr"
import { useRouter } from 'next/router'


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
      width: '150px',
      marginLeft:'10px',
      padding: theme.spacing(2)
    }
  },
  canvas:{
    [theme.breakpoints.up('sm')]:{
      height: "100%",
      display: "flex",
      alignItems: "center",
    }

  }
}))

export default function Business (){
  const router = useRouter()
  const classes = useStyle()
  const [timeId, setTimeId] = useState(0)
  const [stream, setStream] = useState<any>()
  const video = useRef<any>(null)
  const canvas = useRef<any>(null)

  const stopScan = ()=>{
    console.log(timeId, stream)
    clearInterval(timeId)
    setTimeId(0)
    stream.getTracks().forEach(function(track:any) {
      track.stop();
    });
  }

  const checkedVideo = async () =>{
    // alert(' This browser does not support code scanning. Please use other devices to scan codes')
    if(!navigator?.mediaDevices?.getUserMedia){ return }
    const constraints = {
      video: {
        width: { min: 400,  ideal: 1080, max: 400,  },
        height: {  min: 400,  ideal: 1080, max: 400, },
      },
    };
    const videoStream = await navigator.mediaDevices.getUserMedia(constraints).catch(e=>{
      console.log(e)
    })
    setStream(videoStream)
    video.current.srcObject = videoStream
    video.current.play().then(()=>{
      const id = setInterval(()=>renderCanvas(),25)
      setTimeId(id as unknown as number)
    })
  }

  const renderCanvas = ()=>{
    try {
      canvas.current.width = 400;
      canvas.current.height =400;
      const context = canvas.current.getContext("2d")
      context.drawImage(video.current, 0, 0);
      const imageData = context.getImageData(0,0,400,400)
      const {data} =  jsQR(imageData.data, 400,400) ||{}
      if(data){
        alert(data)
        location.replace(location.href)
        console.log(timeId)
        stopScan()
      }
    } catch (error) {
      stopScan()
    }
  }

  return<Card className={classes.card}>
      <Box className={classes.box} display="flex" flexWrap="wrap">
    <Box className={classes.canvas}>
      <video ref={video} controls style={{display: "none"}} ></video>
      <canvas ref={canvas} />
    </Box>
        <div >
        <Typography className={classes.text} variant="h2" component="div">
          HELLO WORLD
        </Typography>
        <Typography  className={classes.text} component="div">
          <p>Now you are entering a business terminal, and you need to identify the user's QR code</p>
        </Typography>
        {
          !timeId ?
          <Button autoFocus className={classes.button} onClick={()=>checkedVideo()} variant="contained">Scan Code</Button>
          :<Button autoFocus className={classes.button} onClick={()=>stopScan()} variant="contained">Stop Scan</Button>
        }
        </div>
    </Box>
    {/* This browser does not support code scanning. Please use other devices to scan codes */}
  </Card>
}