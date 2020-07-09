import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import Clearfix from "react-bootstrap/lib/Clearfix";
import { Link } from "react-router-dom";
import { ImageWLoader } from "../ImageWLoader";

export const Misc = () => (
  <div>
    <Grid>
      {/* <Row> */}
      <Col xs={12}>
        1 - Interior rendering of a proposed church remodelling, Cincinnati OH
        (Revit) <br />2 - Context rendering for Habitat for Humanity (Revit,
        Photoshop) <br />3 - Logo design exploration for University of
        Cincinnati (Inkpad for Ipad) <br />4 - Bowties for Scholarships entry
        (3ds Max) <br />5 - Little Big Planet Illustration (Inkpad for Ipad)
        <br />
        <br />
      </Col>
      <Col xs={12} sm={6}>
        <ImageWLoader
          src="https://s3.amazonaws.com/mayowa.me/img/Christ+Embassy+Cincinnati.jpg"
          className="project_images"
          noBackdrop={true}
        />
        <p className="misc_text">1</p>
      </Col>
      <Col xs={12} sm={6}>
        <ImageWLoader
          src="https://s3.amazonaws.com/mayowa.me/img/Firtree_habitat_composite.jpg"
          className="project_images"
          noBackdrop={true}
        />
        <p className="misc_text">2</p>
      </Col>
      {/* </Row> */}
      {/* <Row> */}
      <Clearfix visibleSmBlock visibleMdBlock visibleLgBlock />
      <Col xs={12} sm={4}>
        <ImageWLoader
          src="https://s3.amazonaws.com/mayowa.me/img/MY+logo+uc.png"
          className="project_images"
          noBackdrop={true}
        />
        <p className="misc_text">3</p>
      </Col>
      <Col xs={12} sm={4}>
        <ImageWLoader
          src="https://s3.amazonaws.com/mayowa.me/img/bowtie+cropped.jpg"
          className="project_images"
          noBackdrop={true}
        />
        <p className="misc_text">4</p>
      </Col>
      <Col xs={12} sm={4}>
        <ImageWLoader
          src="https://s3.amazonaws.com/mayowa.me/img/little_big.png"
          className="project_images"
          noBackdrop={true}
        />
        <p className="misc_text">5</p>
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
