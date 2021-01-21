import React from 'react';
import Typography from '@material-ui/core/Typography';
// import CircularProgress from '@material-ui/core/CircularProgress';


const MemberExpenses = ({ expenses: { category, amount } }) => {
    
    // if (!selectedCongress) return <CircularProgress />

  return (
    <div>
      <Typography variant='h5'>{category}</Typography>
      <Typography variant='body1'>Amount: {amount}</Typography>
    </div>
  );
}

export default MemberExpenses;