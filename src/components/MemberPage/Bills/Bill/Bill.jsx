import React from 'react';
import { Link } from 'react-router-dom';

import './bill.css';


const Bill = ({ bill: { bill_id, short_title, number, committees}, congressNumber }) => (
  <div className='member-bill-root' > 
    <div className='member-bill-info' >
        <h3>{short_title}</h3>
        <p>{number}</p>
        <p>{committees}</p>
    </div>
    <div className='member-bill-link' >
        <Link to={`/bill/${congressNumber}/${bill_id.split('-')[0]}`}>See bill</Link>
    </div>
  </div>

);

export default Bill;