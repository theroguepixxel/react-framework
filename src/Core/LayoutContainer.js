import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"

export default class LayoutContainer extends React.Component {
    
    static contextTypes = {
        registry: PropTypes.object
    }

    render() {

        let { App } = this.context.registry.getDetails()
        
        let AppLayout = _.map(App.ComponentRegistry.layouts,(Layout, index) => {
            return (<Layout key={index} />)
        })

        return (
            <div>
                { AppLayout }
            </div>
        )
    }
}