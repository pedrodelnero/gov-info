import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { Avatar, Button, Grid } from '@material-ui/core/';

import { getCommittees } from '../../api/committeesAPI';
import useDetectOutsideClick from '../../utils/detectOutsideClick'
import Committee from './Committee/Committee';
import useStyles from './styles.js';
import './committees.css';
import { usHouseSeal, usSenateSeal} from '../../images';


const allCongressNum = [110, 111, 112, 113, 114, 115, 116];

const Committees = () => {
  const classes = useStyles();
  const { chamber } = useParams();
  const [congressNum, setCongressNum] = useState(116);
  const [committees, setCommittees] = useState([]);
  const dropdownRef = useRef(null);
  console.log('1')
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  console.log('comm', isActive)

  const handleCongress = (congress) => {
    setCongressNum(congress);
    onClick()
  }

  useEffect(() => {
      (async function loadCommittees() {
          const data = await getCommittees(congressNum, chamber);
          // console.log(data)
          if (congressNum && chamber) setCommittees(data[0].committees);

      })();
      

      console.log('load')

  }, [congressNum, chamber])


  return (
    <div className='committees-root' >
      <div className='page-header' >
        <div ref={dropdownRef} className='dropdown-menu' >
          <div className='dropdown-menu-trigger' >
            <button onClick={onClick} >
              <p>Choose congress... ({congressNum})</p>
              {(isActive ? <MdExpandLess /> : <MdExpandMore/>)}
            </button>
          </div>
          <div className={`${classes.menu} ${(isActive ? classes.menuActive : classes.menuInactive)}`}>
            {allCongressNum.map((congress, index) => <Button key={index} onClick={() => handleCongress(congress)}>{congress}</Button> )}
          </div>
        </div>
        {(chamber === 'senate') && (
          <div className='page-header-buttons' >
            <div className='page-header-button' >
              <Link to='/committees/house' >
                  <img src={usHouseSeal} alt='US Senate Seal' />
                  <p>See House Committees</p>
              </Link>
            </div>
            <div className='page-header-button' >
              <Link to='/committees/joint' >
                  <img src={usHouseSeal} alt='US Senate Seal' />
                  <p>See Joint Committees</p>
                  <img src={usSenateSeal} alt='US Senate Seal' />
              </Link>
            </div>
            <img src={usSenateSeal} alt='US Senate Seal' className='page-header-image' />
          </div>
        )}
        {(chamber === 'house') && (
          <div className='page-header-buttons' >
            <div className='page-header-button' >
              <Link to='/committees/senate' >
                  <img src={usSenateSeal} alt='US Senate Seal' />
                  <p>See Senate Committees</p>
              </Link>
            </div>
            <div className='page-header-button' >
              <Link to='/committees/joint' >
                  <img src={usHouseSeal} alt='US Senate Seal' />
                  <p>See Joint Committees</p>
                  <img src={usSenateSeal} alt='US Senate Seal' />
              </Link>
            </div>
            <img src={usHouseSeal} alt='US House of Rep Seal' className='page-header-image' />
          </div>
        )}
        {(chamber === 'joint') && (
          <div className='page-header-buttons' >
            <div className='page-header-button' >
              <Link to='/committees/senate' >
                  <img src={usSenateSeal} alt='US Senate Seal' />
                  <p>See Senate Committees</p>
              </Link>
            </div>
            <div className='page-header-button' >
              <Link to='/committees/house' >
                  <img src={usHouseSeal} alt='US Senate Seal' />
                  <p>See House Committees</p>
              </Link>
            </div>
            <img src={usHouseSeal} alt='US House of Rep Seal' className='page-header-image' />
          </div>
        )}

      </div>

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