import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";

export const ProjectCategories = () => (
  <Grid className="text-center content">
    <Col xs={12} sm={4}>
      <LinkContainer to={`/projects/creative_coding`}>
        <Button bsSize="large" className="project_type btn-categories">
          <div className="square_category">
            <Glyphicon glyph="console" className="logo" />
            <h5 className="category_text">CREATIVE CODING</h5>
          </div>
        </Button>
      </LinkContainer>
    </Col>
    <Col xs={12} sm={4}>
      <LinkContainer to={`/projects/visualization`}>
        <Button bsSize="large" className="project_type btn-categories">
          <div className="square_category">
            <Glyphicon glyph="pencil" className="logo" />
            <h5 className="category_text">VISUALIZATION</h5>
          </div>
        </Button>
      </LinkContainer>
    </Col>
    <Col xs={12} sm={4}>
      <LinkContainer to={`/projects/web_development`}>
        <Button bsSize="large" className="project_type btn-categories">
          <div className="square_category">
            <Glyphicon glyph="globe" className="logo" />
            <h5 className="category_text">WEB DEVELOPMENT</h5>
          </div>
        </Button>
      </LinkContainer>
    </Col>
  </Grid>
);

// WEBPACK FOOTER //
// ./src/components/ProjectCategories.js
