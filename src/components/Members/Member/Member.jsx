import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import theme from '../../../router/theme';

import useStyles from './styles.js';


const Member = ({ member: { first_name, last_name, party, id, title, state}}) => {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.root}>
            <Typography variant='h5'>{first_name} {last_name}</Typography>
            <Typography variant='body1'>{party} - {title} from {state}</Typography>
            <Button component={Link} to={`/member/${id}`} >See more</Button>
        </Paper>
    )
}

export default Member;