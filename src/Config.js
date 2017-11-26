import { AuthModule } from "@trp/react-framework-auth"
import { AppModule } from "./index"

export default {
    RootModule: AppModule,
    modules: [
        AuthModule    
    ]
}