import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import UserOptions from './UserOptions';
import PersonIcon from "@material-ui/icons/Person";
// import Backdrop from "@material-ui/core/Backdrop";
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from 'react-redux';
import logo from "../../../images/logo.png";




const Navbar = () => {
    const { isAuthenticated, user } = useSelector((state) => state.user);


    return (
        <div className='navbar'>
            <div className='navbar_logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='navbar_main'>
                {/* <logo /> */}
                <div className='navbar_Buttons'>
                    <nav>
                        <Link to='/'> Home </Link>
                    </nav>
                    <nav>
                        <Link to='/products'>  Product </Link>

                    </nav>
                    <nav>
                        <Link to='/contact'>  Contact </Link>

                    </nav>
                    <nav>
                        <Link to='/about'>  About </Link>

                    </nav>

                </div>
                <div className='navbar_icons'>
                    <Link to="/login"> <PersonIcon /> </Link>
                    <Link to="/cart"> <ShoppingCartIcon /></Link>
                    <Link to="/search"> <ListAltIcon /> </Link>
                </div>
                <div className='navbar_profile'>
                    {isAuthenticated && <UserOptions user={user} />}
                </div>
            </div>
        </div>

    )
}

export default Navbar