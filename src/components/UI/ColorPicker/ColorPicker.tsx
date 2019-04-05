import * as React from 'react';

import './ColorPicker.scss';
import { BlockPicker } from 'react-color';

interface IColorInputPicker{
  color: string,
  onChange?: string,
  showColorPicker: boolean
}

class ColorInputPicker extends React.Component<IColorInputPicker>{

  public wrapperRef: React.RefObject<any>;
  // public wrapperRef: any;
  public state:IColorInputPicker = {
    color: 'orangered',
    showColorPicker: false
  }

  public constructor(props: IColorInputPicker){
    super(props);
  }

  public componentDidMount(){
    this.setState({
      ...this.state,
      color: this.props.color,
      showColorPicker: this.props.showColorPicker
    });
    document.addEventListener('mousedown', this.handleClickOutComponent);
    this.wrapperRef = React.createRef();
    console.log(this.wrapperRef)
  }

  public componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClickOutComponent);
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

export default ColorInputPicker;