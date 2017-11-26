// @flow
import _ from "lodash"
import Registry from "../src/Lib/Registry"

export function RFModule(moduleConfig) {
    return function(targetClass) {
        targetClass.ModuleName = moduleConfig.ModuleName

        targetClass.register = () => {
            Registry.addModule(moduleConfig)
        }

        return targetClass
    }
}