import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import { Link } from "react-router-dom";
import { ImageWLoader } from "./ImageWLoader";

const CreativeCoding = () => (
  <div>
    <Grid className="text-center content">
      {/* <Row> */}
      {/* <Col> */}
      <Col xs={12} sm={4} className="project_square">
        <Link to="/projects/creative_coding/menger_sponge">
          <ImageWLoader
            src="https://s3.amazonaws.com/mayowa.me/img/Sponge.jpg"
            className="project_square_images"
          />
          <p className="project_text">MENGER SPONGE</p>
        </Link>
      </Col>
      <Col xs={12} sm={4} className="project_square">
        <Link to="/projects/creative_coding/clock">
          <ImageWLoader
            src="https://s3.amazonaws.com/mayowa.me/img/Clock.jpg"
            className="project_square_images"
          />
          <p className="project_text">CLOCK</p>
        </Link>
      </Col>
      <Col xs={12} sm={4} className="project_square">
        <Link to="/projects/creative_coding/steering">
          <ImageWLoader
            src="https://s3.amazonaws.com/mayowa.me/img/Steering.jpg"
            className="project_square_images"
          />
          <p className="project_text">
            STEERING <br />
            BEHAVIORS
          </p>
        </Link>
      </Col>
      {/* </Col> */}
      {/* </Row> */}
    </Grid>

    <Grid>
      {/* <Col xs={12}> */}
      <br />
      <Link to="/projects">
        <Button className="return_buttons">PROJECT CATEGORIES</Button>
      </Link>
      {/* </Col> */}
    </Grid>
  </div>
);

export default CreativeCoding;
