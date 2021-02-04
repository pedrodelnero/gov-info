import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
// import CircularProgress from '@material-ui/core/CircularProgress';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
// import { MdExpandLess, MdExpandMore, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import Committee from './Committee/Committee';
import Subcommittee from './Subcommittee/Subcommittee';
import useStyles from './styles.js';
import './congress.css';


const Congress = ({ congress, congressNumber }) => {
    const classes = useStyles();
    const [committees, setCommittees] = useState([]);
    const [subcommittees, setSubcommittees] = useState([]);
    const [totalVotes, setTotalVotes] = useState(null);
    const [missedVotes, setMiseedVotes] = useState(null);
    const [chamber, setChamber] = useState(null);
    const [isVotesOpen, setIsVotesOpen] = useState(false);
    const [isCommitteesOpen, setIsCommitteesOpen] = useState(false);
    const [isSubcommitteesOpen, setIsSubcommitteesOpen] = useState(false);

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
    <div className='member-congress-root'>
        <div className='member-congress-info' >
            <button className='member-congress-info-header' onClick={() => setIsVotesOpen(!isVotesOpen)} >
                <h3>Member Votes</h3>
                {isVotesOpen ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            <div className={'member-congress-info-details votes ' + (isVotesOpen ? 'active' : 'inactive')} >
                {/* <MdKeyboardArrowLeft /> */}
                <p>Total votes: {totalVotes}</p>
                <p>Missed votes: {missedVotes}</p>
                {/* <MdKeyboardArrowRight /> */}
            </div>
        </div>
        <div className='member-congress-info' >
            <button className='member-congress-info-header' onClick={() => setIsCommitteesOpen(!isCommitteesOpen)} >
                <h3>Committees</h3>
                {isCommitteesOpen ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            <div className={'member-congress-info-details ' + (isCommitteesOpen ? 'active' : 'inactive')}   >
                {(committees.length === 0) ? (
                    <h2 className='no-details' >No Committess</h2>
                ) : (
                    <Carousel className={classes.carousel} >
                        {committees.map((committee, index) => (
                                <Committee key={index} committee={committee} chamber={chamber} congress={congressNumber} />
                        ))}
                    </Carousel>
                )}
            </div>
        </div>
        <div className='member-congress-info' >
            <button className='member-congress-info-header' onClick={() => setIsSubcommitteesOpen(!isSubcommitteesOpen)} >
                <h3>Subcommittees</h3>
                {isSubcommitteesOpen ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            <div className={'member-congress-info-details ' + (isSubcommitteesOpen ? 'active' : 'inactive')}   >
                {(subcommittees.length === 0) ? (
                    <h2 className='no-details' >No Subcommittees</h2>
                ) : (
                    <Carousel className={classes.carousel} >
                        {subcommittees.map((subcommittee, index) => (
                                <Subcommittee key={index} subcommittee={subcommittee}  />
                        ))}
                    </Carousel>
                )}
            </div>
        </div>
    </div>
  );
}

export default Congress;