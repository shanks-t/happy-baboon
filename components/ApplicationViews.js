import React from "react"
import { Route } from "react-router-dom"
import { BaboonBuilderForm } from "./baboonBuilder/BaboonBuilderForm"
import { BaboonRoutineEntriesList } from "./baboonBuilder/BaboonRoutineEntriesList"
import { BaboonRoutineData } from "./baboonBuilder/BaboonRoutineData"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/RoutineBuilder">
                <BaboonBuilderForm />
            </Route>
            <Route exact path="/RoutineEntries">
                <BaboonRoutineEntriesList />
            </Route>
            <Route exact path="/RoutineForm">
                <BaboonRoutineData />
            </Route>
            
        </>
    )
}
