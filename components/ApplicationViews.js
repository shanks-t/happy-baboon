import React from "react"
import { Route } from "react-router-dom"
import { BaboonBuilderForm } from "./baboonBuilder/BaboonRoutineForm"
import { BaboonRoutineEntriesList } from "./baboonBuilder/BaboonRoutineEntriesList"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/baboonRoutineForm">
                <BaboonBuilderForm />
            </Route>
            <Route exact path="/baboonRoutineEntries">
                <BaboonRoutineEntriesList />
            </Route>
            
        </>
    )
}
