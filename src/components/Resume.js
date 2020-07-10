import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Table from "react-bootstrap/lib/Table";

export const Resume = () => {
  return (
    <Grid>
      <Col md={3}>
        <p className="cv_categories">WORK EXPERIENCE</p>
      </Col>
      <Col md={9} className="cv_item">
        <Col md={10}>
          <p className="cv_header">Software Engineer</p>
          <p className="cv_subheader">olog.me, Remote</p>
          <p className="cv_heading_details">Nov. 2019 - present</p>
        </Col>
        <Col md={10}>
          <p className="cv_description">
            - Designed, Built, Deployed and Managed User-facing Frontend &
            Backend
          </p>
        </Col>
        <Col md={10}>
          <p className="cv_header">Developer</p>
          <p className="cv_subheader">Freelance, Remote</p>
          <p className="cv_heading_details">2018 - present</p>
        </Col>
        <Col md={10}>
          <p className="cv_description">
            - 2018 Nigerian Presidential Elections Twitter Sentiment Analysis
            Project
            <br />
            - Digitized Regularly-used forms and saved increading man-hours for
            Construction Company
            <br />- Banner Generator Tool for Nigerian Non-profit Shift Nigeria
          </p>
        </Col>
        <Col md={10}>
          <p className="cv_header">Software Engineer</p>
          <p className="cv_subheader">Thrive Agric, Abuja NG/Remote</p>
          <p className="cv_heading_details">Dec. 2018 - Jul. 2019</p>
        </Col>
        <Col md={10}>
          <p className="cv_description">
            - Designed, Built, & Deployed Administrative Dashboard
            <br />
            - Collaborated on User-facing Frontend
            <br />- Designed and Built Analytics UI & API endpoints
          </p>
        </Col>
        <Col md={10}>
          <p className="cv_header">Software Developer</p>
          <p className="cv_subheader">Transcribe.ng, Remote</p>
          <p className="cv_heading_details">Aug. 2018 - Dec. 2019</p>
        </Col>
        <Col md={10}>
          <p className="cv_description">
            - Designed, Built, Deployed and Managed User-facing Frontend &
            Backend
            <br />- Designed, Built, Deployed and Managed Admin Dashboard
          </p>
        </Col>
        <Col md={10}>
          <p className="cv_header">Full Stack Developer</p>
          <p className="cv_subheader">Spik & Span(spikandspan.net), Remote</p>
          <p className="cv_heading_details">Apr. 2018 - July. 2019</p>
        </Col>
        <Col md={10}>
          <p className="cv_description">
            - Designed, Built, Deployed and Managed User-facing Frontend &
            Backend
            <br />- Designed, Built, Deployed and Managed Admin Dashboard
          </p>
        </Col>
      </Col>
      <Grid className="cv_divider_outer">
        <Col md={12} className="cv_divider" />
      </Grid>
      <Col md={3}>
        <p className="cv_categories">SKILLS</p>
      </Col>
      <Col md={9} className="cv_item">
        <Col md={10}>
          <p className="cv_description">
            JavaScript (React, Redux, p5, Node, Vanilla), HTML & CSS, Python,
            AWS Serverless
          </p>
          <p className="cv_description">Photoshop, Illustrator</p>
          <p className="cv_description">
            3ds Max, Blender, SketchUp, AutoCAD, Revit
          </p>
          <p className="cv_description">
            Microsoft Word, Excel, PowerPoint, Project
          </p>
        </Col>
      </Col>
      <Grid className="cv_divider_outer">
        <Col md={12} className="cv_divider" />
      </Grid>
      <Col md={3}>
        <p className="cv_categories">EDUCATION</p>
      </Col>
      <Col md={9} className="cv_item">
        <Col md={10}>
          <p className="cv_header">BSc. Architectural Engineering, 2017</p>
          <p className="cv_subheader">University of Cincinnati</p>
          <p className="cv_subheader">Cincinnati, OH</p>
          <p className="cv_subheader">USA</p>
          <p className="cv_subheader">GPA: 3.7/4.0</p>
        </Col>
      </Col>
      <Grid className="cv_divider_outer">
        <Col md={12} className="cv_divider" />
      </Grid>
      <Col md={3}>
        <p className="cv_categories">COMMUNITY INVOLVEMENT & AWARDS</p>
      </Col>
      <Col md={9} className="cv_item">
        <Col md={9}>
          <Table responsive className="table">
            <tbody className="cv_description">
              <tr>
                <td>1st Place</td>
                <td>ABC National Construction Student Competition 2016</td>
              </tr>
              <tr>
                <td>National Finalist</td>
                <td>DBIA Student Competition 2016</td>
              </tr>
              <tr>
                <td>President</td>
                <td>DBIA Student Chapter</td>
              </tr>
              <tr>
                <td>Peer Leader</td>
                <td>First Year Experience & Learning Communities</td>
              </tr>
              <tr>
                <td>Youth Leader</td>
                <td>King's Court Parish RCCG</td>
              </tr>
              <tr>
                <td>Honor</td>
                <td>CEAS Engineer of the Month</td>
              </tr>
              <tr>
                <td>Honor</td>
                <td>Spirit of Construction Student Award 2016</td>
              </tr>
              <tr>
                <td>Honor</td>
                <td>College of Engineering Dean's List</td>
              </tr>
              <tr>
                <td>Teaching Assistant</td>
                <td>CVE 3001 Structural Analysis</td>
              </tr>
              <tr>
                <td>Member</td>
                <td>University Honors Program</td>
              </tr>
              <tr>
                <td>Member</td>
                <td>Tau Beta Pi Engineering Honor Society</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Col>
      {/*
            <div className="col-md-9">
                <div className="col-md-8 table-responsive cv_item">
                    <table className="table">
                        <tbody className="cv_description">
                            <tr>
                                <td>1st Place</td>
                                <td>ABC National Construction Student Competition 2016</td>
                            </tr>                    
                            <tr>
                                <td>National Finalist</td>
                                <td>DBIA Student Competition 2016</td>
                            </tr>
                            <tr>
                                <td>President</td>
                                <td>DBIA Student Chapter</td>
                            </tr>
                            <tr>
                                <td>Peer Leader</td>
                                <td>First Year Experience & Learning Communities</td>
                            </tr>
                            <tr>
                                <td>Choir Director & Youth Leader</td>
                                <td>King's Court Parish RCCG</td>
                            </tr>
                            <tr>
                                <td>Honor</td>
                                <td>CEAS Engineer of the Month</td>
                            </tr>
                            <tr>
                                <td>Honor</td>
                                <td>Spirit of Construction Student Award 2016</td>
                            </tr>
                            <tr>
                                <td>Honor</td>
                                <td>College of Engineering Dean's List</td>
                            </tr>
                            <tr>
                                <td>Teaching Assistant</td>
                                <td>CVE 3001 Structural Analysis</td>
                            </tr>
                            <tr>
                                <td>Member</td>
                                <td>University Honors Program</td>
                            </tr>
                            <tr>
                                <td>Member</td>
                                <td>Tau Beta Pi Engineering Honor Society</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        
    </div>  */}
    </Grid>
  );
};
