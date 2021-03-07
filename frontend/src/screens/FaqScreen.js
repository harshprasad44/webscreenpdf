import React from "react";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";

const FaqScreen = () => {
  return (
    <div className="faqScreen">
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link-1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link-1">
                How to use ?
              </ListGroup.Item>
              <ListGroup.Item action href="#link0">
                Do we save your PDF ?
              </ListGroup.Item>
              <ListGroup.Item action href="#link1">
                Is generated PDF clickable ?
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Is it mandatory to provide options ?
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Contact
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link-1">
                Web2pdf is used to generate pdf of any website/HTML page. You just need to provide the URL and click on
                'GET PDF' button and your file will get downloaded in few seconds. I also have provided few options to
                modify the PDF, like changing the format (A0, A2, A4, etc..), print background, and to change the height
                & width of the PDF, but those options are completely optional, you can just leave them and your file
                will still look good :)
              </Tab.Pane>
              <Tab.Pane eventKey="#link0">No, we don't track/save the PDF requested by you.</Tab.Pane>
              <Tab.Pane eventKey="#link1">Yes, all generated PDF are clickable and redirects to it's webpage.</Tab.Pane>
              <Tab.Pane eventKey="#link2">
                No, I have already given default options to the PDF, you just need to provide the URL. Options are given
                just in case if you want to modify them.{" "}
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                Contact Me via mail <a href={`mailTo:harsh@harshprasad.com`}>harsh@harshprasad.com</a> or visit{" "}
                <a href="https://www.harshprasad.com">https://www.harshprasad.com</a> for more info about me.
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default FaqScreen;
