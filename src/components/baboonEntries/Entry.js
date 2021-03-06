import React from "react"
import "./BaboonRoutineEntries.css"


export const Entry = ({ entry, deleteFunc }) => {
// const { entryId } = useParams()
//const { getCurrentUser } = useSimpleAuth()


    return (
        <div className="entry" key={`entry--${entry.id}`}> 
                <div className="date">{entry?.date}</div>
                <div className="hide">{entry?.journal}</div>
                <ul>
                {
                    entry?.didRoutine1 === true
                    
                    ? <li>✅  {entry?.routines?.routine1}</li>
                    : <li>❌  {entry?.routines?.routine1}</li>
                }
                {
                    entry?.didRoutine2 === true
                    ? <li>✅  {entry?.routines?.routine2}</li>
                    : <li>❌  {entry?.routines?.routine2}</li>
                }
                {
                    entry?.didRoutine3 === true
                    ? <li>✅  {entry?.routines?.routine3}</li>
                    : <li>❌  {entry?.routines?.routine3}</li>
                }
                {
                   <p>Anxiety Level: {entry?.anxietyLevel}</p>
                }
                </ul>
                <button className="delete" onClick={()=>deleteFunc(entry.id)}>Delete Entry</button>
        </div>   
    )
}
export default Entry