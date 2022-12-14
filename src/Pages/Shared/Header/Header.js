import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const menuitems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/login'>Login</Link></li>
        {
            user?.email &&
            <>
                <li><Link to='/myreviews'>My Reviews</Link> </li>
                <li><Link to='/addservices'>Add Services</Link> </li>
                <li><Link><button onClick={handleLogOut}> Sign Out</button></Link> </li>
            </>

        }

    </>

    return (
        <div className="navbar h-20 bg-green-100 p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuitems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className='w-10 h-30' src={logo} alt="" />
                    <a className='ml-5' href="/">Rafsan's Kitchen</a>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuitems}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Get started</a>
            </div> */}
        </div>
    );
};

export default Header;