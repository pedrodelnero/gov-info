import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

import { getCommittees } from '../../api/committeesAPI';
import useDetectOutsideClick from '../../utils/detectOutsideClick'
import Committee from './Committee/Committee';
import './committees.css';
import { usHouseSeal, usSenateSeal} from '../../images';


const allCongressNum = [110, 111, 112, 113, 114, 115, 116];

const Committees = () => {
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
          if (congressNum && chamber) setCommittees(data[0].committees);

      })();
      
  }, [congressNum, chamber])


  return (
    <div className='committees-root' >
      <div className='committees-header' >
        <div ref={dropdownRef} className='dropdown-menu' >
          <div className='dropdown-menu-trigger' >
            <button onClick={onClick} >
              <p>Choose congress... ({congressNum})</p>
              {(isActive ? <MdExpandLess /> : <MdExpandMore/>)}
            </button>
          </div>
          <div className={'menu ' + (isActive ? 'menu-active' : 'menu-inactive') }>
            {allCongressNum.map((congress, index) => (
              <button key={index} onClick={() => handleCongress(congress)} className='dropdown-menu-option' >{congress}</button> 
            ))}
          </div>
        </div>
        {(chamber === 'senate') && (
          <div className='committees-header-buttons' >
            <div className='committees-header-button' >
              <Link to='/committees/house' >
                  <img src={usHouseSeal} alt='US Senate Seal' />
                  <p>See House Committees</p>
              </Link>
            </div>
            <div className='committees-header-button' >
              <Link to='/committees/joint' >
                  <img src={usHouseSeal} alt='US Senate Seal' />
                  <p>See Joint Committees</p>
                  <img src={usSenateSeal} alt='US Senate Seal' />
              </Link>
            </div>
            <img src={usSenateSeal} alt='US Senate Seal' className='committees-header-image' />
          </div>
        )}
        {(chamber === 'house') && (
          <div className='committees-header-buttons' >
            <div className='committees-header-button' >
              <Link to='/committees/senate' >
                  <img src={usSenateSeal} alt='US Senate Seal' />
                  <p>See Senate Committees</p>
              </Link>
            </div>
            <div className='committees-header-button' >
              <Link to='/committees/joint' >
                  <img src={usHouseSeal} alt='US Senate Seal' />
                  <p>See Joint Committees</p>
                  <img src={usSenateSeal} alt='US Senate Seal' />
              </Link>
            </div>
            <img src={usHouseSeal} alt='US House of Rep Seal' className='committees-header-image' />
          </div>
        )}
        {(chamber === 'joint') && (
          <div className='committees-header-joint' >
            <div className='committees-header-joint-button-group' >
              <div className='committees-header-button' >
                <Link to='/committees/senate' >
                    <img src={usSenateSeal} alt='US Senate Seal' />
                    <p>See Senate Committees</p>
                </Link>
              </div>
              <div className='committees-header-button' >
                <Link to='/committees/house' >
                    <img src={usHouseSeal} alt='US Senate Seal' />
                    <p>See House Committees</p>
                </Link>
              </div>
            </div>
            <div className='committees-header-image-joint' >
              <img src={usHouseSeal} alt='US House of Rep Seal' />
              <img src={usSenateSeal} alt='US Senate Seal' />
            </div>
          </div>
        )}
      </div>
      <div className='committees-grid' >
        {(committees.length !== 0) && committees.map((committee, index) => (
          <Committee key={index} committee={committee} congress={congressNum} />
        ))}
      </div>
    </div>
  );
}

export default Committees;