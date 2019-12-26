import React from 'react';
import PlayerCard from './PlayerCard';
import useDarkMode from '../hooks/useDarkMode';
// for styling
import { Paper, Box, Container, Button } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  flexBox: {
    width: '190px',
    margin: '10px',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.primary,
    height: '170px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  },
  butt: {
      margin: '3%',
      fontFamily: 'Crimson Pro, serif',
      width: '350px',
      boxShadow: '1px 3px 1px #336699',
      fontSize: '1.5rem'
  }
}));

const PlayerList = ({ players }) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  const classes = useStyles();
  
  return(
    <>
      <Container maxWidth="lg">
        <Button variant="outlined" color="primary" onClick={toggleMode} className={classes.butt}>Toggle Dark Mode</Button>
        <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center">
          {players.map(player => (
            <Box className={classes.flexBox}>
              <Paper className={classes.paper}>
                <PlayerCard player={player} key={player.id} />
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  )
}

export default PlayerList; 