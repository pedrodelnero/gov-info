import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import CircularProgress from '@material-ui/core/CircularProgress';

import Committee from './Committee/Committee';
import Subcommittee from './Subcommittee/Subcommittee';


const Congress = ({ congress: { chamber, total_votes, missed_votes, committees, subcommittees } }) => {
    
    // if (!selectedCongress) return <CircularProgress />

  return (
    <div>
      <Typography variant='h5'>{chamber}</Typography>
      <Typography variant='body1'>Total votes: {total_votes}</Typography>
      <Typography variant='body1'>Missed votes: {missed_votes}</Typography>
      <Typography variant='h4'>Committees</Typography>
      {(committees.length === 0) ? (
          <Typography variant='h5'>No committees</Typography>
      ) : (
        <Grid container spacing={2}>
            {committees.map((committee, index) => (
                <Grid item key={index}>
                    <Committee committee={committee} />
                </Grid>
            ))}
        </Grid>
      )}
      <Typography variant='h4'>Subcommittees</Typography>
      {(committees.length === 0) ? (
          <Typography variant='h5'>No subcommittees</Typography>
      ) : (
        <Grid container spacing={2}>
            {subcommittees.map((subcommittee, index) => (
                <Grid item key={index}>
                    <Subcommittee subcommittee={subcommittee} />
                </Grid>
            ))}
        </Grid>
      )}
    </div>
  );
}

export default Congress;