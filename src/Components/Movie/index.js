import React from 'react'
import {Card, CardActionArea, Button, CardContent, CardMedia, Typography, Modal, Backdrop, Fade} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import './style.css'

const useStyles = makeStyles((theme) => ({
    root:{
       width: 300,
       margin:'10px'
    },
    media: {
        height: 140,
      },
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
}))



function Movie (props){
   
    const classes = useStyles()

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
            <Card className={classes.root} >
            <CardActionArea onClick={handleOpen} >
              <CardMedia
                className={classes.media}
                image={props.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card> 


          <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <Card className={classes.root} >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={props.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
              Year: {props.year} Type: {props.type}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card> 
          </div>
        </Fade>
      </Modal>
      </>
    
      
    )

    
}

export default Movie;