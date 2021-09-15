import React, { useState } from "react"

import "./Routine.css"


export default ({ routine }) => {


    return (    
        <div className="routine" key={`routine--${routine.id}`}> 
                <p>Routine #{routine?.id}</p>
                <ul>
                    <li>1. {routine.routine1}</li>
                    <li>2. {routine.routine2}</li>
                    <li>3. {routine.routine3}</li>
                </ul>
        </div>   
    )
}
