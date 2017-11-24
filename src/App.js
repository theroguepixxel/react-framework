//@flow
import React                from "react"
import PropTypes            from "prop-types"
import AppProvider          from "./Core/AppProvider"
import AppContainer         from "./Core/AppContainer"
import RegistryProvider     from "./Core/RegistryProvider"

type Props = {
    registrar: Object
}

export default class App extends React.Component<Props> {

    static propTypes = {
        registry: PropTypes.object.isRequired    
    }

    render() {
        return (
            <AppProvider>
                <RegistryProvider registry={this.props.registry}>
                    <AppContainer />    
                </RegistryProvider>
            </AppProvider>
        )
    }
}