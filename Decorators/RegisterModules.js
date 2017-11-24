
export default function RegisterModules(Modules) {
    return function(Target) {

        return class extends Target {
            
            constructor(config) {
                super(_.merge(Modules, config.modules))
                
                this._createComponentRegistry()
                // this._createLayoutRegistry()

                console.log("Modules Config: ",this._Modules)
            }

            _createComponentRegistry() {
                this._registry = _.reduce(this._Modules,(registry, module, ModuleName) => {
                    registry[ModuleName] = (registry[ModuleName] == undefined)? {} : registry[ModuleName] 
                    
                    let ComponentRegistry = {
                        layouts: (module.hasOwnProperty('layouts'))? module.layouts: null
                    }

                    registry[ModuleName] = { ...registry[ModuleName], ...{ComponentRegistry}}
                    return registry
                },this._registry)
            }

            _createLayoutRegistry() {
                 this._registry = _.reduce(this._Modules,(registry, module) => {
                    return registry
                },this._registry)
            }
        }
    }
}