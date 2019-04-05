import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FormLabel } from 'react-bootstrap';

import './GlobalSettings.scss';
import FontSettings from '../../components/Settings/Fonts/Fonts';
import MarginSettings from '../../components/Settings/Margins/Margins';
import ColorPicker from '../../components/UI/ColorPicker/ColorPicker';
import ToggleButton from '../../components/UI/ToggleButton/ToggleButton';

interface IGlobalSettings{
  toggle: boolean
}

class GlobalSettings extends React.Component<{}, IGlobalSettings>{

  public state: IGlobalSettings = {
    toggle: false
  }

  public toggle = () => {
    this.setState({
      ...this.state,
      toggle: !this.state.toggle
    });
  }

  public render(){
    const settingComponents = (
    <div>
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
            <ColorPicker color="red" showColorPicker={false} />
          </Col>
        </Row>
    </div>);
    return (
      <div className="Component">
        <Row className="justify-content-between">
          <h4 className="mb-5">Global Settings</h4>
          <ToggleButton clicked={this.toggle} open={this.state.toggle} />
        </Row>
        {this.state.toggle ? settingComponents : ''}
      </div>
    )
  }
}

export default GlobalSettings;