import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Carousel from 'react-material-ui-carousel'
// import CircularProgress from '@material-ui/core/CircularProgress';

import Committee from './Committee/Committee';
import Subcommittee from './Subcommittee/Subcommittee';


const Congress = ({ congress, congressNumber }) => {
    const [committees, setCommittees] = useState([])
    const [subcommittees, setSubcommittees] = useState([])
    const [totalVotes, setTotalVotes] = useState(null)
    const [missedVotes, setMiseedVotes] = useState(null)
    const [chamber, setChamber] = useState(null)

    useEffect(() => {
        const selectedCongress = congress.filter((role) => role.congress === congressNumber)
        setCommittees(selectedCongress[0].committees)
        setSubcommittees(selectedCongress[0].subcommittees)
        setTotalVotes(selectedCongress[0].total_votes)
        setMiseedVotes(selectedCongress[0].missed_votes)
        setChamber(selectedCongress[0].chamber)

    }, [congressNumber, congress])
    
    // if (!selectedCongress) return <CircularProgress />

  return (
    <div>
        <Typography variant='h5'>{congress.chamber}</Typography>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                <Typography>Member Votes</Typography>
            </AccordionSummary>
            <AccordionDetails >
                <div styles={{ display: 'flex', flexDirecton: 'column' }}>
                    <Typography variant='body1'>Total votes: {totalVotes}</Typography>
                    <Typography variant='body1'>Missed votes: {missedVotes}</Typography>
                </div>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                <Typography>Committees</Typography>
            </AccordionSummary>
            <AccordionDetails >
                {(committees.length === 0) ? (
                    <Typography>No Committess</Typography>
                ) : (
                    <Carousel>
                        {committees.map((committee, index) => (
                                <Committee key={index} committee={committee} chamber={chamber} congress={congressNumber} />
                        ))}
                    </Carousel>
                )}
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                <Typography>Subommittees</Typography>
            </AccordionSummary>
            <AccordionDetails >
                {(subcommittees.length === 0) ? (
                    <Typography>No Subcommittess</Typography>
                ) : (
                    <Carousel>
                        {subcommittees.map((subcommittee, index) => (
                                <Subcommittee key={index} subcommittee={subcommittee} />
                        ))}
                    </Carousel>
                )}
            </AccordionDetails>
        </Accordion>
    </div>
  );
}

export default Congress;