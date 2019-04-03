import * as React from 'react';
import { Form } from 'react-bootstrap';

import './Margins.scss';
import * as MarginIcon from "../../../assets/icons/ic_border_right_48px.svg"

const Margins = () => {
  return (
    <div className="wrapper">
      <Form.Label className="w-100">Margins</Form.Label>
      <Form.Group className="d-flex align-items-center">
        <Form.Label className="mr-2"><img src={MarginIcon} className="MarginLeft" /></Form.Label>
        <Form.Control type="number" step="0.1" min="1" placeholder="1.0" />
      </Form.Group>
      <Form.Group className="d-flex align-items-center">
        <Form.Label className="mr-2"><img src={MarginIcon} className="MarginRight" /></Form.Label>
        <Form.Control type="number" step="0.1" min="1" placeholder="1.0" />
      </Form.Group>
      <Form.Group className="d-flex align-items-center">
        <Form.Label className="mr-2"><img src={MarginIcon} className="MarginTop" /></Form.Label>
        <Form.Control type="number" step="0.1" min="1" placeholder="1.0" />
      </Form.Group>
      <Form.Group className="d-flex align-items-center">
        <Form.Label className="mr-2"><img src={MarginIcon} className="MarginBottom" /></Form.Label>
        <Form.Control type="number" step="0.1" min="1" placeholder="1.0" />
      </Form.Group>
    </div>
  )
}

export default Margins;