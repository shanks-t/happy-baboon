import React from "react"
import { Route } from "react-router-dom"
import { BaboonBuilderForm } from "./baboonBuilder/BaboonRoutineForm"
import { BaboonRoutineEntriesList } from "./baboonBuilder/BaboonRoutineEntriesList"
import { BaboonRoutineBuilderForm } from "./baboonBuilder/BaboonRoutineBuilderForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/RoutineForm">
                <BaboonBuilderForm />
            </Route>
            <Route exact path="/RoutineEntries">
                <BaboonRoutineEntriesList />
            </Route>
            <Route exact path="/RoutineBuilder">
                <BaboonRoutineBuilderForm />
            </Route>
            
        </>
    )
}
