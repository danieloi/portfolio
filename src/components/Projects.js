import React from "react";
import { Switch, Route } from "react-router-dom";
import CreativeCoding from "./CreativeCoding";
import { Steering } from "./CreativeCoding/Steering";
import { Clock } from "./CreativeCoding/Clock";
import { Sponge } from "./CreativeCoding/Sponge";
import { ProjectCategories } from "./ProjectCategories";
import { WebDev } from "./WebDev";
import { Visualization } from "./Visualization";
import { Richwood } from "./Visualization/Richwood";
import { Misc } from "./Visualization/Misc";
import { Competition } from "./Visualization/Competition";
import { Tammi } from "./WebDev/Tammi";
import { Spik } from "./WebDev/Spik";

export const Projects = () => (
  <Switch>
    <Route exact path="/projects" component={ProjectCategories} />
    <Route exact path="/projects/creative_coding" component={CreativeCoding} />
    <Route path="/projects/creative_coding/menger_sponge" component={Sponge} />
    <Route path="/projects/creative_coding/clock" component={Clock} />
    <Route path="/projects/creative_coding/steering" component={Steering} />
    <Route exact path="/projects/visualization" component={Visualization} />
    <Route path="/projects/visualization/richwood_bank" component={Richwood} />
    <Route path="/projects/visualization/misc" component={Misc} />
    <Route path="/projects/visualization/competition" component={Competition} />
    <Route exact path="/projects/web_development" component={WebDev} />
    <Route path="/projects/web_development/tammi" component={Tammi} />
    <Route path="/projects/web_development/spiknspan" component={Spik} />
  </Switch>
);
