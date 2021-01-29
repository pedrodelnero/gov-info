import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Avatar, Button, Grid } from '@material-ui/core/';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { getCommittees } from '../../api/committeesAPI';
import useDetectOutsideClick from '../../utils/detectOutsideClick'
import Committee from './Committee/Committee';
import useStyles from './styles.js';
import { usHouseSeal, usSenateSeal} from '../../images';


const allCongressNum = [110, 111, 112, 113, 114, 115, 116];

const Committees = () => {
  const classes = useStyles();
  const { chamber } = useParams();
  const [congressNum, setCongressNum] = useState(116);
  const [committees, setCommittees] = useState([]);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const handleCongress = (congress) => {
    setCongressNum(congress);
    onClick()
  }


  useEffect(() => {
      (async function loadCommittees() {
          const data = await getCommittees(congressNum, chamber);
          console.log(data)
          if (congressNum && chamber) setCommittees(data[0].committees);

      })();

  }, [congressNum, chamber])


  return (
    <div>
      <div style={{ width: '250px'}}>
        <Button
          onClick={onClick}
          endIcon={(isActive ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
          className={classes.trigger}
        >
          Choose congress... ({congressNum})
        </Button>
      </div>
      <div ref={dropdownRef} className={(isActive ? classes.menuActive : classes.menuInactive)}>
        {allCongressNum.map((congress, index) => (
            <Button key={index} onClick={() => handleCongress(congress)}>{congress}</Button>
        ))}
      </div>
      {(chamber === 'senate') && (
        <div className={classes.pageHeader} >
          <div className={classes.pageHeaderButtons} >
            <Button startIcon={<Avatar src={usHouseSeal} />} component={Link} to='/committees/house'className={classes.pageHeaderButton} >
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
            <Button startIcon={<Avatar src={usSenateSeal} />} component={Link} to='/committees/senate' className={classes.pageHeaderButton}>
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
            <Button startIcon={<Avatar src={usSenateSeal} />} component={Link} to='/committees/senate' className={classes.pageHeaderButton}>
              See Senate Committees
            </Button>
            <Button startIcon={<Avatar src={usHouseSeal} />} component={Link} to='/committees/house' className={classes.pageHeaderButton}>
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
            <Grid item key={index}  className={classes.committeesGridItem} >
                <Committee committee={committee} congress={congressNum} />
            </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Committees;