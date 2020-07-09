import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";

export const Contact = () => {
  return (
    <div>
      <Grid className="text-center content">
        {/* <Col xs={12} lg={8}> */}
        <Col xs={6} sm={3} className="social_icons social">
          <a
            href="mailto:contact@mayowa.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button bsSize="large" className="project_type">
              <div className="square_category">
                <FontAwesomeIcon icon="envelope-square" />
              </div>
            </Button>
          </a>
        </Col>
        <Col xs={6} sm={3} className=" social_icons social">
          <a
            href="https://web.facebook.com/daniel.mayowa.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button bsSize="large" className="project_type">
              <div className="square_category">
                <FontAwesomeIcon icon={["fab", "facebook-square"]} />
              </div>
            </Button>
          </a>
        </Col>
        <Col xs={6} sm={3} className="social_icons social">
          <a
            href="https://www.linkedin.com/in/olumayowa-daniel-84b3b082"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button bsSize="large" className="project_type">
              <div className="square_category">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </div>
            </Button>
          </a>
        </Col>
        <Col xs={6} sm={3} className="social_icons social">
          <a
            href="https://github.com/danieloi"
            target="_blank "
            rel="noopener noreferrer"
          >
            <Button bsSize="large" className="project_type">
              <div className="square_category">
                <FontAwesomeIcon icon={["fab", "github-square"]} />
              </div>
            </Button>
          </a>
        </Col>
        {/* </Col> */}
      </Grid>
    </div>
  );
};
