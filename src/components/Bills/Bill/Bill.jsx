import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import theme from '../../../router/theme';

import useStyles from './styles.js';


const Bill = ({ bill: { bill_slug, short_title, sponsor_title, sponsor_name, id, sponsor_state }}) => {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.root} >
            <Typography variant='h5'>{short_title}</Typography>
            <Typography variant='body1'>Sponsor: {sponsor_title} {sponsor_name} from {sponsor_state}</Typography>
            <Button variant='outlined' component={Link} to={`/bill/${bill_slug}`} className={classes.button} >See more</Button>
        </Paper>
    )
}

export default Bill;