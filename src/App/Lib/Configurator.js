// @flow
import { AppModule } from "../index"
import AppConfig from "../../Config"

export default function(config){
     
    console.log(AppConfig)
    console.log(AppModule.register())
    return config
}