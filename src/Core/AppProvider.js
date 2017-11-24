import React        from "react"
import { Provider } from "react-redux"
import store        from "../Store"

export default class AppProvider extends React.Component {
    
    render() {
        return (
            <Provider store={store}>
                { this.props.children }
            </Provider>
        )
    }
}