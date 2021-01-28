import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        // boxSizing: 'border-box',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(2),
        
        border: '1px solid red',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        }, 
    },
    navItem: {
        margin: '0 8px',
    },
    navButtonGroup: {
        display: 'flex',
        justifyItems: 'space-between',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        }, 
    },
    popper: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px'
        // border: '1px solid red'
    },
    subMenu: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '150px',
        margin: theme.spacing(0.3),
        borderRadius: '10px'
        // border: '1px solid red'
    }
}));