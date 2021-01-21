import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const Member = ({ member: { first_name, last_name, party, id, title, state}}) => {
    return (
        <div>
            <Typography variant='h5'>{first_name} {last_name}</Typography>
            <Typography variant='body1'>{party} - {title} from {state}</Typography>
            <Button component={Link} to={`/member/${id}`} >See more</Button>
        </div>
    )
}

export default Member;