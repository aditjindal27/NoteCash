import React, {useEffect, useState} from 'react'
import {Grid, Typography, CircularProgress} from '@material-ui/core';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import { getValue } from '../../actions/compute';

const Tracker = () => {
    const classes = useStyles();
    const data = useSelector((state) => state.updateVal);
    const [headingColor, setColor] = useState("white");
    const dispatch = useDispatch();
    let user = JSON.parse(localStorage.getItem('profile'));
    let id = user?.result?.googleId || user?.result?._id;

    useEffect(()=>{
        dispatch(getValue(id));      
        let total = calculateTotal()
        if (total === 0) {
            setColor("white");
        } else if (parseInt(total) > 0) {
            setColor("#00c805");
        } else {
            setColor("#ff5000");
        }
    }, [id, dispatch]);

    const calculateTotal = () => {
      
        let total =  calculateIncome() - calculateExpense();
        return total;
    };

    const calculateIncome = () => {
        return Object.keys(data).length? data.incomes.reduce((a, b) => a + b, 0): 0 ;
        //return data.incomes.reduce((a, b) => a + b, 0)
    };

    const calculateExpense = () => {
        return Object.keys(data).length? data.expenses.reduce((a, b) => a + b, 0): 0 ;
       //return data.expenses.reduce((a, b) => a + b, 0)
    };

    return ( Object.keys(data).length ? 
        <div>
                <div style={{textAlign:'center'}}>
                <Typography variant="h6" className={classes.balance}>YOUR BALANCE:</Typography>
                <Typography variant="h5" style={{color:headingColor}} className={classes.balance}>${calculateTotal()}</Typography>
                </div>
                <Grid container spacing={9} className={classes.paper}>
                    <Grid item>
                        <Typography variant="h6" className={classes.balance}>EXPENSES:</Typography>
                        <Typography variant="h5" style={{color:"#ff5000"}} className={classes.balance}>${calculateExpense()}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" className={classes.balance}>INCOME:</Typography>
                        <Typography variant="h5"  style={{color:"#00c805"}} className={classes.balance}>${calculateIncome()}</Typography>
                    </Grid>
                </Grid>
        </div>
        :
        <CircularProgress/>
    )
}

export default Tracker
