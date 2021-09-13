import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { postFetch } from "../ApiManager"
import "./BaboonRoutineForm.css"

export const BaboonRoutineForm = () => {
    const [routineData, setRoutineData] = useState({
        userId: 0, 
        didExercise: false,
        didMeditate: false,
        date: "",
        anxietyLevel: 0
    });
    const history = useHistory()

    const submitRoutine = (event) => {
        event.preventDefault()
        const newRoutineData = {
            //userId: parseInt(localStorage.getItem("baboon_user")),
            didExercise: routineData.didExercise,
            didMeditate: routineData.didMeditate,
            date: new Date().toLocaleDateString(),
            anxietyLevel: routineData.anxietyLevel
        }

        postFetch("http://localhost:8088/baboonRoutineEntries", newRoutineData)
            .then(() => {
                history.push("/baboonRoutineEntries")
            })
    }
    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">Enter data for {new Date().toLocaleDateString()}</h2>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Did you exercise at least 45 min today?</label>
                    <input type="checkbox"
                        onChange={
                            (event) => {
                                const copy = {...routineData}
                                copy.didExercise = event.target.checked
                                setRoutineData(copy)
                            }
                        }
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Did you mediate at least 20 min today?</label>
                    <input type="checkbox"
                        onChange={
                            (event) => {
                                const copy = {...routineData}
                                copy.didMeditate = event.target.checked
                                setRoutineData(copy)
                            }
                        }
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Anxiety Level from 0.0 to 10.0:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...routineData}
                                copy.anxietyLevel = event.target.value
                                setRoutineData(copy)
                            }
                        }
                        required autoFocus
                        type="number"
                        min="0.1"
                        max="10"
                        step=".1"
                        className="anxiety"
                        placeholder="Anxiety Level"
                         />
                </div>
            </fieldset>
            
            <button className="btn btn-primary" onClick={submitRoutine}>
                Submit Data
            </button>
        </form>
    )

}