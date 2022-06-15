import { makeStyles } from '@material-ui/styles'
import { Box,Card,CardMedia,CardContent,CardActions,Button,Dialog, Modal, IconButton, Typography, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { QrCode, Share } from '@mui/icons-material'
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme'
import { useState } from 'react'
import QRCode from 'qrcode.react'
import { keyList } from 'mock'

const useStyle = makeStyles(()=>({
  box:{
    width: "100vw",
    height: "100vh",
    [theme.breakpoints.up('sm')]:{
      width: "1200px",
      margin: "auto",
      padding: "20px",
    }
  },
  title:{
    textAlign: "center",
    [theme.breakpoints.up('sm')]:{
      textAlign: "left",
    }
  },
  card:{
    display: "flex",
    justifyContent:'space-between',
    flexWrap: "wrap",
  },
  cardItem:{
    marginTop: theme.spacing(),
    width: "98%",
    marginBottom: theme.spacing(3),
    "&:hover":{
      boxShadow: "0px 0px 11px 2px #5f654e"
    },
    [theme.breakpoints.up('sm')]:{
      marginBottom: theme.spacing(1),
      width: "32%"
    }
  },
  dialogContent:{
    // width: "100%",
    // height: "100%",
    [theme.breakpoints.down('sm')]:{
      top: "50%",
      display: "flex",
      justifyContent:'center',
      textAlign: "center",
    //   // left: "50%",
      position: "relative",
      transform:" translate(0, -50%)",
    }
  },
  button:{
    // background: "#fa76a3",
    // color: "#fff",
    // marginBottom: theme.spacing(2),
    width: '80%',
    margin: "10%",
    borderRadius: "20px",
    [theme.breakpoints.up('sm')]:{
      width: '48%',
    }
  }
}))


// const list =
export default function User (){
  const classes = useStyle();
  const [open, setOpen] = useState(false)
  const handleClose = () =>setOpen(false)
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [qrCode, setQrCode] = useState({
    value: '',
    imageSettings:{
      src: '',
      height: 60,
      width: 60,
      excavate: true
    }
  })
  const openDiolog = (item:any)=>{
    const value = `${location.origin}?data=${item.key}&sig={signature}`
    setOpen(true)
    setQrCode({
      value,
      imageSettings:{
        src: item.url,
        height: 60,
        width: 60,
        excavate: true
      }
    })
  }

  return<>
    <Box className={classes.box}>
      <Typography className={classes.title} variant="h2" component="div">
        My Account
      </Typography>
      <div className={classes.card} >
        {
          keyList.map(item=><>
            <Card key={item.key} className={classes.cardItem}>
              <CardMedia
                component="img"
                height="300"
                image={item.url}
                alt="Paella dish"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Here are some descriptions of the key，Here are some descriptions of the key
                </Typography>
              </CardContent>
              <CardActions>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
              <IconButton aria-label="share" onClick={()=>openDiolog(item)}>
                <QrCode />
              </IconButton>
                {/* <Button size="small">Share</Button>
                <Button size="small">generate QR code</Button> */}
              </CardActions>
            </Card>
          </>)
        }
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
        </DialogTitle>
        <DialogContent >
          <div className={classes.dialogContent}>
          <QRCode
            value={qrCode.value}// 生成二维码的内容
            size={300} // 二维码的大小
            fgColor="#000000" // 二维码的颜色
            imageSettings={qrCode.imageSettings}
          />
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" className={classes.button} autoFocus onClick={handleClose}>
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  </>
}