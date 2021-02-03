import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getAllMembers } from '../../api/membersAPI';
import Member from './Member/Member';
import './members.css'
import usHouseSeal from '../../images/us_house_seal.svg';
import usSenateSeal from '../../images/us_senate_seal.svg';


const Members = () => {
  const { chamber } = useParams();
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    (async function loadMembers () {
      const data = await getAllMembers(117, chamber);
      setMembers(data.members);
    })();

  }, [chamber]);

  useEffect(() => {
    const results = members.filter(member => {
      const fullName = `${member.first_name} ${member.last_name}`;
      return fullName.toLocaleLowerCase().includes(searchTerm)
    });

    setSearchResults(results);  
  }, [searchTerm]);

  return (
    <div className='members-root' >
      {(chamber === 'senate') ? (
        <div className='page-header' >
          <div className='page-header-button' >
            <Link to='/members/house' >
                <p>See House of Rep Members</p>
                <img src={usHouseSeal} alt='US Senate Seal' />
            </Link>
          </div>
          <img src={usSenateSeal} alt='US Senate Seal' className='page-header-image' />
        </div>

      ) : (
        <div className='page-header' >
          <div className='page-header-button' >
            <Link to='/members/senate' >
                <p>See Senate Members</p>
                <img src={usSenateSeal} alt='US Senate Seal' />
            </Link>
          </div>
          <img src={usHouseSeal} alt='US House of Rep Seal' className='page-header-image' />
        </div>
      )}
      <div className='input-name-filter' >
        <input
          type="text"
          placeholder="Search member by name"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <div className='members-grid' >
        {(searchResults.length === 0) ? (
          members.map((member) => (
            <Member key={member.id} member={member} />
          )) 
        ) : (
          searchResults.map((result, index) => (
            <Member key={index} member={result} />
          ))
        )} 
      </div>
    </div>
  );
}

export default Members;