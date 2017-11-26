import React                from "react"
import AppProvider          from "../Core/AppProvider"
import AppContainer         from "../Core/AppContainer"
import RegistryProvider     from "../Core/RegistryProvider"

export default class Resolver {

    static newApp( registry, config ) {

        console.log("Config: ",config)
        
        const ReactFramework = () => (
                    <AppProvider>
                        <RegistryProvider registry={registry}>
                            <AppContainer root={config.RootModule} />    
                        </RegistryProvider>
                    </AppProvider>
        )
        
        return ReactFramework
    }

}