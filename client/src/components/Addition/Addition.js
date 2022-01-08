import React, {useState} from 'react'
import {Button, Grid} from '@material-ui/core';
import useStyles from './styles';
import Input from './Input';
import Input2 from './Input2';
import {useDispatch} from 'react-redux';
import {addValue, resetValue} from '../../actions/compute'

const initialState2 = {expense: 0, income: 0, expense_description: "", income_description: ""};

const Addition = () => {

    const dispatch = useDispatch();
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState2)
    const user = JSON.parse(localStorage.getItem('profile'));

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents reloads on submit
        const id = user?.result?.googleId || user?.result?._id
        dispatch(addValue(formData, id));
        Array.from(e.target).forEach((e)=>(e.value=0)); //clears sinput fields
        setFormData(initialState2);
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    const reset = (e) => {
        document.getElementById("main_form").reset()
        const id = user?.result?.googleId || user?.result?._id
        dispatch(resetValue(id));
    }

    return (
        <div className={classes.container}>
            <form id="main_form" className={classes.form}  onSubmit={handleSubmit}>
                    <Grid container>
                    <Input id="expense" name="expense" label="Expense" handleChange={handleChange} autoFocus half/>
                    <Input id = "income" name="income" label="Income" handleChange={handleChange} autoFocus half/>
                    <Input2 id="expense_description" name="expense_description" label="Description" handleChange={handleChange} autoFocus half/>
                    <Input2 id = "income_description" name="income_description" label="Description" handleChange={handleChange} autoFocus half/>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Submit</Button>
                    <Button fullWidth variant="contained" color="primary" className={classes.submit} onClick={reset}>Reset</Button>
            </form>
        </div>
    )
}

export default Addition
