import * as React from 'react';
import { Form } from 'react-bootstrap';

import './GlobalSettings.scss';

class GlobalSettings extends React.Component{

  public render(){
    return (
      <div className="Component">
        <h4>Global Settings</h4>
        <Form.Group controlId="hello">
          <Form.Label>Hello there!</Form.Label>
          <Form.Control type="text" name="ste" />
        </Form.Group>
      </div>
    )
  }
}

export default GlobalSettings;