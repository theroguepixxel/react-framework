import React from "react"
import PropTypes from "prop-types"

export default class RegistryProvider extends React.Component {

    static propTypes = {
        registrar: PropTypes.object.isRequired
    }

    getChildContext() {
        return {
            registry: this.props.registrar.getRegistry()
        }
    }

    static childContextTypes = {
        registry: PropTypes.object
    }

    render(){
        console.log("Registry: ",this.props.registrar.getRegistry())
        return React.Children.only(this.props.children)
    }
}