import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {

        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '250px',
        width: '250px',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(0.5, 0),
            minWidth: '100%',
        }, 
        
    },
    button: {
        marginTop: 'auto',
        [theme.breakpoints.up('sm')]: {
            width: '130px',
        }, 
    }

}));