import React from "react"
import { Route } from "react-router-dom"
import { BaboonBuilderForm } from "./baboonBuilder/BaboonBuilderForm"
import { BaboonRoutineEntriesList } from "./baboonEntries/BaboonRoutineEntriesList"
import { BaboonRoutineData } from "./baboonBuilder/BaboonRoutineData"
import { BaboonRoutineList } from "./baboonBuilder/BaboonRoutineList"
import { Chart } from "./charts/Chart"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/RoutineBuilder">
                <BaboonBuilderForm />
            </Route>
            <Route exact path="/Routines">
                <BaboonRoutineList />
            </Route>
            <Route exact path="/RoutineEntries">
                <BaboonRoutineEntriesList />
            </Route>
            <Route exact path="/RoutineForm">
                <BaboonRoutineData />
            </Route>
            
            <Route exact path="/charts">
                <Chart />
            </Route>
            
        </>
    )
}
