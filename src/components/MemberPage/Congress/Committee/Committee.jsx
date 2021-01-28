import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import useStyles from './styles.js';



// const Committee = ({ committee: { name, code, side, rank_in_party }}) => {
const Committee = ({ committee: { name, code, side, rank_in_party }, chamber , congress }) => {
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
                <Button variant='outlined' component={Link} to={`/committee/${congress}/${chamber}/${code}`} >See committee</Button>
            </div>
        </Paper>
    )
}

export default Committee;