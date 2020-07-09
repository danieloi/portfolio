import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import { Link } from "react-router-dom";

export const Competition = () => (
  <div>
    <Grid>
      {/* <Row> */}
      <Col xs={12} sm={3}>
        <br />
        3-D visualization of Construction Schedule for student competition
        <br />
        <br />
        Made with 3ds Max
        <br />
      </Col>
      <Col xs={12} sm={9}>
        <iframe
          title="Competition"
          width="100%"
          height="300px"
          src="https://www.youtube.com/embed/gG-vkgTlVpo?rel=0"
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
        />
      </Col>

      {/* </Row> */}
    </Grid>
    <Grid>
      <Col xs={12}>
        <br />
        <Link to="/projects/visualization">
          <Button>RETURN</Button>
        </Link>
      </Col>
    </Grid>
  </div>
);
