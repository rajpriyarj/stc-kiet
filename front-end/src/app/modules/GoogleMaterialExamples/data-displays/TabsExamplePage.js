import React from "react";
import {Tab, Tabs, Nav, Col, Row} from "react-bootstrap";

class ControlledTabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "home"
    };
  }

  render() {
    return (
      <Tabs
        
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
        backgroundColor = '#1f1e2e'
      >
      </Tabs>
    );
  }
}

export default class TabsExamplesPage extends React.Component {
  render() {
    return (
      <>
        <div className='row'>
        <div className='col-md-12'>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first" backgroundColor='#1f1e2e'>
                <Row>
                  <Col sm={2}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">2020</Nav.Link>
                        <Nav.Link eventKey="second">2021</Nav.Link>
                        <Nav.Link eventKey="third">2022</Nav.Link>
                        <Nav.Link eventKey="fourth">2023</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={10} style={{padding: '10px', backgroundColor: 'white', height: '440px', width: '250px', fontSize: '20px'}}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        REPORT CONTENT OF 2020
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      REPORT CONTENT OF 2021
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        REPORT CONTENT OF 2022
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                      REPORT CONTENT OF 2023
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
              </div>
          </div>
      </>
    );
  }
}