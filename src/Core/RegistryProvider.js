import React from "react"
import PropTypes from "prop-types"

export default class RegistryProvider extends React.Component {

    static propTypes = {
        registry: PropTypes.func
    }

    getChildContext() {
        return {
            registry: this.props.registry
        }
    }

    static childContextTypes = {
        registry: PropTypes.func
    }

    render(){
        console.log("Registry: ",this.props.registry.getDetails())
        return React.Children.only(this.props.children)
    }
}