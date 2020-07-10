import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import { Link } from "react-router-dom";

export const Steering = () => (
  <Grid>
    {/* <Row> */}
    <br />
    <Col sm={6}>
      <iframe
        title="Steering"
        src="https://danieloi.github.io/creative_coding_steering_behaviors/"
        height="300"
        width="300"
      />
    </Col>
    <Col sm={6}>
      <br />
      Text with Steering Behaviors made with the p5.js javascript library
      <br />
      Adapted from Daniel Shiffman's p5JS Tutorial on YouTube
      <br />
      Tied Input field values to text for added interactivity
      <br />
    </Col>
    <Col xs={12}>
      <br />
      <Link to="/projects/creative_coding">
        <Button>RETURN</Button>
      </Link>
    </Col>
    {/* </Row> */}
  </Grid>
);
