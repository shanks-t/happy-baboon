import React, { useState } from "react"
//import { Link, useParams } from "react-router-dom"
//import useSimpleAuth from "../../hooks/ui/useSimpleAuth";

import "./BaboonRoutineEntries.css"


export default ({ entry }) => {
// const { entryId } = useParams()
//const { getCurrentUser } = useSimpleAuth()


    return (    
        <div className="entry" key={`entry--${entry.id}`}> 
                {entry?.date}
                <ul>
                {
                    entry?.didRoutine1 === true
                    
                    ? <li>✅ I did {entry?.baboonRoutine?.routine1}</li>
                    : <li>❌ I did not {entry?.baboonRoutine?.routine1}</li>
                }
                {
                    entry?.didRoutine2 === true
                    ? <li>✅ I did {entry?.baboonRoutine?.routine2}</li>
                    : <li>❌ I did not {entry?.baboonRoutine?.routine2}</li>
                }
                {
                    entry?.didRoutine3 === true
                    ? <li>✅ I did {entry?.baboonRoutine?.routine3}</li>
                    : <li>❌ I did not {entry?.baboonRoutine?.routine3}</li>
                }
                {
                   <p>Anxiety Level: {entry?.anxietyLevel}</p>
                }
                </ul>
        </div>   
    )
}
