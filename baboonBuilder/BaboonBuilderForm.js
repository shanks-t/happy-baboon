import React, { useState } from "react"
//import { useHistory } from "react-router-dom"
import { postFetch } from "../ApiManager"


export const BaboonBuilderForm = () => {
    const [baboonRoutine, setBaboonRoutine] = useState({
        name: "",
        userId: 0, 
        didExercise: true,
        didMeditate: true,
        date: 0
    });
    const history = useHistory()

    const submitRoutine = (event) => {
        event.preventDefault()
        const newBaboonRoutine = {
            name: baboonRoutine.name,
            userId: parseInt(localStorage.getItem("baboon_user")),
            didExercise: baboonRoutine.isManager,
            didMeditate: baboonRoutine.isFullTime,
            date: new Date()
        }

        postFetch("http://localhost:8088/baboonRoutineEntries", newBaboonRoutine)
            .then(() => {
                history.push("/baboonRoutineEntries")
            })
    }
    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Employee Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.name = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="enter name here"
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Location:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.storeId = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="number"
                        max="6"
                        min="1"
                        step="1"
                        className="form-control"
                        placeholder="address of store"
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Manager:</label>
                    <input type="checkbox"
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.manager = event.target.checked
                                updateEmployee(copy)
                            }
                        }
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Full Time:</label>
                    <input type="checkbox"
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.fullTime = event.target.checked
                                updateEmployee(copy)
                            }
                        }
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Hourly Rate:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.hourlyRate = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="number"
                        min="12.00"
                        max="35"
                        step=".50"
                        className="form-control"
                        placeholder="Hourly Wage"
                         />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitEmployee}>
                Submit Employee
            </button>
        </form>
    )

}