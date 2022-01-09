import { Typography, Grid, Container, CircularProgress } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import useStyles from './styles';


const History = () => {
    
    const classes = useStyles();
    const data = useSelector((state) => state.updateVal);

    return (
    <div>
        <div style={{justifyContent:'center', display:'flex'}}>
            <Typography variant="h5" className={classes.title}>HISTORY</Typography>
        </div>
        {Object.keys(data).length>0?
        <Grid container spacing={9} >
            <Grid item>
                <Grid container spacing={2} className={classes.paper}>  
                    <Grid item>
                        {data.expenses.map((expense, index) => (
                            <Typography  style={{color:'white'}}>{index+1}. ${expense} : </Typography>
                        ))}
                    </Grid>
                    <Grid item>
                        {data.expense_d.map((expense_d) => (
                            <Typography style={{color:'white'}}>{expense_d}</Typography>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container spacing={2} className={classes.paper}>  
                    <Grid item>
                        {data.incomes.map((income, index) => (
                            <Typography  style={{color:'white'}}>{index+1}. ${income} : </Typography>
                        ))}
                    </Grid>
                    <Grid item>
                        {data.income_d.map((income_d) => (
                            <Typography style={{color:'white'}}>{income_d}</Typography>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        :
        <CircularProgress/>}
    </div>
    )
}

export default History
