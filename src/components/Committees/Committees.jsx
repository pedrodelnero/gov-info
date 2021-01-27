import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { getCommittees } from '../../api/committeesAPI';
import Committee from './Committee/Committee';

const Committees = () => {
    const [congressNum, setCongressNum] = useState(116);
    const [chamber, setChamber] = useState('');
    const [committees, setCommittees] = useState([]);

    const allCongressNum = [110, 111, 112, 113, 114, 115, 116];

    useEffect(() => {
        (async function loadCommittees() {
            const data = await getCommittees(congressNum, chamber);
            console.log(data)
            if (congressNum && chamber) setCommittees(data[0].committees);
            // if (congressNum && chamber) {
            //     setCommittees(data[0].committees)
            // }
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
      <Typography variant='h3'>Choose house...</Typography>
      <div>
          <Button onClick={() => setChamber('senate')}>Senate</Button>
          <Button onClick={() => setChamber('house')}>House of Rep</Button>
          <Button onClick={() => setChamber('joint')}>Joint</Button>
      </div>
      <Grid container spacing={2}>
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