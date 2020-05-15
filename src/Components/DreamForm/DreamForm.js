import React from "react";
import "./style.css"
import { Container, Card, Form, Col, Row } from "react-bootstrap";

function DreamForm() {
  return (
    <Container>
      <Card>
        <Form>
          <Row className="formRow">
            <Col lg="4"></Col>
            <Col lg="4">Dream Entry</Col>
            <Col lg="4"></Col>
          </Row>
          <Row className="formRow">
            <Col sm lg="4">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>
                  Enter your dream details here. Be as thorough as possible,
                  you're likely to lose information the longer you wait!
                </Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

export default DreamForm;
