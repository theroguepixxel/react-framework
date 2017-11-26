import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route } from "react-router-dom"
import _ from "lodash"
import RoutesContainer from "./RoutesContainer"

export default class AppContainer extends React.Component {

    static propTypes = {
        root: PropTypes.string.isRequired
    }

    static contextTypes = {
        registry: PropTypes.func
    }

    componentWillMount() {
        let Module = this.context.registry.getModule(this.props.root)
        this.RootLayout = Module.ComponentRegistry.RootLayout
    }

    render() {
        return (
            <Router>
                <Route path="/" component={this.RootLayout}  />
            </Router>
        )
    }
}