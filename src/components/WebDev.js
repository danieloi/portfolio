import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import { Link } from "react-router-dom";
import { ImageWLoader } from "./ImageWLoader";

export const WebDev = () => (
  <div>
    <Grid>
      <Col xs={12} sm={4} className="project_square">
        <Link to="/projects/web_development/olog">
          <ImageWLoader
            src="https://s3.amazonaws.com/mayowa.me/img/Squares/olog-square.JPG"
            className="project_square_images"
          />
          <p className="project_text">OLOG.ME</p>
        </Link>
      </Col>
      <Col xs={12} sm={4} className="project_square">
        <Link to="/projects/web_development/transcribe">
          <ImageWLoader
            src="https://s3.amazonaws.com/mayowa.me/img/Squares/transcribe-square.png"
            className="project_square_images"
          />
          <p className="project_text">TRANSCRIBE.NG</p>
        </Link>
      </Col>
      <Col xs={12} sm={4} className="project_square">
        <Link to="/projects/web_development/spiknspan">
          <ImageWLoader
            src="https://s3.amazonaws.com/mayowa.me/img/Squares/spiknspansquare_smaller.jpg"
            className="project_square_images"
          />
          <p className="project_text">SPIK & SPAN</p>
        </Link>
      </Col>
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
