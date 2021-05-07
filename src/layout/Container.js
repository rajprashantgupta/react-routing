import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

export default function Container() {
    return (
        <Switch>
            <Route path="/about-us">
                <About />
            </Route>
            <Route path="/services">
                <Services />
            </Route>
            <Route path="/contact-us">
                <Contact />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    );
}
