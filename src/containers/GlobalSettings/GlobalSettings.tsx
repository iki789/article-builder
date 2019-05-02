import * as React from 'react';
import { Row, Col, FormLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ColorResult } from 'react-color'
import { UPDATE_FONTS, UPDATE_MARGINS, UPDATE_THEME } from '../Preview/store/actions';
import './GlobalSettings.scss';
import FontSettings, { IFonts } from '../../components/Settings/Fonts/Fonts';
import MarginSettings, { IMargins } from '../../components/Settings/Margins/Margins';
import ColorPicker from '../../components/UI/ColorPicker/ColorPicker';
import ToggleButton from '../../components/UI/ToggleButton/ToggleButton';
import { ISettings } from '../Preview/Preview';

interface IGlobalSettingsState{
  toggle: boolean
}

interface IGlobalSettingsProps{
  settings: ISettings,
  onThemeColorChange: (color: string) => void,
  onFontsChange: (fonts: IFonts) => void,
  onMarginsChange: (margins: IMargins) => void
}

class GlobalSettings extends React.Component<IGlobalSettingsProps, IGlobalSettingsState>{

  public state: IGlobalSettingsState = {
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
  
  public handleFontsChange = (fonts: IFonts) => {
    this.props.onFontsChange(fonts);
  }

  public handleMarginsChange = (margins: IMargins) => {
    this.props.onMarginsChange(margins);
    return margins;
  }

  public render(){
    const settingComponents = (
    <div>
      <Row>
          <Col className="mb-4" >
            <FontSettings fonts={this.props.settings.fonts} onChange={this.handleFontsChange} />
          </Col>  
        </Row>
        <Row>
          <Col className="mb-4" >
            <MarginSettings margins={this.props.settings.margins} onChange={this.handleMarginsChange} />
          </Col>
        </Row>
        <Row>
          <Col className="mb-4" >
            <FormLabel>Theme</FormLabel>
            <ColorPicker color={this.props.settings.theme} showColorPicker={false} onChange={this.handleColorChange} />
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

const mapStateToProps = (state: any) => {
  return {
    settings: state.PreviewReducer.settings
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    onFontsChange: (fonts: IFonts) => dispatch(UPDATE_FONTS(fonts)),
    onMarginsChange: (margins: IMargins) => dispatch(UPDATE_MARGINS(margins)),
    onThemeColorChange: (color: string) => dispatch(UPDATE_THEME(color))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalSettings);