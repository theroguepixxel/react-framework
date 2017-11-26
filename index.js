// @flow
import "babel-polyfill"
import React from "react"
import Resolver from "./src/Lib/Resolver"
import Registrar from "./src/Lib/Registrar"
import { RegisterModules } from "./Decorators"
import AppConfig from "./src/Config"

export default class ReactFramework {
    
    _config = {}
    registry = null
    registryIsInitialized = false

    @RegisterModules(
        AppConfig
    )
    static initialiseRegistry(config) {
        this.registryIsInitialized = true
        this._config = config
        this.registry = new Registrar(this._config.modules).createRegistry()
    }
    
    static createApp() {
        if(!this.registryIsInitialized) {
            throw new Error('Registry is not initialized. Please run `ReactFramework.initialiseRegistry()` before running `ReactFramework.createApp()`')
        }
        return Resolver.newApp(this.registry, this._config)
    }
}