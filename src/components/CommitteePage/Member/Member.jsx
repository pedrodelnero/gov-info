import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const Member = ({ member: { id, name, party, state, note } }) => {
    return (
        <div>
            <Typography variant='h6'>{name} - {party}</Typography>
            <Typography variant='body1'>{state}</Typography>
            <Typography variant='body1'>{note}</Typography>
            <Button variant='contained' component={Link} to={`/member/${id}`} >See member</Button>
            {/* <Typography variant='body1'>Side: {side}</Typography>
            <Typography variant='body1'>Rank in party: {rank_in_party}</Typography> */}
        </div>
    )
}

export default Member;