import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog'>Blog</NavLink>
                    </li>
                        <li>
                            <NavLink to='/settings'>Settings</NavLink>
                        </li>
                    
                </ul>
            </nav>

            <hr />
            <Outlet />
        </div>
    )
}

export default Layout