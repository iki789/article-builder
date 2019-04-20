import * as React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

interface IImage{
  src?: string,
  caption?: string,
  url?: string
}

export const ImageForm: React.StatelessComponent<IImage> = (props:IImage) => {
  return(
    <React.Fragment>
      <Row>
        <Col>
          <h3>Image</h3>
          <form>
            <Form.Group controlId="ImageSrc">
              <Form.Label>Image Source</Form.Label>
              <Form.Control type="text" placeholder="https://imgur.com/img.jpg" value={props.src} />
            </Form.Group>
            <Form.Group controlId="ImageCaption">
              <Form.Label>Image Caption</Form.Label>
              <Form.Control type="text" placeholder="A beautiful kitten" />
            </Form.Group>
            <Form.Group controlId="ImageURL">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" placeholder="" />
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

export const Image: React.StatelessComponent<IImage> = (props:IImage) => {
  let img = <img src={props.src} /> ;
  if(props.url){
    img = (
      <a href={props.url} target="_blank">
        <img src={props.src} />
      </a>
    );
  }

  return(
    <div>
      { img }
    </div>
  );
}

Image.defaultProps = {
  src: require('./placeholder.svg')
}