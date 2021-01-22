import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


// const Committee = ({ committee: { name, code, side, rank_in_party }}) => {
const Committee = ({ committee, chamber , congress }) => {
    console.log(chamber)
    return (
        <div>
            <Typography variant='h6'>{committee.name}</Typography>
            <Typography variant='body1'>Code: {committee.code}</Typography>
            <Typography variant='body1'>Side: {committee.side}</Typography>
            <Typography variant='body1'>Rank in party: {committee.rank_in_party}</Typography>
            <Typography variant='body1'>Rank in party: {committee.rank_in_party}</Typography>
            <Button variant='contained' component={Link} to={`/committee/${congress}/${chamber}/${committee.code}`} >See committee</Button>
        </div>
    )
}

export default Committee;