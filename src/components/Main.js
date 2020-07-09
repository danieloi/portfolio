import React from "react";
import { Switch, Route } from "react-router-dom";
import { About } from "./About";
import { Projects } from "./Projects";
import { Resume } from "./Resume";
import { Contact } from "./Contact";
// import {Blog} from './Blog'

export const Main = () => (
  <Switch>
    <Route exact path="/" component={About} />
    <Route path="/projects" component={Projects} />
    {/* The Route above is the only one that isn't exact bacause it leads to other routes.  */}
    {/* makng it 'exact' breaks the link to the other routes because things like params will cause the the route not to match any other option here and then render nothing */}
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/contact" component={Contact} />
    {/* <Route exact path='/blog' component={Blog} /> */}
  </Switch>
);
