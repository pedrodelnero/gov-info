import React, { useEffect, useState } from 'react';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Carousel from 'react-material-ui-carousel'

import { getBillCosponsoredByOneMember } from '../../../api/api';
import Bill from './Bill/Bill';


const Bills = ({ congressNumber, memberId }) => {
    const [bills, setBills] = useState([]);

    useEffect(() => {
        (async function getBills () {
            const data = await getBillCosponsoredByOneMember(memberId);
            const selectedBills = data.filter((dataPoint) => dataPoint.congress === congressNumber);
            // console.log('selectedBills', selectedBills)
            setBills(selectedBills)

        })();
    }, [congressNumber, memberId])
    
  return (
    <div>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography>Bills cosponsored</Typography>
            </AccordionSummary>
            <AccordionDetails >
                {(bills.length === 0) ? (
                    <Typography>No Bills</Typography>
                ) : (
                    <Carousel>
                        {bills.map((bill, index) => (
                            <Bill bill={bill} key={index} congressNumber={congressNumber} />
                        ))}
                    </Carousel>
                )}
            </AccordionDetails>
        </Accordion>
    </div>
  );
}

export default Bills;