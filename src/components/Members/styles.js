import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '100%',
        border: '1px solid green'
        // justifyContent: 'center'
        
    },
    pageHeader: {
        display: 'flex',
        // flexDirection: 'column',
        border: '1px solid blue',
        justifyContent: 'flex-start',
        minHeight: '330px',
        marginBottom: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            minHeight: '300px',
        },
    },
    pageHeaderButton: {
        maxHeight: '55px'
    },
    pageHeaderImage: {
        width: '300px',
        height: '300px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        [theme.breakpoints.down('xs')]: {
            width: '200px',
            height: '200px',    
            position: 'relative',
        }, 
    },
    membersGrid: {
        border: '1px solid red',
        display: 'flex',
        justifyContent: 'center'
    }
}));