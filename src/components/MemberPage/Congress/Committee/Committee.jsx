import React from 'react';
// import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';


const Committee = ({ committee: { name, code, side, rank_in_party }}) => {
    return (
        <div>
            <Typography variant='h6'>{name}</Typography>
            <Typography variant='body1'>Code: {code}</Typography>
            <Typography variant='body1'>Side: {side}</Typography>
            <Typography variant='body1'>Rank in party: {rank_in_party}</Typography>
        </div>
    )
}

export default Committee;