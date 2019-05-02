import * as React from 'react';
import { Row, Col, FormLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ColorResult } from 'react-color'
import { UPDATE_THEME } from '../Preview/store/actions';
import './GlobalSettings.scss';
import FontSettings from '../../components/Settings/Fonts/Fonts';
import MarginSettings from '../../components/Settings/Margins/Margins';
import ColorPicker from '../../components/UI/ColorPicker/ColorPicker';
import ToggleButton from '../../components/UI/ToggleButton/ToggleButton';

interface IGlobalSettings{
  toggle: boolean
}

class GlobalSettings extends React.Component<{onThemeColorChange: (color: string) => void}, IGlobalSettings>{

  public state: IGlobalSettings = {
    toggle: false
  }

  public toggle = () => {
    this.setState({
      ...this.state,
      toggle: !this.state.toggle
    });
  }

  public handleColorChange = (color:ColorResult) => {
    this.props.onThemeColorChange(color.hex);
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
            <ColorPicker color="red" showColorPicker={false} onChange={this.handleColorChange} />
          </Col>
        </Row>
    </div>);
    return (
      <div className="Component">
        <Row className="justify-content-between">
          <h4 className={this.state.toggle ? 'mb-5' : ''}>Global Settings</h4>
          <ToggleButton clicked={this.toggle} open={this.state.toggle} />
        </Row>
        {this.state.toggle ? settingComponents : ''}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    onThemeColorChange: (color: string) => dispatch(UPDATE_THEME(color))
  }
}

export default connect(null, mapDispatchToProps)(GlobalSettings);