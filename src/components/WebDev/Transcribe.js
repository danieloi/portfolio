import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import { Link } from "react-router-dom";
import { ImageWLoader } from "../ImageWLoader";

export const Transcribe = () => (
  <div>
    <Grid>
      <Col xs={12} sm={3}>
        <br />
        UI, Frontend and Backend for
        <br />
        <a
          href="https://transcribe.ng"
          target="_blank"
          rel="noopener noreferrer"
        >
          Transcribe.ng <span className="glyphicon glyphicon-new-window" />
        </a>
        <br />
        <br />
        Made with React and Serverless Framework (AWS)
        <br />
        <br />
        Payments processing with Paystack API
        <br />
        <br />
      </Col>
      <Col xs={12} sm={3}>
        <ImageWLoader
          src="https://s3.amazonaws.com/mayowa.me/img/transcribe-screen.jpg"
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
