import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container as MainContainer } from "react-bootstrap";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import NotPage from "../pages/NotPage";

export default function Container() {
    return (
        <MainContainer id="main-container" fluid="md">
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
                <Route>
                    <NotPage />
                </Route>
            </Switch>
        </MainContainer>
    );
}
