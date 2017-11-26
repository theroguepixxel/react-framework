import _ from "lodash"
import React, { Component } from "react"

function setModuleContext(contextmodule) {
    return function(Component) {
        return class ModuleContext extends React.Component {
            render () {
                return (<Component moduleContext={contextmodule} />)
            }
        }
    }
}


export default class Registry {
    
    static _registry = {}
    
    static addModule(Module) {
        this._createRegistry(Module)
    }

    static getDetails() {
        return this._registry
    }

    static getModule(Module) {
        return this._registry[Module]
    }

    static _createRegistry(Module) {
        this._createComponentRegistry(Module)
        this._createLayoutRegistry(Module)
    }

    static _createComponentRegistry(Module) {
        let ComponentRegistry = {}

        if(Module.hasOwnProperty("RootLayout")) {
            ComponentRegistry["RootLayout"] = setModuleContext(Module.ModuleName)(Module.RootLayout)
        }

        this._registry[Module.ModuleName] = {
            ...this._registry[Module.ModuleName],
            ...{ComponentRegistry}
        }
    }

    static _createLayoutRegistry(Module) {
          
        if(Module.hasOwnProperty("layoutComponents")) {
            let layoutKeys = _(Module.layoutComponents).keys()
            .map(layoutKey => _.split(layoutKey,'.'))
            .value()
            
            _.each(layoutKeys, ({ 0: ModuleName, 1: Layout }) => {
                
                let LayoutRegistry = (this._registry[ModuleName].LayoutRegistry == undefined)? {[Layout]:{}}:this._registry[ModuleName].LayoutRegistry

                for (var section in Module.layoutComponents[`${ModuleName}.${Layout}`]) {
                    
                    let contextedComponents = _.map(Module.layoutComponents[`${ModuleName}.${Layout}`][section], (Component) => {
                        return setModuleContext(Module.ModuleName)(Component)
                    })
                    
                    LayoutRegistry[Layout][section] = (LayoutRegistry[Layout][section]||[]).concat(contextedComponents)
                }
                
                this._registry[ModuleName] = {
                    ...this._registry[ModuleName],
                    ...{LayoutRegistry}
                }

            })
        }


    }
}