import React from 'react'
import './style.css'
import {Typography} from '@material-ui/core'

const date = new Date().getFullYear()

function Footer (){
return (
   
       <Typography className="footer"> © Copyright Siddhant {date}</Typography>
  
)
}

export default Footer