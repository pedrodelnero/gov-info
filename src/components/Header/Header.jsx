import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdExpandMore } from 'react-icons/md';

import NavItems from './NavItems';
import './header.css'


const Header = () => {
    const [anchorEl, setAnchorEl] = useState([]);
    const [open, setOpen] = useState([]);

    const handleClick = (index) => event => {
        setAnchorEl({...anchorEl, [index]: event.currentTarget});
        setOpen({...open, [index]: true})
      }

    const handleRequestClose = (index) => () => setOpen({...open, [index]: false});

    return (
        <div className='header-root'>
            <h2 className='header-title' ><NavLink to='/' >Gov Info</NavLink></h2>
            <div className='nav-group' >
                {NavItems.map((item, index) => (
                    <div key={index} onMouseEnter={handleClick(index)} onMouseLeave={handleRequestClose(index)} className='nav-item' >
                        {(item.subMenu.length === 0) ? (
                            <div className='nav-link' >
                                <NavLink to={`/${item.title.toLocaleLowerCase()}`} >
                                    {item.title}                                    
                                </NavLink>

                            </div>
                        ) : (
                            <button onClick={handleClick(index)} className='nav-dropdown' >
                                {item.title}
                                <MdExpandMore className='button-icon' />
                                {open[index] && (
                                    <div className='sub-menu' >
                                        {item.subMenu.map((subItem, subIndex) => {
                                            const selected = subItem.title.split(' ')[0].toLocaleLowerCase();
                                            return (
                                                <NavLink key={subIndex} to={`/${item.title.toLocaleLowerCase()}/${selected}`} >
                                                    <button onClick={handleRequestClose(index)}>
                                                        {subItem.title}   
                                                    </button>
                                                </NavLink>
                                            )
                                        })}
                                    </div>
                                )}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header;