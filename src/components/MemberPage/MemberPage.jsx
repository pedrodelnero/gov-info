import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Carousel from 'react-material-ui-carousel'

import { getOneCongressMember, getOneCongressMemberExpenses } from '../../api/api';
import Congress from './Congress/Congress';
import Bills from './Bills/Bills';
import MemberExpenses from './MemberExpenses/MemberExpenses';

const MemberPage = () => {
    const { id } = useParams();
    const [memberInfo, setMemberInfo] = useState(null);
    const [congressNumber, setCongressNumber] = useState('117');
    // const [congress, setCongress] = useState(null);
    const [expenseYear, setExpenseYear] = useState(2019);
    const [expenseQuarter, setExpenseQuarter] = useState(1);
    const [memberExpenses, setMemberExpenses] = useState([]);

    const years = [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

    useEffect(() => {
        (async function loadMember () {
            const data = await getOneCongressMember(id);
            console.log(data)
            setMemberInfo(data)
        })();

        (async function getExpense () {
            const data = await getOneCongressMemberExpenses(id, expenseYear, expenseQuarter);
            setMemberExpenses(data)

        })();

    }, [id, expenseYear, expenseQuarter])
    
    // const handleCongressRole = (e) => setCongress(memberInfo.roles.filter((role) => role.congress === e.currentTarget.value));
     
    if (!memberInfo) return <CircularProgress />

    return (
        <div>
            <Typography variant='h3'>{memberInfo.first_name} {memberInfo.last_name}</Typography>
            <Typography>Role in congress</Typography>
            {memberInfo.roles.map((role, index) => (
                <Button key={index} onClick={(e) => setCongressNumber(e.currentTarget.value)} value={role.congress} >{role.congress}</Button>
            ))}
            {<Congress congress={memberInfo.roles} congressNumber={congressNumber} />}
            {<Bills congressNumber={congressNumber} memberId={id} />}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>Expenses by quarter</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <div styles={{ display: 'flex', flexDirecton: 'column' }}>
                        <Typography variant='h6'>Select year</Typography>
                        {years.map((year) => (
                            <Button key={year} value={year} onClick={(e) => setExpenseYear(e.currentTarget.value)}>{year}</Button>
                        ))}
                        <Typography variant='h6'>Select quarter</Typography>
                        {[1, 2, 3, 4].map((quarter) => (
                            <Button key={quarter} value={quarter} onClick={(e) => setExpenseQuarter(e.currentTarget.value)}>{quarter}</Button>
                        ))}
                        {(memberExpenses.length === 0) ? (
                            <Typography variant='h4' >No Expense this quarter</Typography>
                        ) : (
                            <Carousel>
                                {memberExpenses.map((memberExpense, index) => (
                                    <MemberExpenses key={index} expenses={memberExpense} />
                                ))}
                            </Carousel>
                        )}
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default MemberPage;