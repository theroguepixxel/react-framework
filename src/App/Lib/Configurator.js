// @flow
import { AppModule } from "../index"
import AppConfig from "../../Config"

let auth = require("@trp/react-framework-auth")

console.log(auth)

export default function(config){
     
    console.log(AppConfig)
    console.log(AppModule.register())
    return config
}