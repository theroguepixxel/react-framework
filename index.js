// @flow
import React from "react"
import { AppModule } from "./src/App"
import Registrar from "./src/App/Lib/Registrar"

const ownconfig = {
    App: {
        layouts: {
            public: "Emptylayout",
            private: "DashboardLayout"
        },
    },
    Profile: {
        layoutConfig:{
            "App.EmptyLayout": {
                main: "HelloWorld"
            },
            "App.DashboardLayout": {
                main: "HelloWorld"
            }
        }
    }
}

export default class ReactFramework {
    
    constructor() {
        this.registryIsInitialized = false
        this.registrar = null
    }

    static initialiseRegistry() {
        this.registryIsInitialized = true
        this.registrar = new Registrar(ownconfig)
    }
    
    static createApp() {
        if(!this.registryIsInitialized) {
            throw new Error('Registry is not initialized. Please run `ReactFramework.initialiseRegistry()` before running `ReactFramework.createApp()`')
        }
        const ReactFramework = () => (<AppModule.Component registrar={this.registrar} />)
        return ReactFramework
    }
}