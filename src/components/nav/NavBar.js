//import React from "react"
import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({ img }) => {
 console.log(img)
    return (
            <ul className="navbar_with_img">
                <li className="navbar__img">
                <img src={img} alt="" with="90px" height="90px" />
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
            </ul>
    )
}
