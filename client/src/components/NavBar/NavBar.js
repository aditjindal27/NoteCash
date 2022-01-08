import React, {useState, useEffect} from 'react';
import {AppBar, Avatar, Typography, Toolbar, Button} from '@material-ui/core';
import useStyles from './styles';
import logo from '../../images/icon.png';
import {Link,useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import decode from 'jwt-decode';

const NavBar = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 990;

    useEffect(()=>{
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));  

        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
        
    }, [location, window.innerWidth]);

    const logout = () => {
        dispatch({type:'LOGOUT'})
        navigate('/');
        setUser(null);
    }

    return(
        
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">NoteCash</Typography>
                <img className={classes.image} src={logo} alt="icon" height="50" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user && location.pathname !== "/" && (
                    <div className={classes.profile}>
                        {width > breakPoint && 
                        <>
                            <Avatar  className={classes.pic} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        </> }
                        <Button variant="contained" className={classes.logout} color='secondary' onClick={logout}>logout</Button>
                    </div>
                )}
            </Toolbar>
        </AppBar>
        
    );
}

export default NavBar;


