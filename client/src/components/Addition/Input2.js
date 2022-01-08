import React from 'react'
import { TextField, Grid, InputAdornment, IconButton} from '@material-ui/core';
import useStyles from './styles';

const Input2 = ({ name, handleChange, label, half, autoFocus, type }) => {

    const classes = useStyles();
    return (
        <Grid item xs={12} sm={half? 6:12}>
            <TextField 
            name={name}
            onChange={handleChange} 
            variant="outlined"
            fullWidth
            margin="normal"
            label={label}
            autoFocus={autoFocus}
            type={type}
            inputProps={{style:{color:'white'}}}
            type="text"
            InputProps={{
                classes: {
                   root: classes.root,
                   focused: classes.focused,
                   notchedOutline: classes.notchedOutline
                }}}
            />
        </Grid>
    )
}

export default Input2
