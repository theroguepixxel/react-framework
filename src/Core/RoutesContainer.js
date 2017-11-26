import React from "react"
import PropTypes from "prop-types"

export default class RoutesContainer extends React.Component {
    
    static propTypes = {
        routes: PropTypes.array
    }

    render() {
        return (
            <div>
                {this.props.routes}
            </div>
        )
    }
}