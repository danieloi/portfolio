import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Table from "react-bootstrap/lib/Table";

export const Resume = () => {
  return (
    <Grid>
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
        <p className="cv_categories">WORK EXPERIENCE</p>
      </Col>
      <Col md={9} className="cv_item">
        <Col md={10}>
          <p className="cv_header">Design Co-op</p>
          <p className="cv_subheader">K4 Architecture, Cincinnati OH</p>
          <p className="cv_heading_details">2016 (2 Semesters )</p>
        </Col>
        <Col md={10}>
          <p className="cv_description">
            - Created 3-D visualizations for various winning project bids
            <br />
            - Created 2-D construction drawings
            <br />
            - Executed construction administration tasks
            <br />- Facilitated co-ordination with other trades
          </p>
        </Col>
        <Col md={10}>
          <p className="cv_header">Analyst Co-op</p>
          <p className="cv_subheader">Landrum & Brown, Cincinnati OH</p>
          <p className="cv_heading_details">2015 (1 Semester))</p>
        </Col>
        <Col md={10}>
          <p className="cv_description">
            - Created company standards for representing walking distances in
            airport terminals
            <br />
            - Created 3-D animations for flight schedule presentations
            <br />
            - Revised layouts of terminals
            <br />
            - Updated airport layout plans to reflect past and future
            developments
            <br />
            - Assembled company presentations for company executives
            <br />- Performed background research work for project bids
          </p>
        </Col>
        <Col md={10}>
          <p className="cv_header">Design & Acquisition Co-op</p>
          <p className="cv_subheader">
            Habitat for Humanity of Greater Cincinnati, Cincinnati OH
          </p>
          <p className="cv_heading_details">2014 (2 Semesters)</p>
        </Col>
        <Col md={10}>
          <p className="cv_description">
            - Created presentations for city-sponsored projects
            <br />
            - Greatly increased personal proficiency in drafting full floor plan
            sets for new and existing buildings
            <br />
            - Surveyed existing conditions and recreated situations in CAD
            <br />
            - Obtained building permits for new-builds
            <br />- Perfomed site supervision tasks alongside Construction
            Managers
          </p>
        </Col>
      </Col>
      <Grid className="cv_divider_outer">
        <Col md={12} className="cv_divider" />
      </Grid>
      <Col md={3}>
        <p className="cv_categories">TECHNICAL SKILLS</p>
      </Col>
      <Col md={9} className="cv_item">
        <Col md={10}>
          <p className="cv_description">
            C++, C#, Matlab, HTML & CSS, JavaScript (Vanilla, jQuery, React,
            Express, Node), Python
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
