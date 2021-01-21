import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Header = () => {
    return (
        <div>
            <h1>Gov Info</h1>
            <div>
                <Button component={Link} to='/'>Home page</Button>
                <Button onClick={() => console.log('bills')}>Bills</Button>
                <Button component={Link} to='/members'>Members</Button>
            </div>
        </div>
    )
}

export default Header;
