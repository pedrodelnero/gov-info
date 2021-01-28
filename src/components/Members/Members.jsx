import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';

import { getAllMembers } from '../../api/membersAPI';
import Member from './Member/Member';
import useStyles from './styles.js';
import usHouseSeal from '../../images/us_house_seal.svg'
import usSenateSeal from '../../images/us_senate_seal.svg'


const Members = () => {
  const classes = useStyles();
  const { chamber } = useParams();
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    (async function loadMembers (group) {
      const data = await getAllMembers(117, chamber);
      console.log('load')
      setMembers(data.members);
    })();

  }, [chamber]);

  useEffect(() => {
    const results = members.filter(member => {
      const fullName = `${member.first_name} ${member.last_name}`;
      return fullName.toLocaleLowerCase().includes(searchTerm)
    });
    // console.log('update')

    // const timeOutId = setTimeout(() => setSearchResults(results), 500);
    // return () => clearTimeout(timeOutId);

    setSearchResults(results);
    
  }, [searchTerm]);



  return (
    <div className={classes.root} >
      {(chamber === 'senate') ? (
        <div className={classes.pageHeader} >
          <Button
            startIcon={<Avatar src={usHouseSeal} />}
            component={Link}
            to='/members/house'
            className={classes.pageHeaderButton}
          >
            See House of Rep Members
          </Button>
          <img src={usSenateSeal} alt='US Senate Seal' className={classes.pageHeaderImage} />
        </div>

      ) : (
        <div className={classes.pageHeader} >
            <Button
              startIcon={<Avatar src={usSenateSeal} />}
              component={Link}
              to='/members/senate'
              className={classes.pageHeaderButton}
            >
              See Senate Members
            </Button>
          <img src={usHouseSeal} alt='US House of Rep Seal' className={classes.pageHeaderImage} />
        </div>
      )}
      <input
        type="text"
        placeholder="Search member by name"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        style={{ marginBottom: '15px', height: '30px', width: '200px'}}
      />
      <Grid container justify='center'  className={classes.membersGrid} >
        {(searchResults.length === 0) ? (
          members.map((member, index) => (
            <Grid item xs={6} sm={4} key={index}>
                <Member member={member} />
            </Grid>
          )) 
        ) : (
          searchResults.map((result, index) => (
            <Grid item xs={6} sm={4} key={index}>
              <Member member={result} />
            </Grid>
          ))
        )} 
      </Grid>
    </div>
  );
}

export default Members;