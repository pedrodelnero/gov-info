import React from 'react';
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

// import useStyles from './styles.js';
import './committee.css'


const Committee = ({ committee: { id, name, chamber, chair, chair_party, chair_state }, congress }) => {
    return (
        <div className='committee-root' >
            <h2 className='committee-name' >{name}</h2>
            {(chair === null) ? (
                <p className='committee-info' >Chair: No chair yet</p>
                
                ) : (
                <p className='committee-info' >Chair: {chair} - {chair_party} from {chair_state}</p>
            )}
            <div className='committee-button' >
                <Link to={`/committee/${congress}/${chamber}/${id}`} >See more</Link>
            </div>
        </div>
        // <Paper elevation={3} className={classes.root} >
        //     <Typography variant='h5'>{name}</Typography>
        //     {(chair === null) ? (
        //         <Typography variant='body1'>Chair: No chair yet</Typography>
        //     ) : (
        //         <Typography variant='body1'>Chair: {chair} - {chair_party} from {chair_state}</Typography>
        //     )}
        //     <Button
        //         variant='outlined'
        //         component={Link}
        //         to={`/committee/${congress}/${chamber}/${id}`}
        //         className={classes.button}
        //     >
        //         See more
        //     </Button>
        // </Paper>
    )
}

export default Committee;