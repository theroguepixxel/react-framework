import configurator from "./Configurator"

export default class Registrar {
    
    constructor(config) {
        this._config = configurator(config)
        this._registry = {}

        console.log("Config Object: ",this._config)
        
        this._registerComponent()
        this._registerLayouts()
    }
    
    getRegistry() {
        return this._registry
    }

    _registerComponent() {
        this._registry = _.reduce(this._config, (acc, config, key)  => {
            acc[key] = (acc[key] == undefined)? {}:acc[key]

            let ComponentRegistry = {
                layouts: (config.hasOwnProperty('layouts'))? config.layouts: null
            }
            
            acc[key] = {...acc[key],...{ ComponentRegistry }}
            return acc
        },this._registry)
    }

    _registerLayouts() {
        this._registry = _.reduce(this._config, (acc, config, key)  => {

            if(config.hasOwnProperty('layoutConfig')) {
                let layoutContainers = _(config.layoutConfig).keys()
                                        .map((value) => _.split(value,'.') )
                                        .value()
                _.each(layoutContainers, (container) => {
                    let {0: parentComponent,1: layoutName} = container

                    acc[parentComponent].LayoutRegistry = (acc[parentComponent].LayoutRegistry == undefined)? {}:acc[parentComponent].LayoutRegistry
                    
                    let LayoutRegistry  = {
                        [layoutName]: config.layoutConfig[_.join(container,".")]
                    }

                    acc[parentComponent].LayoutRegistry = _.merge(acc[parentComponent].LayoutRegistry, LayoutRegistry)
                })
            }

            return acc
        },this._registry)
    }

}