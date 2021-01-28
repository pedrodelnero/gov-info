import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles.js';


const Committee = ({ committee: { id, name, chamber, chair, chair_party, chair_state }, congress }) => {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.root} >
            <Typography variant='h5'>{name}</Typography>
            <Typography variant='body1'>Chair: {chair} - {chair_party} from {chair_state}</Typography>
            <Button
                variant='outlined'
                component={Link}
                to={`/committee/${congress}/${chamber}/${id}`}
                className={classes.button}
            >
                See more
            </Button>
        </Paper>
    )
}

export default Committee;