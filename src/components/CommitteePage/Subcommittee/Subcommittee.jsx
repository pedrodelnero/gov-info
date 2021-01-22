import React from 'react';
// import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';


const Subcommittee = ({ subcommittee: { name, id } }) => {
    return (
        <div>
            <Typography variant='h6'>{name}</Typography>
            <Typography variant='body1'>ID: {id}</Typography>
            {/* <Typography variant='body1'>Side: {side}</Typography>
            <Typography variant='body1'>Rank in party: {rank_in_party}</Typography> */}
        </div>
    )
}

export default Subcommittee;