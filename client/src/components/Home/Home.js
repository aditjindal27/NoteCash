import React, {useState, useEffect} from 'react';
import {Container, Typography} from '@material-ui/core';
import NavBar from '../NavBar/NavBar';
import Tracker from '../Tracker/Tracker';
import Addition from '../Addition/Addition';
import History from '../History/History';

const Home = () => {

    return (
        <div>
           <NavBar/>
           <div style={{justifyContent:'center', display:'flex'}}>
                <Tracker/>
           </div>
           <div style={{justifyContent:'center', display:'flex'}}>
               <Addition/>
           </div>
           <div style={{justifyContent:'center', display:'flex'}}>
               <History/>
           </div>
           
        </div>
    )
}

export default Home
