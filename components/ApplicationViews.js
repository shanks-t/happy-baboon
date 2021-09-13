import React from "react"
import { Route } from "react-router-dom"
import { BaboonRoutineForm } from "./baboonBuilder/BaboonRoutineForm"
import { BaboonRoutineEntriesList } from "./baboonBuilder/BaboonRoutineEntriesList"
import { BaboonRoutineBuilderForm } from "./baboonBuilder/BaboonRoutineBuilderForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/RoutineForm">
                <BaboonRoutineForm />
            </Route>
            <Route exact path="/RoutineEntries">
                <BaboonRoutineEntriesList />
            </Route>
        </>
    )
}
