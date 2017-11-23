import "babel-polyfill"
import App from "./App"
import { RFModule } from "../../Module"


@RFModule({
    Component: App,
    layouts: {
        public: "Emptylayout",
        private: "DashboardLayout"
    },
})
export class AppModule {}