import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {

        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '250px',
        maxWidth: '250px',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            minHeight: '210px',
        }, 
        
    },
    button: {
        marginTop: 'auto',
        [theme.breakpoints.up('sm')]: {
            width: '130px',
        }, 
    }

}));