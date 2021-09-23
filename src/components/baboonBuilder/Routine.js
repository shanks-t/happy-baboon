import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import "./Routine.css"


export const Routine = ({ routine, setCurrRoutine, currRoutine, deleteFunc }) => {
//const [routineChart, setRoutineChart] = useState(0)
const history = useHistory()
const handleClick = (id) => {
    localStorage.setItem("activeRoutine", id)
    setCurrRoutine(id)
}
const showChart = (id) => {
    history.push(`/Routines/${id}`)
    }

const compareRoutines = (id1, id2) => {
    history.push(`/routines/compare`)
}

    return (    
        <div className="routine" key={`routine--${routine.id}`}> 
                <button className="charts" onClick={()=>showChart(routine.id)}>show charts</button>
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
                         <button className="delete-routine" onClick={()=>deleteFunc(routine.id)}>delete</button>
                </div>
                </fieldset>
        </div>   
    )
}
export default Routine