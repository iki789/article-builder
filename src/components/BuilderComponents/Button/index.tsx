import React from 'react';
import { connect } from 'react-redux';
import { UPDATE_COL } from '../../../containers/Preview/store/actions'
import { Row, Col, Form, Button as BButton } from 'react-bootstrap';
import { ICol } from 'src/containers/Preview/Preview';

export class ButtonForm extends React.Component<IButtonControlProps, IButtonState>{
  
  public state: IButtonState = {
    label: this.props.label,
    url: this.props.url || "",
    block: this.props.block || false,
    type: this.props.type || "default"
  }

  public handleChange = (ColField: "label" | "url" | "block" , e: React.ChangeEvent<any>) => {
    let value = e.target.value;
    // if checkbox - on
    if(value === "on"){
      value = !this.state.block;
    }  
    this.setState({
      ...this.state,
      [ColField]: value
    }, ()=>{
      this.updateCol();
    })
    return value;
  }

  public updateCol = () => {
    const col: ICol = this.props.activeCol;
    col.data.label = this.state.label;
    col.data.url = this.state.url;
    col.data.block = this.state.block;
    this.props.updateCol(col);
  }

  public render(){
    return (
      <React.Fragment>
      <Row>
        <Col>
          <h3>Button</h3>
          <form>
            <Form.Group controlId="ButtonLabel">
              <Form.Label>Label</Form.Label>
              <Form.Control 
                type="text" 
                value={this.state.label}
                onChange={this.handleChange.bind(this, 'label')} 
                placeholder="View now" />
            </Form.Group>
            <Form.Group controlId="ButtonLocation">
              <Form.Label>URL Location</Form.Label>
              <Form.Control 
                type="text" 
                value={this.state.url}
                onChange={this.handleChange.bind(this, 'url')} 
                placeholder="https://foobar.com" />
            </Form.Group>
            <Form.Group controlId="ButtonType">
              <Form.Label>Type</Form.Label>
              <Form.Control as="select">
                <option>Default</option>
                <option>Outlined</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="ButtonFullWidth">
              <Form.Check 
                custom={true} 
                type="checkbox"
                onChange={this.handleChange.bind(this, 'block')} 
                checked={this.state.block ? true : false}
                label="Button is full-width" />
            </Form.Group>
            <Form.Group>
              <BButton>Create</BButton>
            </Form.Group>
          </form>
        </Col>
      </Row>
    </React.Fragment>
    );
  }
}

interface IButtonControlProps{
  label: string,
  url?: string,
  type?: 'default' | 'outlined',
  block?: boolean,
  updateCol: (Col: ICol) => void,
  activeCol: ICol
}

interface IButtonState{
  label: string,
  url?: string,
  type?: 'default' | 'outlined',
  block?: boolean
}

const mapStateToProps = (state: any) => {
  return {
    activeCol: state.rootReducer.activeCol
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateCol: (col:ICol) => dispatch(UPDATE_COL(col))
  }
}

export const ButtonControl = connect(mapStateToProps, mapDispatchToProps)(ButtonForm);

export const Button:React.StatelessComponent<IButtonProps> = (props) => {
  
  let btn = (
    <BButton block={props.block}>
      {props.label}
    </BButton>
  );

  if(props.url){
    const preventUrlRedirect = (e: React.MouseEvent<any>) => {
      e.preventDefault();
      return false;
    }
    btn = (
      <a href={props.url} onClick={preventUrlRedirect}>
        { btn }
      </a>
    )
  }

  return (
    <React.Fragment>
      { btn }
    </React.Fragment>
  );
}


interface IButtonProps{
  label: string,
  url?: string,
  type?: 'default' | 'outlined',
  block?: boolean
}