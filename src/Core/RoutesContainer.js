import React from "react"
import { Route, Switch, Link } from "react-router-dom"
import RootLayout from "../UI/Layouts/RootLayout"
import AppLayout from "../UI/Layouts/AppLayout"
import HomeLayout from "../UI/Layouts/HomeLayout"
import PropsTypes from "prop-types"

const Home = (props) => {
    return(
        <h3>Home</h3>
    )
}

const Dashboard = (props) => {
    return(
        <h3>Dashboard</h3>
    )
}

const HomeLayoutRoutes = (props) => {
    return(
        <Route exact path="/home" render={() => {
            return (
                <HomeLayout>
                    <Home />
                </HomeLayout>
            )} } />
    )
}

const AppLayoutRoutes = (props) => {
    return(
        <Route exact path="/dashboard" render={() => {
            return (
                <AppLayout>
                    <Dashboard />
                </AppLayout>
            )} } />
    )
}

const Links = (props) => {
    return(
        <div>
            <Link to="/home">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    )
}

const RoutesContainer = (props, context) => {

    let { Menu } = context.registry
    
    return (
        <RootLayout>
            <Route path="*" component={Links} />
            <HomeLayoutRoutes />
            <AppLayoutRoutes />
            { _.map(Menu.ComponentRegistry.layouts,(Layout, index) => (<Layout key={index} />)) }
        </RootLayout>
    )
}

RoutesContainer.contextTypes = {
    registry: PropsTypes.object.isRequired
}

export default RoutesContainer