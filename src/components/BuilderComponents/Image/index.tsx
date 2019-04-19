import * as React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
 
export const ImageForm = () => {
  return(
    <React.Fragment>
      <Row>
        <Col>
          <h3>Image</h3>
          <form>
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" placeholder="https://imgur.com/img.jpg" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image Caption</Form.Label>
              <Form.Control type="text" placeholder="A beautiful kitten" />
            </Form.Group>
            <Form.Group>
              <Button>Add Image</Button>
            </Form.Group>
          </form>
        </Col>
      </Row>
    </React.Fragment>
  )
}