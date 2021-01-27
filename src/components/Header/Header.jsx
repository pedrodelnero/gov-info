import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles.js';

const NavItems = [
    {
        title: 'Members',
        subMenu: [
            {
                title: "Senate"
            },
            {
                title: "House of Rep"
            }
        ]
    },
    {
        title: 'Committees',
        subMenu: [
            {
                title: "Senate Committees"
            },
            {
                title: "House Committees"
            }
        ]
    },
]

const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState([]);
    const [open, setOpen] = useState([]);

    const handleClick = (index) => event => {
        setAnchorEl({...anchorEl, [index]: event.currentTarget});
        setOpen({...open, [index]: true})
      }

    const handleRequestClose = (index) => event => {
        // event.preventDefault()
        // console.log('click', index)
        setOpen({...open, [index]: false})
      }

    return (
        <div className={classes.root}>
            <Typography variant='h2' >Gov Info</Typography>
            <div className={classes.navButtonGroup} >
                {NavItems.map((item, index) => (
                    <div key={index} onMouseEnter={handleClick(index)} onMouseLeave={handleRequestClose(index)} className={classes.navItem}>
                        <Button onClick={handleClick(index)} variant='text' endIcon={<ExpandMoreIcon />} >{item.title}</Button>
                        <Popper
                            id={index}
                            open={open[index] || false}
                            anchorEl={anchorEl[index] || null}
                            className={classes.subMenu}
                            >
                            <Paper elevation={3} style={{ display: 'flex', flexDirection: 'column' }}>
                                {item.subMenu.map((subItem, subIndex) => {
                                    const selected = subItem.title.split(' ')[0].toLocaleLowerCase();
                                    // console.log(selected)
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
                ))}
                {/* <div 
                    onMouseEnter={handleClick('members')}
                    onMouseLeave={handleRequestClose} 
                    style={{ border: '1px solid green', padding: '10px 0'}}
                >
                    <Button variant='contained' >Members</Button>
                    <Popper
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        className={classes.subMenu}
                    >
                        <Button onClick={handleRequestClose}>Senate</Button>
                        <Button onClick={handleRequestClose}>House of Rep</Button>
                    </Popper>
                </div> */}
                {/* <div component={Button} onMouseLeave={handleRequestClose} style={{ border: '1px solid green'}}>
                    <Button onMouseEnter={handleClick('committees')} variant='contained' >Committees</Button>
                    <Popper
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        className={classes.subMenu}
                    >
                        <Button onClick={handleRequestClose}>Senate Committees</Button>
                        <Button onClick={handleRequestClose}>House Committees</Button>
                    </Popper>
                </div> */}
            </div>
        </div>
    )
}

export default Header;
