import React, {useState} from 'react'
import './Banner.css'
import {Button} from "@material-ui/core";
import Search from './Search'


function Banner() {
  return (
    <div className='banner'>
        <div className='banner__info'>
            <h1>
                Станьте частью искусства вместе с Online Art Gallery
            </h1>
            <Button variant='outlined'>Зарегистрироваться</Button>
            
        </div>
    </div>
  )
}

export default Banner
