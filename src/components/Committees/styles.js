import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '100%',   
    },
    pageHeader: {
        display: 'flex',
        justifyContent: 'flex-start',
        minHeight: '330px',
        marginBottom: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            minHeight: '300px',
        },
    },
    pageHeaderButtons: {
        display: 'flex',
        flexDirection: 'column'
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
    pageHeaderJoint: {
        display: 'flex',
        flexDirection: 'column',
        // border: '1px solid blue',
        alignItems: 'center',
        minHeight: '330px',
        marginBottom: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            minHeight: '300px',
        },
    },
    pageHeaderJointImage: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: theme.spacing(0.5)
    },
    jointImage: {
        width: '300px',
        height: '300px',
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            width: '150px',
            height: '150px',    
        }, 
    },
    // inputNameFilter: {
    //     borderRadius: '5px',
    //     marginBottom: '15px',
    //     height: '30px',
    //     width: '200px'
    // },
    committeesGrid: {
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'center'
    }
}));