import React from 'react';
// material ui imports
import PersonIcon from '@material-ui/icons/PersonOutlined';
import FlagIcon from '@material-ui/icons/FlagOutlined';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    icon: {
        fontSize: 20,
        fontWeight: 300
    },
    person: {
        fontSize: 20,
        fontWeight: 550
    },
    country: {
        fontSize: 18
    },
    search: {
        fontSize: 15
    }
  });

const PlayerCard = ({player}) => {

      const classes = useStyles();

    return(
        <div>
            <p className={classes.person}><PersonIcon color="secondary-variant" className={classes.icon}/>  {player.name}</p>
            <p className={classes.country}><FlagIcon color="secondary-variant" className={classes.icon}/>  {player.country}</p>
            <p className={classes.search}><SearchIcon color="secondary-variant" className={classes.icon}/>  {player.searches}</p>
        </div>
    )
}

export default PlayerCard;