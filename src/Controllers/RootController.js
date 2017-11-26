import { Route } from "../../Decorators"
import EmptyLayout from "../UI/Layouts/EmptyLayout"

@Route({
    path: "/",
    layout: EmptyLayout
})
export default class RootController {}