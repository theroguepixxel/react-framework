import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"
import { Route as ReactRoute, withRouter } from "react-router-dom"

export default function Route(routeconfig) {
    return function(Target) {
        class RouteContext extends React.Component {
            render () {
                
                let { match } = this.props
                routeconfig.path = match.url + _.trim(routeconfig.path,'/')
                
                return (<ReactRoute key={Target.name} {...routeconfig} render={() =>(<Target {...this.props} />)} />)
            }
        }
        
        return withRouter(RouteContext)
    }
}