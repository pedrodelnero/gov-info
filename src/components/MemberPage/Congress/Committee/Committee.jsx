import React from 'react';
import { Link } from 'react-router-dom';

import './committee.css';


const Committee = ({ committee: { name, code, side, rank_in_party }, chamber , congress }) => (
    <div className='member-congress-committee-root'>
        <div className='member-congress-committee-info' >
            <h3>{name}</h3>
            <p>Code: {code}</p>
            <p>Side: {side}</p>
            <p>Rank in party: {rank_in_party}</p>
        </div>
        <div className='member-congress-committee-link' >
            <Link to={`/committee/${congress}/${chamber}/${code}`} >SEE COMMITTEE</Link>
        </div>
    </div>

)

export default Committee;