import React from 'react';
import { connect } from 'react-redux';
import { UPDATE_THEME } from '../../../containers/Preview/store/actions';
import './ColorPicker.scss';
import { BlockPicker, ColorResult } from 'react-color';

interface IColorInputPickerProps{
  color: string,
  onChange: (e?:ColorResult) => void,
  showColorPicker: boolean
}

interface IColorInputPickerState{
  color: string,
  showColorPicker: boolean
}

class ColorInputPicker extends React.Component<IColorInputPickerProps, IColorInputPickerState>{

  public wrapperRef: React.RefObject<any>;
  public state:IColorInputPickerState = {
    color: 'orangered',
    showColorPicker: false
  }

  public componentDidMount(){
    this.setState({
      ...this.state,
      color: this.props.color,
      showColorPicker: this.props.showColorPicker
    });
    document.addEventListener('mousedown', this.handleClickOutComponent);
    this.wrapperRef = React.createRef();
  }

  public componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClickOutComponent);
  }


  public handleColorChange = (e:ColorResult) => {
    this.setState({
      ...this.state,
      color: e.hex
    },()=>{
      this.props.onChange(e);
    });
    return e.hex;
  }

  public toggleColorPicker = () => {
    this.setState({
      ...this.state,
      showColorPicker: !this.state.showColorPicker
    })
  }

  public render(){
    const Picker = (<BlockPicker
      triangle="hide" 
      color={this.state.color}
      onChangeComplete={this.handleColorChange}  
    />);

    return (
      <div>
        <div className="ColorPickerComponent" ref={this.wrapperRef}>  
          <div
            onClick={this.toggleColorPicker}
            style={{backgroundColor: this.state.color}} 
            className="ColorPickerRound"
          />
          {this.state.showColorPicker ? Picker : '' }    
        </div>
      </div>
    )
  }

  private handleClickOutComponent = (e:MouseEvent) => {
    if(this.wrapperRef.current && !this.wrapperRef.current.contains(e.target)){
      this.setState({
        ...this.state,
        showColorPicker: false
      })
    }
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    onThemeColorChange: (color: string) => dispatch(UPDATE_THEME(color))
  }
}

export default connect(null, mapDispatchToProps)(ColorInputPicker);