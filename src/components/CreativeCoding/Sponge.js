import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import { Link } from "react-router-dom";

export const Sponge = () => (
  <Grid>
    <br />
    <Col sm={6}>
      <iframe
        title="Sponge"
        src="https://danieloi.github.io/creative_coding_sponge/"
        height="300"
        width="300"
      />
    </Col>
    <Col sm={6}>
      <br />
      A Menger Sponge Fractal created with the p5.js javascript library
      <br />
      Adapted from Daniel Shiffman's p5JS Tutorial on YouTube
      <br />
      Added More Precise Interactivity to 3-D Model
      <br />
      <br />
    </Col>
    <Col xs={12}>
      <br />
      <Link to="/projects/creative_coding">
        <Button>RETURN</Button>
      </Link>
    </Col>
  </Grid>
);
