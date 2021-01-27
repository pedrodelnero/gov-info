import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            // Blue
            main: '#3C3B6E'
        },
        secondary: {
            //  Red
            main: '#B22234'
        }
    },
    typography: {
        h1: {
            // fontSize: '5rem',
        }
    },
    spacing: 10,
    props: {
        MuiButtonGroup: {
            // variant: 'text',
            // border: 0
        }
    }
});

export default theme;

