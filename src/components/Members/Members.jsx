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
  const classes = useStyles()
  const { chamber } = useParams()
  // console.log(params)
    const [members, setMembers] = useState([]);

    useEffect(() => {
      (async function loadMembers (group) {
          const data = await getAllMembers(117, chamber);
          setMembers(data.members)
      })();
      
    }, [chamber])

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
      <Grid container justify='center'  className={classes.membersGrid} >
        {members.map((member, index) => (
            <Grid item xs={6} sm={4} key={index}>
                <Member member={member} />
            </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Members;