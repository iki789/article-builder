import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

export const Embed: React.FunctionComponent<IEmbed> =  (props: IEmbed) => {
  return (
    <React.Fragment>
      <div dangerouslySetInnerHTML={{__html: props.code}} />
    </React.Fragment>
  )
}

interface IEmbed{
  code: string
}

class EmbedControl extends React.Component<IEmbed, IEmbedControlState>{
  
  public state = { 
    value: this.props.code
  }

  public handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      value: e.target.value
    })
  }

  public render(){
    return (
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Code</Form.Label>
            <Form.Control as="textarea" placeholder="Paste your code here" onChange={this.handleChange} value={this.state.value} />
          </Form.Group>
        </Col>
      </Row>
    )
  }
}

interface IEmbedControlState{
  value: string
}

export { EmbedControl };