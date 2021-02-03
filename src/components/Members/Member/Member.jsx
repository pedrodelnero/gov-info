import React from 'react';
import { Link } from 'react-router-dom';

import './member.css';


const Member = ({ member: { first_name, last_name, party, id, title, state }}) => (
    <div className='member-root' >
        <h2 className='member-name' >{first_name} {last_name}</h2>
        <p className='member-info' >{party} - {title} from {state}</p>
        <div className='member-button' >
            <Link to={`/member/${id}`}  >See more</Link>
        </div>
    </div>

);

export default Member;