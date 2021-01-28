import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    accordion: {
        display: 'flex',
        alignItems: 'center',
        // boxSizing: 'border-box',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
        
        border: '1px solid red',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        }, 
    },

}));