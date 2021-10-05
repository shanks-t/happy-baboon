//import React from "react"
import React from "react"
import { Link } from "react-router-dom" 
import "./NavBar.css"

export const NavBar = ({ img }) => {
 console.log(img)
    return (
        <nav className="navbar">
                <div className="logo-holder">
                </div>
                <li className="navbar__img">
                <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5198716.jpg" alt="logo" width="100" height="150"/>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/RoutineForm">Current Routine</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/RoutineEntries">Routine Entries</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/RoutineBuilder">Routine Builder</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/Routines">Routines</Link>
                </li>

                <li className="navbar__item active">
                    <Link className="navbar__link" to="#"
                    onClick={ 
                        ()=> {
                            localStorage.removeItem("baboon_user")
                            localStorage.removeItem("activeRoutine")
                        }
                        }>
                        
                        Logout
                    </Link>
                </li>
        </nav>

    )
}
