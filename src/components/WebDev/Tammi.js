import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import { Link } from "react-router-dom";
import { ImageWLoader } from "../ImageWLoader";

export const Tammi = () => (
  <div>
    <Grid>
      <Col xs={12} sm={3}>
        <br />
        UI design and Website for{" "}
        <a
          href="http://tammiglobal.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tammi Global Academy{" "}
          <span className="glyphicon glyphicon-new-window" />
        </a>
        <br />
        <br />
        Made with HTML and Bootstrap
        <br />
      </Col>
      <Col xs={12} sm={9}>
        <ImageWLoader
          src="https://s3.amazonaws.com/mayowa.me/img/tammi+fullscreen.jpg"
          className="project_images"
          noBackdrop={true}
        />
      </Col>
    </Grid>
    <Grid>
      <Col xs={12}>
        <br />
        <Link to="/projects/web_development">
          <Button>RETURN</Button>
        </Link>
      </Col>
    </Grid>
  </div>
);
