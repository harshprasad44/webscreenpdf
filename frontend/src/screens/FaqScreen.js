import React from "react";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";

const FaqScreen = () => {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              Is generated PDF clickable ?
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Is it mandatory to provide options ?
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              How can we reach you ?
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">Yes, all generated PDF are clickable and redirects to it's webpage.</Tab.Pane>
            <Tab.Pane eventKey="#link2">
              No, I have already given default options to the PDF, you just need to provide the URL. Options are given
              just in case if you want to modify them.{" "}
            </Tab.Pane>
            <Tab.Pane eventKey="#link3">
              Contact Us via mail harsh@harshprasad.com or visit{" "}
              <a href="https://www.harshprasad.com">https://www.harshprasad.com</a>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default FaqScreen;
