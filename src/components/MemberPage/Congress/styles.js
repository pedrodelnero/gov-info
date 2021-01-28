import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    accordion: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        // boxSizing: 'border-box',
        justifyContent: 'center',
        // marginBottom: theme.spacing(2),
        
        // border: '1px solid red',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        }, 
    },
    accordionHeader: {
        boxShadow: '0px 1px 1px #DCDCDC'
    },
    carousel: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        width: '100%',
        // justifyContent: 'center',        
        // border: '1px solid blue',
        // [theme.breakpoints.down('xs')]: {
        //     justifyContent: 'center',
        // }, 
    },

}));