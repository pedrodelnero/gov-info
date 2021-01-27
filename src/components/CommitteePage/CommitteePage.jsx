import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Carousel from 'react-material-ui-carousel'

import { getSpecificCommittee } from '../../api/committeesAPI';
import Subcommittee from './Subcommittee/Subcommittee';
import Member from './Member/Member';


const CommitteePage = () => {
    const { congress, chamber, committeeId } = useParams();
    // console.log(congress, chamber, committeeId)
    const [committeeInfo, setCommitteeInfo] = useState(null);

    useEffect(() => {
        (async function loadCommittee() {
            const data = await getSpecificCommittee(congress, chamber, committeeId);
            // console.log(data)
            setCommitteeInfo(data)
        })();

    }, [committeeId, congress, chamber])
         
    if (!committeeInfo) return <CircularProgress />

    return (
        <div>
            <Typography variant='h3'>{committeeInfo.name}</Typography>
            <Typography variant='h6'>Chair: {committeeInfo.chair} - {committeeInfo.chair_party} from {committeeInfo.chair_state}</Typography>
            <Button variant='contained' href={committeeInfo.url} >Go to gov site</Button>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                    <Typography>Current Members</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    {(committeeInfo.current_members.length === 0) ? (
                        <Typography>No current members</Typography>
                    ) : (
                        <Grid container spacing={2}>
                            {committeeInfo.current_members.map((currMembers, index) => (
                                <Grid item key={index} >
                                    <Member member={currMembers} />
                                </Grid>
                            ))}

                        </Grid>
                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                    <Typography>Subcommittess</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    {(committeeInfo.subcommittees.length === 0) ? (
                        <Typography>No Subcommittess</Typography>
                    ) : (
                        <Carousel>
                            {committeeInfo.subcommittees.map((subcommittee, index) => (
                                    <Subcommittee key={index} subcommittee={subcommittee} />
                            ))}
                        </Carousel>
                    )}
                </AccordionDetails>
            </Accordion>
            {/* <Typography>Sponsor:</Typography>
            <Typography>{billInfo.sponsor}</Typography>
            <Button component={Link} to={`/member/${billInfo.sponsor_id}`} >See member</Button> */}
          
        </div>
    );
}

export default CommitteePage;