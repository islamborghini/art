import React from 'react'
import './Header.css'
import { MdSearch, MdExpandMore, MdLanguage  } from "react-icons/md";
import {Avatar} from "@material-ui/core"
function Header() {
  return (
    <div className='header'>
        <img
          className="header__icon"
          src = "https://thumbs.dreamstime.com/b/art-text-logo-paint-brush-black-colour-flat-minimal-vector-logo-style-art-text-logo-paint-brush-black-colour-164108073.jpg"
          alt = ""
        />
        <div className='header__center'>
            <input type = "text" />
            {/*imported icon */}
            <MdSearch/>
        </div>    

        <div className='header__right'>
          <p>Войти</p>
          <MdLanguage size={40}/>
          <MdExpandMore size={40}/>
          <Avatar/>
        </div>
        
    </div>

  )
}

export default Header