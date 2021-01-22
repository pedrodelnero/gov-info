import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Bill = ({ bill, congressNumber }) => {
    const [billId, setBillId] = useState('');

    useEffect(() => {
        const splitBillId = bill.bill_id.split('-');
        // console.log(selStr)
        setBillId(splitBillId[0])
       
    }, [bill])
    
  return (
    // <div >
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}> 
        <Typography>{bill.short_title}</Typography>
        <Typography>{bill.number}</Typography>
        <Typography>{bill.committees}</Typography>
        <Button component={Link} to={`/bill/${congressNumber}/${billId}`}>See bill</Button>
    </div>
  );
}

export default Bill;