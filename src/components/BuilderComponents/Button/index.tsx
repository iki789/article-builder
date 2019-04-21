import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, Button as BButton } from 'react-bootstrap';

export class ButtonControl extends React.Component<IButtonProps, IButtonState>{
  
  public state: IButtonState = {
    label: this.props.label,
    url: this.props.url || "#",
    type: this.props.type || "default"
  }

  public handleChange = (e: React.ChangeEvent<any>) => {
    this.setState({
      ...this.state,
      label: e.target.value
    })
    return e.target.value;
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
                onChange={this.handleChange} 
                placeholder="View now" />
            </Form.Group>
            <Form.Group controlId="ButtonLocation">
              <Form.Label>URL Location</Form.Label>
              <Form.Control type="text" placeholder="https://foobar.com" />
            </Form.Group>
            <Form.Group controlId="ButtonType">
              <Form.Label>Type</Form.Label>
              <Form.Control as="select">
                <option>Default</option>
                <option>Outlined</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="ButtonFullWidth">
              <Form.Check custom={true} type="checkbox" label="Button is full-width" />
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

connect()(ButtonControl);

interface IButtonProps{
  label: string,
  url?: string,
  type?: 'default' | 'outlined',
  block?: boolean 
}

interface IButtonState{
  label: string,
  url?: string,
  type?: 'default' | 'outlined',
  block?: boolean
}

export const Button:React.StatelessComponent<IButtonProps> = (props) => {
  return (
    <BButton>
      {props.label}
    </BButton>
  );
} 