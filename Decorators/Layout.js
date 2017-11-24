import React from "react"

export default function(config) {
    return function(Target) {
        return class Layout extends React.Component {

            constructor(props) {
                super(props)

                this.sections = _.reduce(config.sections,(acc, sectionname) => {
                    acc[sectionname] = "Hello World"
                    return acc
                },{})
            }
            

            render() {
                return (<Target {...this.props} sections={this.sections} />)
            }
        }
    }
}