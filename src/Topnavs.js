import { Divider } from '@material-ui/core';
import React from 'react';
import './Topnavs.css'

function Topnavs() {
    return (
        <div className = "top-nav">
            <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/batik">Batik</a>
        <a href="/gobelen">Gobelen</a>
            </nav>
        </div>
    )
}

export default Topnavs;