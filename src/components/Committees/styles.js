import { makeStyles } from '@material-ui/core/styles';
// import zIndex from '@material-ui/core/styles/zIndex';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '100%',   
    },
    trigger: {
        width: '100%',
        '&:hover': {
            boxShadow: '0 1px 8px rgba(0, 0, 0, 0.3);'
        }
    },
    menuActive: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: '8px',
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
        zIndex: 1,
        "& .MuiButtonBase-root": {
            borderBottom: '1px solid grey'
        }
    },
    menuInactive: {
        display: 'none'

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
        maxHeight: '55px',
        justifyContent: 'flex-start'
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
        justifyContent: 'center',
    },
    committeesGridItem: {
        [theme.breakpoints.down('xs')]: {
            width: '100%'   
        }, 
    },
}));