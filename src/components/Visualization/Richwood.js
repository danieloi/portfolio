import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import { Link } from "react-router-dom";
import { ImageWLoader } from "../ImageWLoader";

export const Richwood = () => (
  <div>
    <Grid>
      <Col xs={12} sm={3}>
        <br />
        Interior Renderings of a bank hall for K4 Architecture
        <br />
        <br />
        Made with Sketchup and Thea Renderer
        <br />
      </Col>
      <Col xs={12} sm={9}>
        <ImageWLoader
          src="https://s3.amazonaws.com/mayowa.me/img/Richwood+Bank/1.jpg"
          className="project_images"
          noBackdrop={true}
        />
        <ImageWLoader
          src="https://s3.amazonaws.com/mayowa.me/img/Richwood+Bank/2.jpg"
          className="project_images"
          noBackdrop={true}
        />
        <ImageWLoader
          src="https://s3.amazonaws.com/mayowa.me/img/Richwood+Bank/3.jpg"
          className="project_images"
          noBackdrop={true}
        />
        <ImageWLoader
          src="https://s3.amazonaws.com/mayowa.me/img/Richwood+Bank/4+.jpg"
          className="project_images"
          noBackdrop={true}
        />
      </Col>
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
