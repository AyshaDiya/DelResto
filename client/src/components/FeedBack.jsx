
import {TextField, Typography,Button} from '@mui/material'
import React, { useState } from 'react'
import Footer from './Footer';


const FeedBack = () => {
  var[data,setData] = useState();
    const inputHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data);
    }
  return (
    <div   align='center'>
        <br /><br /><br /><br />

        <h1>FeedBack</h1>
        <br /><br />
        <TextField variant='outlined' label='your feedback' name='fname' align='centre' onchange={inputHandler}/>&nbsp;
        <br /><br />
        {/* <TextField variant='outlined'label='PassWord' name='Description'onchange={inputHandler}/>&nbsp; */}
        


        <Button variant='contained'>Send</Button>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <Footer/>
    </div>
  )
}

export default FeedBack