import _ from "lodash"
import React from "react"
import PropTypes from "prop-types"
import { Switch } from "react-router-dom"

export default function(config) {
    return function(Target) {
        return class Layout extends React.Component {
            
            static contextTypes = {
                registry: PropTypes.func
            }

            static propTypes = {
                moduleContext: PropTypes.string
            }

            constructor(props) {
                super(props)
            }

            componentWillMount() {
                let Module = this.context.registry.getModule(this.props.moduleContext)

                this.sections = _.reduce(config.sections,(acc, sectionname) => {
                    acc[sectionname] = (Module.LayoutRegistry !== undefined && Module.LayoutRegistry[Target.name] !== undefined)? 
                                            _.map(Module.LayoutRegistry[Target.name][sectionname],(Component, index) => (<Component key={index} />)) : null
                    return acc
                },{})
            }

            render() {
                return (
                    <Switch>
                        <Target {...this.props} sections={this.sections} />
                    </Switch>
                )
            }
        }
    }
}