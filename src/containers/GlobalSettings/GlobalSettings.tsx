import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FormLabel } from 'react-bootstrap';

import './GlobalSettings.scss';
import FontSettings from '../../components/Settings/Fonts/Fonts';
import MarginSettings from '../../components/Settings/Margins/Margins';
import ColorPicker from '../../components/UI/ColorPicker/ColorPicker';

class GlobalSettings extends React.Component{

  public render(){
    return (
      <div className="Component">
        <h4 className="mb-5">Global Settings</h4>
        <Row>
          <Col className="mb-4" >
            <FontSettings />
          </Col>  
        </Row>
        <Row>
          <Col className="mb-4" >
            <MarginSettings />
          </Col>
        </Row>
        <Row>
          <Col className="mb-4" >
            <FormLabel>Theme</FormLabel>
            <ColorPicker />
          </Col>
        </Row>
      </div>
    )
  }
}

export default GlobalSettings;