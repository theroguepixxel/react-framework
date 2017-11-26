import _ from "lodash"

export default function RegisterModules(AppConfig) {
    return function(target, name, descriptor) {
        
        let origFn = descriptor.value
        
        let newFn = function(config) {
            let RootModule = _.merge(AppConfig.RootModule,config.RootModule)
            let args = {
                RootModule: RootModule.ModuleName,
                modules:[RootModule, ...AppConfig.modules,...config.modules]
            }
            
            origFn.call(target, args)
        }
    
        descriptor.value = newFn
        return descriptor
    }
}