import React from 'react';
import { Link } from 'react-router-dom';

import './committee.css'


const Committee = ({ committee: { id, name, chamber, chair, chair_party, chair_state }, congress }) => (
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

)

export default Committee;