import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        // boxSizing: 'border-box',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(2),
        border: '1px solid red',
    },
    navItem: {
        margin: '0 8px',
        // border: '1px solid green'
    },
    navButtonGroup: {
        display: 'flex',
        justifyItems: 'space-between',
        // padding: '10px',
        border: '2px solid blue',
        // boxSizing: 'border-box',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        }, 
    },
    subMenu: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid red'
    }
}));