import React, { useState, useEffect  } from "react"
import { useHistory } from "react-router-dom"
import { postFetch } from "../ApiManager"
import "./BaboonRoutineData.css"


export const BaboonRoutineData = () => {
 
    const today = new Date().toLocaleDateString()
    const [ activeRoutine, setActiveRoutine] = useState({})
    const [ dateForEntry, setDateForEntry ] = useState("") 
    const [activeRoutineId, setActiveRoutineId] = useState(0)
    const [routineData, setRoutineData] = useState({
        userId: 0,
        baboonRoutineId:0,
        didRoutine1: false,
        didRoutine2: false,
        didRoutine3: false,
        anxietyLevel: false,
        date: today,
    });
    const history = useHistory()

    const getCurrentRoutine = () => {
        const currRoutineId = localStorage.getItem("activeRoutine")
        return currRoutineId
     }
    useEffect(
        () => {
             const id = getCurrentRoutine()
             setActiveRoutineId(parseInt(id))
    
        },
        []
    )

    useEffect(
        () => {
            if (activeRoutineId) {
                const getBuilderForm = () => {
                    return fetch("http://localhost:8088/routines")
                    .then(res => res.json())
                    .then((data) => {
                        const filtered = data.filter((item) => item.id === activeRoutineId)
                        setActiveRoutine(filtered[0])
                    })
                }
                getBuilderForm()
            }
        },
[activeRoutineId]
    )
  
useEffect(() => {
    console.log("activeRoutine", activeRoutine)
    console.log("activeRoutineId", activeRoutineId)
}, [activeRoutine, activeRoutineId])



    const submitRoutine = (event) => {
        event.preventDefault()
        const newRoutineData = {
            userId: parseInt(localStorage.getItem("baboon_user")),
            routinesId: activeRoutine?.id,
            didRoutine1: routineData.didRoutine1,
            didRoutine2: routineData.didRoutine2,
            didRoutine3: routineData.didRoutine3,
            anxietyLevel: routineData.anxietyLevel,
            date: routineData.date,
        }

        postFetch("http://localhost:8088/routineEntries", newRoutineData)
            .then(() => {
                history.push("/RoutineEntries")
            })
    }
useEffect(() => {
console.log("dateForEntry:", dateForEntry)
}, [])
const notActive = "No Active Routine for"
const active = `Enter Routine ${activeRoutineId} Data for`
    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">{!activeRoutineId>0 ? notActive : active} {dateForEntry ? dateForEntry : today}</h2>
            <div className="container">

            <div className="entry-input">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">{activeRoutine?.routine1}</label>
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
                <div className="form-group">
                    <label htmlFor="name">{activeRoutine?.routine2}</label>
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
                <div className="form-group">
                    <label htmlFor="name">{activeRoutine?.routine3}</label>
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
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Date of entry: </label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...routineData}
                                copy.date = event.target.value
                                setRoutineData(copy)
                                setDateForEntry(event.target.value)
                            }
                        }
                        required autoFocus
                        type="date"
                        className="date"
                        
                         />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitRoutine}>
                Submit Data
            </button>
            </div>
            </div>
            
        </form>
    
    )

}
