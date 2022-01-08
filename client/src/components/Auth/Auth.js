import React from 'react'
import {Container, Typography} from '@material-ui/core';
import Form from '../Form/Form';
import NavBar from '../NavBar/NavBar';

const Auth = () => {
    return (
        <div>
            <Container>
                <NavBar/>
                <Form/>
            </Container>
        </div>
    )
}

export default Auth
