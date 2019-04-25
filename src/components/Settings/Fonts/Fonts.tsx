import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { UPDATE_FONTS } from '../../../containers/Preview/store/actions'

class Fonts extends React.Component<IFontsProps, IFonts>{
  public state:IFonts = {
    family: this.props.fonts.family || "Times New Roman",
    size: this.props.fonts.size || 1
  }

  public handleChange = (field: "family" | "size", e: React.ChangeEvent<any>) => {
    const val = e.target.value;
    this.setState({
      ...this.state,
      [field]: val
    }, () => {
      this.storeFonts();
    });
    return val;
  }

  public storeFonts = () => {
    this.props.updateFonts(this.state);
  }

  public render(){
    return (
      <div style={{display: "flex"}}>
        <Form.Group controlId="Fonts" style={{maxWidth: "170px", width: "100%", marginRight: "1rem"}}>
          <Form.Label>Fonts</Form.Label>
          <Form.Control as="select" value={this.state.family} onChange={this.handleChange.bind(this, 'family')}>
            <option value="Roboto">Roboto</option>
            <option value="Times New Roman">Times New Roman</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="Size" style={{maxWidth: "100px"}}>
          <Form.Label>Size</Form.Label>
          <Form.Control 
            type="number" 
            step="0.1" 
            min="1" 
            max="3" 
            value={(this.state.size ? this.state.size : 1).toString()} 
            onChange={this.handleChange.bind(this, 'size')}
            placeholder="1.2"/>
        </Form.Group>
      </div>
    )
  }
}

interface IFontsProps{
  family?: string,
  size?: number,
  fonts: IFonts,
  updateFonts: (fonts: IFonts) => void
}

export interface IFonts{
  family?: string,
  size?: number
}

const mapStateToProps = (state: any) => {
  return {
    fonts: state.PreviewReducer.settings.fonts
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateFonts: (fonts: IFonts) => dispatch(UPDATE_FONTS(fonts))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fonts);