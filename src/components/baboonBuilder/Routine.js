import React, { useState, useEffect } from "react"
import "./Routine.css"


export const Routine = ({ routine, setCurrRoutine, currRoutine }) => {


const handleClick = (id) => {
    localStorage.setItem("activeRoutine", id)
    setCurrRoutine(id)
}


    return (    
        <div className="routine" key={`routine--${routine.id}`}> 
                <p>Routine #{routine?.id}</p>
                <ul>
                    <li>1. {routine.routine1}</li>
                    <li>2. {routine.routine2}</li>
                    <li>3. {routine.routine3}</li>
                </ul>
                <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Activate Routine {routine.id}</label>
                    <input type="checkbox"
                        checked={routine.id === currRoutine ? true : false}
                        onChange={
                            (event) => {
                                handleClick(routine.id)
                            }
                        }
                         />
                </div>
                </fieldset>
        </div>   
    )
}
export default Routine