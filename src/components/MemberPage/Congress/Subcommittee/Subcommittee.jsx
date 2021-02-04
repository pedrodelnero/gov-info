import React from 'react';
import { Link } from 'react-router-dom';

import './subcommittee.css'


const Subcommittee = ({ subcommittee: { name, code, side, rank_in_party }}) => (
    <div className='member-congress-subcommittee-root'>
        <div className='member-congress-subcommittee-info' >
            <h3 variant='h6'>{name}</h3>
            <p>Code: {code}</p>
            <p>Side: {side}</p>
            <p>Rank in party: {rank_in_party}</p>
        </div>
        <div className='member-congress-subcommittee-link' >
            <Link to={`/`} >See Subcommittee</Link>
        </div>
    </div>

);

export default Subcommittee;