import * as React from 'react';

import { Form } from 'react-bootstrap';

const Fonts = () => {
  return (
    <div style={{display: "flex"}}>
      <Form.Group controlId="Fonts" style={{maxWidth: "170px", width: "100%", marginRight: "1rem"}}>
        <Form.Label>Fonts</Form.Label>
        <Form.Control as="select">
          <option className="option">Roboto</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="Size" style={{maxWidth: "100px"}}>
        <Form.Label>Size</Form.Label>
        <Form.Control type="number" step="0.1" min="1.2" max="3" placeholder="1.2"/>
      </Form.Group>
    </div>
  )
}

export default Fonts;