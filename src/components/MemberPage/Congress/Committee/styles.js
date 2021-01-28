import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        // width: '200%',
        justifyContent: 'space-evenly',
        padding: theme.spacing(2, 0),
        // border: '1px solid green',
        // [theme.breakpoints.down('xs')]: {
        //     justifyContent: 'center',
        // }, 
    },

}));