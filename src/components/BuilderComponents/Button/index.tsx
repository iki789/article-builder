import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const ButtonCompnent = () => {
  return (
    <React.Fragment>
    <Row>
      <Col>
        <h3>Button</h3>
        <form>
          <Form.Group controlId="ButtonLabel">
            <Form.Label>Label</Form.Label>
            <Form.Control type="text" placeholder="Submit" />
          </Form.Group>
          <Form.Group controlId="ButtonLocation">
            <Form.Label>URL Location</Form.Label>
            <Form.Control type="text" placeholder="https://foobar.com" />
          </Form.Group>
          <Form.Group controlId="ButtonType">
            <Form.Label>Type</Form.Label>
            <Form.Control as="select">
              <option>Default</option>
              <option>Outlined</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="ButtonFullWidth">
            <Form.Check custom={true} type="checkbox" label="Button is full-width" />
          </Form.Group>
          <Form.Group>
            <Button>Create</Button>
          </Form.Group>
        </form>
      </Col>
    </Row>
  </React.Fragment>
  );
}

export default ButtonCompnent;