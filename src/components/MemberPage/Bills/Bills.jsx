import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
// import { MdExpandLess, MdExpandMore, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { getBillCosponsoredByOneMember } from '../../../api/membersAPI';
import Bill from './Bill/Bill';
import './bills.css'


const Bills = ({ congressNumber, memberId }) => {
    const [bills, setBills] = useState([]);
    const [isBillsOpen, setIsBillsOpen] = useState(false)

    useEffect(() => {
        (async function getBills () {
            const data = await getBillCosponsoredByOneMember(memberId);
            const selectedBills = data.filter((dataPoint) => dataPoint.congress === congressNumber);
            setBills(selectedBills)

        })();
    }, [congressNumber, memberId])
    
  return (
    <div className='member-bills-root'>
        <button className='member-bills-info-header' onClick={() => setIsBillsOpen(!isBillsOpen)} >
            <h3>Bills cosponsored</h3>
            {isBillsOpen ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div className={'member-bills-info-details ' + (isBillsOpen ? 'bill-active' : 'bill-inactive')} >
            {(bills.length === 0) ? (
                <h2 className='no-details' >No Bills</h2>
            ) : (
                <Carousel>
                    {bills.map((bill, index) => (
                        <Bill bill={bill} key={index} congressNumber={congressNumber} />
                    ))}
                </Carousel>
            )}
        </div>
    </div>
  );
}

export default Bills;