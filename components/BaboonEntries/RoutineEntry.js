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
                {
                    entry.didExercise === true
                    ? <p>I exercised at least 45 minutes today</p>
                    : <p>I did not exercise at least 45 minutes today</p>
                }
                {
                    entry.didMeditate === true
                    ? <p>I meditated at least 20 minutes today</p>
                    : <p>I did not meditated at least 20 minutes today</p>
                }
        </div>   
    )
}
