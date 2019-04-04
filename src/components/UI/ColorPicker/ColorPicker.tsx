import * as React from 'react';

import './ColorPicker.scss';
import { BlockPicker } from 'react-color';

interface IColorInputPicker{
  color: string,
  onChange?: string,
  showColorPicker: boolean
}

class ColorInputPicker extends React.Component<IColorInputPicker>{

  public state:IColorInputPicker = {
    color: 'orangered',
    showColorPicker: false
  }

  public constructor(props: IColorInputPicker){
    super(props);
  }

  public componentWillMount(){
    this.setState({
      ...this.state,
      color: this.props.color,
      showColorPicker: this.props.showColorPicker
    });
  }

  public handleColorChange = (e:any) => {
    this.setState({
      ...this.state,
      color: e.hex
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
        <div
          onClick={this.toggleColorPicker}
          style={{backgroundColor: this.state.color}} 
          className="ColorPickerRound"
        />
        {this.state.showColorPicker ? Picker : '' }    
      </div>
    )
  }
}

export default ColorInputPicker;