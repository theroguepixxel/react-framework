import React from "react"
import { Layout } from "../../../Decorators"

@Layout({
    sections: [
        "main"
    ]
})
export default class EmptyLayout extends React.Component {
    render() {
        return (
            <div>
                { this.props.sections.main }
            </div>
        )
    }
}