import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { getAllMembers } from '../../api/api';
import Member from './Member/Member';

const Members = () => {
    const [members, setMembers] = useState([])

    const loadMembers = async (group) => {
        const data = await getAllMembers(117, group);
        setMembers(data.members)
    }


  return (
    <div>
      <h1>Choose house of congress...</h1>
      <div>
          <Button onClick={() => loadMembers('senate')}>Senate</Button>
          <Button onClick={() => loadMembers('house')}>House of Rep</Button>
      </div>
      <Grid container spacing={2}>
        {members.map((member, index) => (
            <Grid item key={index}>
                <Member member={member} />
            </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Members;