import React, { useState, useEffect  } from "react"
import { useHistory } from "react-router-dom"
import { postFetch, getFetch } from "../ApiManager"
import "./BaboonRoutineData.css"


export const BaboonRoutineData = () => {
    const [routines, setRoutines] = useState({})
    const [routineData, setRoutineData] = useState({
        userId: 0,
        baboonRoutineId:0,
        didRoutine1: false,
        didRoutine2: false,
        didRoutine3: false,
        anxietyLevel: false,
        date: "",
    });
    const history = useHistory()

    const getBuilderForm = () => {
        return getFetch("http://localhost:8088/baboonRoutines")
        .then(d => setRoutines(d))
    }

    useEffect(
        () => {
            getBuilderForm()
            
        },
        []
    )

    const submitRoutine = (event) => {
        event.preventDefault()
        const newRoutineData = {
            userId: parseInt(localStorage.getItem("baboon_user")),
            baboonRoutineId: routines[0]?.id,
            didRoutine1: routineData.didRoutine1,
            didRoutine2: routineData.didRoutine2,
            didRoutine3: routineData.didRoutine3,
            anxietyLevel: routineData.anxietyLevel,
            date: new Date().toLocaleDateString(),
        }

        postFetch("http://localhost:8088/baboonRoutineEntries", newRoutineData)
            .then(() => {
                history.push("/RoutineEntries")
            })
    }
    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">Enter data for {new Date().toLocaleDateString()}</h2>
            <div className="card">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">{routines[0]?.routine1}</label>
                    <input type="checkbox"
                        onChange={
                            (event) => {
                                const copy = {...routineData}
                                copy.didRoutine1 = event.target.checked
                                setRoutineData(copy)
                            }
                        }
                         />
                </div>
            </fieldset>
    
                <fieldset>
                    <div className="data-items">
                        <label htmlFor="name">{routines[0]?.routine2}</label>
                        <input type="checkbox"
                            onChange={
                                (event) => {
                                    const copy = {...routineData}
                                    copy.didRoutine2 = event.target.checked
                                    setRoutineData(copy)
                                }
                            }
                            />
                    </div>
                    </fieldset>
                    <fieldset>
                    <div className="data-items">
                        <label htmlFor="name">{routines[0]?.routine3}</label>
                        <input type="checkbox"
                            onChange={
                                (event) => {
                                    const copy = {...routineData}
                                    copy.didRoutine3 = event.target.checked
                                    setRoutineData(copy)
                                }
                            }
                            />
                    </div>
                    </fieldset>
                <fieldset>
                    <div className="data-items">
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
            </div>
        </form>
            
    )

}