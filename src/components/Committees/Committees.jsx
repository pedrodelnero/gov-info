import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { getCommittees } from '../../api/committeesAPI';
import Committee from './Committee/Committee';
import useStyles from './styles.js';
import usHouseSeal from '../../images/us_house_seal.svg';
import usSenateSeal from '../../images/us_senate_seal.svg';

const Committees = () => {
  const classes = useStyles();
  const { chamber } = useParams();
  const [congressNum, setCongressNum] = useState(116);
  const [committees, setCommittees] = useState([]);

  const allCongressNum = [110, 111, 112, 113, 114, 115, 116];

  useEffect(() => {
      (async function loadCommittees() {
          const data = await getCommittees(congressNum, chamber);
          console.log(data)
          if (congressNum && chamber) setCommittees(data[0].committees);

      })();

  }, [congressNum, chamber])


  return (
    <div>
      <Typography variant='h3'>Choose congress...</Typography>
      <div>
          {allCongressNum.map((congress, index) => (
              <Button key={index} onClick={() => setCongressNum(congress)}>{congress}</Button>
          ))}
      </div>
      {(chamber === 'senate') && (
        <div className={classes.pageHeader} >
          <div className={classes.pageHeaderButtons} >
            <Button
              startIcon={<Avatar src={usHouseSeal} />}
              component={Link}
              to='/committees/house'
              className={classes.pageHeaderButton}
            >
              See House Committees
            </Button>
            <Button
              startIcon={<Avatar src={usHouseSeal} />}
              endIcon={<Avatar src={usSenateSeal} />}
              component={Link}
              to='/committees/joint'
              className={classes.pageHeaderButton}
            >
              See Joint Committees
            </Button>
          </div>
          <img src={usSenateSeal} alt='US Senate Seal' className={classes.pageHeaderImage} />
        </div>
      )}
      {(chamber === 'house') && (
        <div className={classes.pageHeader} >
          <div className={classes.pageHeaderButtons} >
            <Button
              startIcon={<Avatar src={usSenateSeal} />}
              component={Link}
              to='/committees/senate'
              className={classes.pageHeaderButton}
            >
              See Senate Committees
            </Button>
            <Button
              startIcon={<Avatar src={usHouseSeal} />}
              endIcon={<Avatar src={usSenateSeal} />}
              component={Link}
              to='/committees/joint'
              className={classes.pageHeaderButton}
            >
              See Joint Committees
            </Button>
          </div>
          <img src={usHouseSeal} alt='US House of Rep Seal' className={classes.pageHeaderImage} />
        </div>
      )}
      {(chamber === 'joint') && (
        <div className={classes.pageHeaderJoint} >
          <div>
            <Button
              startIcon={<Avatar src={usSenateSeal} />}
              component={Link}
              to='/committees/senate'
              className={classes.pageHeaderButton}
            >
              See Senate Committees
            </Button>
            <Button
              startIcon={<Avatar src={usHouseSeal} />}
              component={Link}
              to='/committees/house'
              className={classes.pageHeaderButton}
            >
              See House Committees
            </Button>
          </div>
          <div className={classes.pageHeaderJointImage} >
            <img src={usHouseSeal} alt='US House of Rep Seal' className={classes.jointImage} />
            <img src={usSenateSeal} alt='US Senate Seal' className={classes.jointImage} />
          </div>
        </div>
      )}

      <Grid container className={classes.committeesGrid} >
        {(committees.length !== 0) && committees.map((committee, index) => (
            <Grid item key={index}>
                <Committee committee={committee} congress={congressNum} />
            </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Committees;