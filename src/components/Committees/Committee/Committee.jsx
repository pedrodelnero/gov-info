import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const Committee = ({ committee, congress }) => {
// const Committee = ({ committee: { name, id, chamber, chair, chair_party, chair_state, chair_id, subcommittees} }) => {
    return (
        <div>
            <Typography variant='h5'>{committee.name}</Typography>
            <Typography variant='body1'>Chair: {committee.chair} - {committee.chair_party} from {committee.chair_state}</Typography>
            <Button component={Link} to={`/committee/${congress}/${committee.chamber}/${committee.id}`} >See more</Button>
        </div>
    )
}

export default Committee;