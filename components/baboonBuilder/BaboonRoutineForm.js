import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { postFetch } from "../ApiManager"


export const BaboonBuilderForm = () => {
    const [baboonRoutine, setBaboonRoutine] = useState({
        userId: 0, 
        didExercise: false,
        didMeditate: false,
        date: 0
    });
    const history = useHistory()

    const submitRoutine = (event) => {
        event.preventDefault()
        const newBaboonRoutine = {
            //userId: parseInt(localStorage.getItem("baboon_user")),
            didExercise: baboonRoutine.didExercise,
            didMeditate: baboonRoutine.didMeditate,
            date: new Date().toLocaleDateString()
        }

        postFetch("http://localhost:8088/baboonRoutines", newBaboonRoutine)
            .then(() => {
                history.push("/baboonRoutineEntries")
            })
    }
    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Baboon Routine Form</h2>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Did you exercise at least 45 min today?</label>
                    <input type="checkbox"
                        onChange={
                            (event) => {
                                const copy = {...baboonRoutine}
                                copy.didExercise = event.target.checked
                                setBaboonRoutine(copy)
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
                                const copy = {...baboonRoutine}
                                copy.didMeditate = event.target.checked
                                setBaboonRoutine(copy)
                            }
                        }
                         />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitRoutine}>
                Submit Routine
            </button>
        </form>
    )

}