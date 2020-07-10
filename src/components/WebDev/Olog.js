import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import { Link } from "react-router-dom";
import { ImageWLoader } from "../ImageWLoader";

export const Olog = () => (
  <div>
    <Grid>
      <Col xs={12} sm={3}>
        <br />
        UI, Frontend and Backend for
        <br />
        <a href="https://olog.me" target="_blank" rel="noopener noreferrer">
          olog.me <span className="glyphicon glyphicon-new-window" />
        </a>
        <br />
        <br />
        Made with React and Serverless Framework(AWS)
        <br />
        <br />
        Featured{" "}
        <a
          href="https://serverless-stack.com/showcase.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{" "}
        and{" "}
        <a
          href="https://www.producthunt.com/posts/olog-me"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        <br />
      </Col>
      <Col xs={12} sm={3}>
        <ImageWLoader
          src="https://s3.amazonaws.com/mayowa.me/img/olog-screen.jpg"
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
