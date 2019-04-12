import * as React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
 
const Video = () => {
  return(
    <React.Fragment>
      <Row>
        <Col>
          <h3>Video</h3>
          <form>
            <Form.Group>
              <Form.Label>Video Source Link</Form.Label>
              <Form.Control type="text" placeholder="https://imgur.com/video.mp4" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Video Title</Form.Label>
              <Form.Control type="text" placeholder="A beautiful kitten" />
            </Form.Group>
            <Form.Group>
              <Button>Add Video</Button>
            </Form.Group>
          </form>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Video;