// @flow
import React from "react"
import { AppModule } from "./src/index"
import Registrar from "./src/Lib/Registrar"

export default class ReactFramework {
    
    constructor() {
        this.registryIsInitialized = false
        this.registrar = null
    }

    static initialiseRegistry(config) {
        this.registryIsInitialized = true
        this.registry = new Registrar(config).getRegistry()
    }
    
    static createApp() {
        if(!this.registryIsInitialized) {
            throw new Error('Registry is not initialized. Please run `ReactFramework.initialiseRegistry()` before running `ReactFramework.createApp()`')
        }
        const ReactFramework = () => (<AppModule.Component registry={this.registry} />)
        return ReactFramework
    }
}