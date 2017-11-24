import { AppModule } from "../index"
import AppConfig from "../Config"
import { RegisterModules } from "../../Decorators"

@RegisterModules({
    AppModule,
    ...AppConfig.modules
})
export default class Registrar {
    
    _registry = {}
    _Modules = {}

    constructor(Modules) {

        this._Modules = _.reduce(Modules, (acc, module) => {
            acc[module.ModuleName] = module.register() 
            return acc
        },{})
       
    }
    
    getRegistry() {
        return this._registry
    }
}