import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import useStyles from './styles.js';


const Subcommittee = ({ subcommittee: { name, code, side, rank_in_party }}) => {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.root}>
            <div className={classes.info} >
                <Typography variant='h6'>{name}</Typography>
                <Typography variant='body1'>Code: {code}</Typography>
                <Typography variant='body1'>Side: {side}</Typography>
                <Typography variant='body1'>Rank in party: {rank_in_party}</Typography>
            </div>
            <div className={classes.button} >
                <Button variant='outlined' component={Link} to={`/`} >See Subcommittee</Button>
            </div>
        </Paper>
    )
}

export default Subcommittee;