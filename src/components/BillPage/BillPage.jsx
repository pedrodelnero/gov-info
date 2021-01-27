import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Carousel from 'react-material-ui-carousel'

import { getSpecificBill } from '../../api/billsAPI'


const BillPage = () => {
    const { congress, billId } = useParams();
    // console.log(params)
    const [billInfo, setBillInfo] = useState(null);
    // const [congressNumber, setCongressNumber] = useState('117');

    useEffect(() => {
        (async function loadBill() {
            const data = await getSpecificBill(congress, billId);
            console.log(data)
            setBillInfo(data)
        })();


    }, [billId, congress])
         
    if (!billInfo) return <CircularProgress />

    return (
        <div>
            <Typography variant='h3'>{billInfo.title}</Typography>
            <Typography>{billInfo.summary}</Typography>
            <Typography>{billInfo.summary_short}</Typography>
            <Typography>Sponsor:</Typography>
            <Typography>{billInfo.sponsor}</Typography>
            <Button component={Link} to={`/member/${billInfo.sponsor_id}`} >See member</Button>
          
        </div>
    );
}

export default BillPage;