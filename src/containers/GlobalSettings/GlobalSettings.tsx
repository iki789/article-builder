import * as React from 'react';
import { Row, Col, FormLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios  from 'axios'
import { ColorResult } from 'react-color'
import { UPDATE_FONTS, UPDATE_MARGINS, UPDATE_THEME } from '../Preview/store/actions';
import './GlobalSettings.scss';
import FontSettings, { IFonts } from '../../components/Settings/Fonts/Fonts';
import MarginSettings, { IMargins } from '../../components/Settings/Margins/Margins';
import ColorPicker from '../../components/UI/ColorPicker/ColorPicker';
import ToggleButton from '../../components/UI/ToggleButton/ToggleButton';
import * as LoadingIcon from  '../../assets/icons/loading-spin.svg';
import { IPreviewState } from '../Preview/Preview';

interface IGlobalSettingsState{
  toggle: boolean,
  HtmlReqestBusy: boolean
}

interface IGlobalSettingsProps{
  previewState: IPreviewState,
  onThemeColorChange: (color: string) => void,
  onFontsChange: (fonts: IFonts) => void,
  onMarginsChange: (margins: IMargins) => void
}

class GlobalSettings extends React.Component<IGlobalSettingsProps, IGlobalSettingsState>{

  public state: IGlobalSettingsState = {
    toggle: false,
    HtmlReqestBusy: false
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

  public handleHtmlExport = () => {
    this.setState({...this.state, HtmlReqestBusy: true})

    axios('http://localhost:4000/save', {
     method: 'post',
     headers:{
      "Content-Type": "application/json"
     },
     withCredentials: true,
     data: this.props.previewState
   }).then((res)=>{
     if(res.data.success){
       window.open('http://localhost:4000/download', '_blank');
      }else{
        alert(res.data.error)
      }
    }).finally(()=>{
      this.setState({...this.state, HtmlReqestBusy: false})
   })
  }

  public render(){
    const settingComponents = (
    <div className="mt-5">
      <Row>
          <Col className="mb-4" >
            <FontSettings fonts={this.props.previewState.settings.fonts} onChange={this.handleFontsChange} />
          </Col>  
        </Row>
        <Row>
          <Col className="mb-4" >
            <MarginSettings margins={this.props.previewState.settings.margins} onChange={this.handleMarginsChange} />
          </Col>
        </Row>
        <Row>
          <Col className="mb-4" >
            <FormLabel>Theme</FormLabel>
            <ColorPicker color={this.props.previewState.settings.theme} showColorPicker={false} onChange={this.handleColorChange} />
          </Col>
        </Row>
        <Row>
          <Col className="mb-4" >
            <FormLabel>Export</FormLabel>
            <div>
              <Button size="sm" className="mr-2" onClick={this.handleHtmlExport}>HTML</Button>
              {this.state.HtmlReqestBusy ? <img src={LoadingIcon} width="15px" style={{margin: "0 15px"}} /> : '' }
              <Button size="sm" disabled>JPEG</Button>
            </div>
          </Col>
        </Row>
    </div>);
    return (
      <div className="Global-Settings-Component">
        <Row className="justify-content-between align-items-center">
          <h4>Global Settings</h4>
          <ToggleButton clicked={this.toggle} open={this.state.toggle} />
        </Row>
        {this.state.toggle ? settingComponents : ''}
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    previewState: state.PreviewReducer
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