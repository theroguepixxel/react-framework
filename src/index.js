import "babel-polyfill"
import { RFModule } from "../Module"
import App from "./App"
import EmptyLayout from "./UI/Layouts/EmptyLayout"

@RFModule({
    Component: App,
    layouts: [
        EmptyLayout
    ],
})
export class AppModule {}