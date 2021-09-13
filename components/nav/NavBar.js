import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/baboonRoutineForm">Baboon Routine Form</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/baboonRoutineEntries">Baboon Routine Entries</Link>
            </li>
        </ul>
    )
}
