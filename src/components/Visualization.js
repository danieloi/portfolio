import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import { Link } from "react-router-dom";
import { ImageWLoader } from "./ImageWLoader";

export const Visualization = () => (
  <div>
    <Grid>
      {/* <Col xs={12} sm={4} className='project_square'>
                <div className='project_square_background'>
                <Link to='/projects/visualization/senior_capstone'>
                        <img alt='' className='project_square_images' src='https://s3.amazonaws.com/mayowa.me/img/Squares/Football_field_rendered_square.jpg'></img>
                        <p className='project_text'>SENIOR CAPSTONE</p>
                    </Link>
                </div>
            </Col> */}
      <Col xs={12} sm={4} className="project_square">
        <Link to="/projects/visualization/richwood_bank">
          <ImageWLoader
            src="https://s3.amazonaws.com/mayowa.me/img/Richwood_squaresmaller.jpg"
            className="project_square_images"
          />
          <p className="project_text">RICHWOOD BANK</p>
        </Link>
      </Col>
      <Col xs={12} sm={4} className="project_square">
        <Link to="/projects/visualization/competition">
          <ImageWLoader
            src="https://s3.amazonaws.com/mayowa.me/img/Fort+Collins+square.jpg"
            className="project_square_images"
          />
          <p className="project_text">FORT COLLINS</p>
        </Link>
      </Col>
      <Col xs={12} sm={4} className="project_square">
        <Link to="/projects/visualization/misc">
          <ImageWLoader
            src="https://s3.amazonaws.com/mayowa.me/img/Squares/Firtree_habitat_composite_square.jpg"
            className="project_square_images"
          />
          <p className="project_text">OTHER</p>
        </Link>
      </Col>
    </Grid>
    {/* <Grid>
            <Col xs={12} sm={4} className='project_square'>
                <div className='project_square_background'>
                    <Link to='/projects/visualization/hand_sketches'>
                        <img alt='' className='project_square_images' src='https://s3.amazonaws.com/mayowa.me/img/Squares/hand_sketch.jpg'></img>
                        <p className='project_text'>HAND SKETCHES</p>
                    </Link>
                </div>
            </Col>
            <Col xs={12} sm={4} className='project_square'>
                <Link to='/projects/visualization/'>
                    <img alt='' className='project_square_images' src='https://s3.amazonaws.com/mayowa.me/img/Squares/Firtree_habitat_composite_square.jpg'></img>
                    <p className='project_text'>MISC</p>
                </Link>
            </Col>
        </Grid> */}
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
