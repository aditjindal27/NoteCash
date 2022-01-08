import React from 'react'
import { TextField, Grid} from '@material-ui/core';
import useStyles from './styles';

const Input = ({ name, handleChange, label, half, autoFocus, type }) => {

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
            type="number"
            placeholder="$0"
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

export default Input
