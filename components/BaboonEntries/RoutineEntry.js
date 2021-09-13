import React, { useState } from "react"
//import { Link, useParams } from "react-router-dom"
//import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import "./BaboonRoutineEntries.css"


export default ({ entry }) => {
// const { entryId } = useParams()
//const { getCurrentUser } = useSimpleAuth()


    return (    
        <div className="entry" key={`entry--${entry.id}`}> 
                {entry.date}
                <ul>
                {
                    entry.didExercise === true
                    
                    ? <li>✅ I exercised at least 45 minutes today</li>
                    : <li>❌ I did not exercise at least 45 minutes today</li>
                }
                {
                    entry.didMeditate === true
                    ? <li>✅ I meditated at least 20 minutes today</li>
                    : <li>❌ I did not meditated at least 20 minutes today</li>
                }
                {
                   <p>Anxiety Level: {entry.anxietyLevel}</p>
                }
                </ul>
        </div>   
    )
}
