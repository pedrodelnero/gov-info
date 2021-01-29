import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import NavItems from './NavItems';
import useStyles from './styles.js';


const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState([]);
    const [open, setOpen] = useState([]);

    const handleClick = (index) => event => {
        setAnchorEl({...anchorEl, [index]: event.currentTarget});
        setOpen({...open, [index]: true})
      }

    const handleRequestClose = (index) => () => setOpen({...open, [index]: false});

    return (
        <div className={classes.root}>
            <Typography variant='h2' component={Link} to='/' style={{ textDecoration: 'none' }}>Gov Info</Typography>
            <div className={classes.navButtonGroup} >
                {NavItems.map((item, index) => (
                    <div key={index} onMouseEnter={handleClick(index)} onMouseLeave={handleRequestClose(index)} className={classes.navItem}>
                        {(item.subMenu.length === 0) ? (
                            <Button
                                variant='text'
                                component={Link}
                                to={`/${item.title.toLocaleLowerCase()}`}
                                onClick={handleClick(index)}
                            >
                                {item.title
                            }</Button>
                        ) : (
                            <div>
                                <Button variant='text' onClick={handleClick(index)} endIcon={<ExpandMoreIcon />} >{item.title}</Button>
                                <Popper
                                    id={index}
                                    open={open[index] || false}
                                    anchorEl={anchorEl[index] || null}
                                    className={classes.popper}
                                    >
                                    <Paper elevation={3} className={classes.subMenu} >
                                        {item.subMenu.map((subItem, subIndex) => {
                                            const selected = subItem.title.split(' ')[0].toLocaleLowerCase();
                                            return (
                                                <Button
                                                    key={subIndex}
                                                    component={Link}
                                                    to={`/${item.title.toLocaleLowerCase()}/${selected}`}   
                                                    onClick={handleRequestClose(index)}
                                                >
                                                    {subItem.title}
                                                </Button>
                                            )
                                        })}
                                    </Paper>
                                </Popper>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header;