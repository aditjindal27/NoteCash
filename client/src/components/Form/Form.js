import React, {useState} from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import Icon from './Icon';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {signin, signup} from '../../actions/auth';

const initialState = {firstName: '', lastName: '', email: '', password: '', confirmedPassword: ''};

const Form = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);
    const dispatch = useDispatch();
    const classes = useStyles();
    const handleShowPassword = () => setShowPassword((prev)=>!prev);
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents reloads on submit
        if (isSignUp) {
            dispatch(signup(formData, navigate));
        } else {
            dispatch(signin(formData, navigate));
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    const switchMode = () => {
        setIsSignUp((prev)=>!prev);
        setShowPassword(false);
    };

    const GoogleSuccess = async (res) => {
       const result = res?.profileObj;
       const token = res?.tokenId;

       try {
           dispatch({type:'AUTH', data:{result, token}});
           navigate('/home');
       } catch(error) {
           console.log(error);
       }
    }

    const GoogleFailure = () => {
        console.log("Google Sign In was unsuccesful");
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon style={{ color: "white"}}/>
                </Avatar>
                <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword? "text":"password"} handleShowPassword={handleShowPassword}/>
                        { isSignUp && <Input name = "confirmedPassword" label="Repeat Password" handleChange={handleChange} type="password"/> }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignUp? 'Sign Up' : 'Sign In'}</Button>
                    <GoogleLogin 
                        clientId="913231635144-4go54vkeldesurthdrjkgbgu7sg410lp.apps.googleusercontent.com"
                        render={(renderProps)=> (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={GoogleSuccess}
                        onFailure={GoogleFailure}
                        cookiePolicy={"single_host_origin"}
                    />

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp? 'Already have an account? Sign In': "Don't have an account? Sign up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>

        </Container>
    )
}

export default Form 
