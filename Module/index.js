
export function RFModule(moduleConfig) {
    return function(targetClass) {
        let registerConfig = _.omit(moduleConfig, ['Component'])
        let moduleName = moduleConfig.Component.name
        return {
            ModuleName: moduleName,
            Component: moduleConfig.Component,
            register: () => {
                return {
                    [moduleName]:registerConfig
                }   
            }
        } 
    }
}