import { Typography, Grid, Container } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import useStyles from './styles';


const History = () => {
    
    const classes = useStyles();
    const data = useSelector((state) => state);

    return (
    <div>
        <div style={{justifyContent:'center', display:'flex'}}>
            <Typography variant="h5" className={classes.title}>HISTORY</Typography>
        </div>
        <Grid container spacing={9} >
            <Grid item>
                <Grid container spacing={2} className={classes.paper}>  
                    <Grid item>
                        {data.updateVal.expenses.map((expense, index) => (
                            <Typography  style={{color:'white'}}>{index+1}. ${expense} : </Typography>
                        ))}
                    </Grid>
                    <Grid item>
                        {data.updateVal.expense_d.map((expense_d) => (
                            <Typography style={{color:'white'}}>{expense_d}</Typography>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container spacing={2} className={classes.paper}>  
                    <Grid item>
                        {data.updateVal.incomes.map((income, index) => (
                            <Typography  style={{color:'white'}}>{index+1}. ${income} : </Typography>
                        ))}
                    </Grid>
                    <Grid item>
                        {data.updateVal.income_d.map((income_d) => (
                            <Typography style={{color:'white'}}>{income_d}</Typography>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
    )
}

export default History
