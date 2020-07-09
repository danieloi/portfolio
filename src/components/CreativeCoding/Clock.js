import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import { Link } from "react-router-dom";

export const Clock = () => (
  <div>
    <Grid>
      {/* <Row> */}
      <br />
      <Col xs={12} sm={6}>
        <iframe
          title="Clock"
          src="https://danieloi.github.io/creative_coding_clock/"
          height="300"
          width="300"
        />
      </Col>
      <Col sm={6}>
        <br />
        A Clock created with the p5.js javascript library
        <br />
        Adapted from Daniel Shiffman's p5JS Tutorial on YouTube
        <br />
        Added clock hand toggle
        <br />
      </Col>
      {/* <Col xs={12} sm={6}>
                    <p>Based on Tutorials by Daniel Shiffman. </p>
                    <p>Made with p5.js</p>
                </Col> */}
      {/* </Row> */}
      {/* <Row> */}
      <Col xs={12}>
        <br />
        <Link to="/projects/creative_coding">
          <Button>RETURN</Button>
        </Link>
      </Col>
      {/* </Row> */}
    </Grid>
  </div>
);
