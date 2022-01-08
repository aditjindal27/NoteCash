import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: "15",
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    background:'black',
  },
  logout: {
    backgroundColor: "white",
    WebkitTextFillColor: "black",
  },
  heading: {
    color: '#00c805',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '5%',
    fill:'white',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '30%',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color:'white'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  pic: {
    color: 'black',
    backgroundColor: 'white',
  }
}));