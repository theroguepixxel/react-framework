import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import RoutesContainer from "./RoutesContainer"


export default class AppContainer extends React.Component {
    render() {
        return (
            <Router>
                <RoutesContainer />
            </Router>
        )
    }
}