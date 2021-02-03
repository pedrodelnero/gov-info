import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';

import { getRecentBills } from '../../api/billsAPI';
import Bill from './Bill/Bill';
import useStyles from './styles.js';
import usHouseSeal from '../../images/us_house_seal.svg';
import usSenateSeal from '../../images/us_senate_seal.svg';


const Bills = () => {
    console.log('load')
    const classes = useStyles();
    const { chamber } = useParams();
    const [bills, setBills] = useState([]);
    // const [searchTerm, setSearchTerm] = useState("");
    // const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        (async function loadBills () {
        const data = await getRecentBills(116, chamber);
        setBills(data.bills);
        })();

    }, [chamber]);

//   useEffect(() => {
    // const results = members.filter(member => {
    //   const fullName = `${member.first_name} ${member.last_name}`;
    //   return fullName.toLocaleLowerCase().includes(searchTerm)
    // });

    // setSearchResults(results);  
//   }, [searchTerm]);

  return (
    <div className={classes.root} >
      {(chamber === 'senate') ? (
        <div className={classes.pageHeader} >
          <Button
            startIcon={<Avatar src={usHouseSeal} />}
            component={Link}
            to='/bills/house'
            className={classes.pageHeaderButton}
          >
            See House of Rep Bills
          </Button>
          <img src={usSenateSeal} alt='US Senate Seal' className={classes.pageHeaderImage} />
        </div>

      ) : (
        <div className={classes.pageHeader} >
            <Button
              startIcon={<Avatar src={usSenateSeal} />}
              component={Link}
              to='/bills/senate'
              className={classes.pageHeaderButton}
            >
              See Senate Bills
            </Button>
          <img src={usHouseSeal} alt='US House of Rep Seal' className={classes.pageHeaderImage} />
        </div>
      )}
      {/* <input
        type="text"
        placeholder="Search member by name"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className={classes.inputNameFilter}
      /> */}
      <Grid container  className={classes.billsGrid} >
        {/* {(searchResults.length === 0) ? ( */}
          {bills.map((bill, index) => (
            <Grid item xs={6} sm={4} key={index}>
                <Bill bill={bill} />
            </Grid>
          ))}
        {/* ) : (
          searchResults.map((result, index) => (
            <Grid item xs={6} sm={4} key={index}>
              <Member member={result} />
            </Grid>
          ))
        )}  */}
      </Grid>
    </div>
  );
}

export default Bills;