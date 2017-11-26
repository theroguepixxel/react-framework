import Registry from "./Registry"

export default class Registrar {
    
    _registeredModules = {}

    constructor(Modules) {
        this._registeredModules = Modules
    }    

    createRegistry() {

        _.each(this._registeredModules,(Module) => {
            Module.register()
        })

        return Registry
    }
}