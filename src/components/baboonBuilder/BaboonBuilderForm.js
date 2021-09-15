import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { postFetch } from "../ApiManager"
import "./BaboonBuilderForm.css"


export const BaboonBuilderForm = () => {
 const [routine1, setRoutine1] = useState("")
 const [routine2, setRoutine2] = useState("")
 const [routine3, setRoutine3] = useState("")
 const history = useHistory()

const addRoutine = (event) => {
    event.preventDefault()
    const obj = {
        userId: parseInt(localStorage.getItem("baboon_user")),
        routine1: routine1,
        routine2: routine2,
        routine3: routine3
    }

    postFetch("http://localhost:8088/baboonRoutines", obj)
        .then(() => {
            history.push("/Routines")
        })
    }
    return (
       <>    
        <form className="ticketForm">
            <h2 className="ticketForm__title">Add Goals To Create Your own Happy Baboon Routine</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Routine (word routine as a true/false e.g. "meditate 30 minutes a day"):</label>
                    <div>
                    <input
                        value={routine1}
                        onChange={
                            (event) => {
                                setRoutine1(event.target.value)
                            }
                        }
                        type="text"
                        placeholder="enter routine 1 here"
                         />
                    </div>
                    <div>
                    <input
                        value={routine2}
                        onChange={
                            (event) => {
                                setRoutine2(event.target.value)
                            }
                        }
                        type="text"
                        placeholder="enter routine 2 here"
                         />
                    </div>
                    <div>
                    <input
                        value={routine3}
                        onChange={
                            (event) => {
                                setRoutine3(event.target.value)
                            }
                        }
                        type="text"
                        placeholder="enter routine 3 here"
                         />
                    </div>
                </div>
            </fieldset>
        </form>
                {
                    
                            <button onClick={addRoutine}
                            >Submit This Routine</button>
                            
                }
                <div className="form_state">
                    <div>{routine1}</div>
                    <div>{routine2}</div>
                    <div>{routine3}</div>
                </div>
                
                </>   
        )

}