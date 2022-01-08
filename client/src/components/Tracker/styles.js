import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  balance:{
    color:'white',
    alignItems:'center',
    justifyContent:'center',
  },
  expense:{
    color:'white',
  },
  income: {
    color:'white',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    //backgroundColor: theme.palette.secondary.main,
    backgroundColor: "black",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "black",
    WebkitTextFillColor: "white",
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    backgroundColor: "black",
    WebkitTextFillColor: "white",
  },
}));