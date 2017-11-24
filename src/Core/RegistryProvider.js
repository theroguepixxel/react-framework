import React from "react"
import PropTypes from "prop-types"

export default class RegistryProvider extends React.Component {

    static propTypes = {
        registry: PropTypes.object.isRequired
    }

    getChildContext() {
        return {
            registry: this.props.registry
        }
    }

    static childContextTypes = {
        registry: PropTypes.object
    }

    render(){
        console.log("Registry: ",this.props.registry)
        return React.Children.only(this.props.children)
    }
}