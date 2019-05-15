import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form } from 'react-bootstrap';
import { ICol } from 'src/containers/Preview/Preview';
import { UPDATE_COL } from 'src/containers/Preview/store/actions';
import './embed.scss';

export const Embed: React.FunctionComponent<IEmbed> =  (props: IEmbed) => {
  return (
    <React.Fragment>
      <div className="embed-wrapper" dangerouslySetInnerHTML={{__html: props.code}} />
    </React.Fragment>
  )
}

interface IEmbed{
  code: string
}

class EmbedControl extends React.Component<IEmbedControlProps, IEmbedControlState>{
  
  public state = { 
    value: this.props.activeCol.data.code
  }

  public handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      value: e.target.value
    }, () => {
      const col = this.props.activeCol;
      col.data.code = this.state.value;
      this.props.updateCol(col);
    })
  }

  public render(){
    return (
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Code</Form.Label>
            <Form.Control 
              as="textarea" 
              placeholder="Paste your code here" 
              onChange={this.handleChange} 
              value={this.state.value} />
          </Form.Group>
        </Col>
      </Row>
    )
  }
}

interface IEmbedControlProps{
  code: string,
  activeCol: ICol,
  updateCol: (col: ICol) => void
}

interface IEmbedControlState{
  value: string
}

const mapStateToProps = (state:any) => {
  return {
    activeCol: state.rootReducer.activeCol
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    updateCol: (col:ICol) => dispatch(UPDATE_COL({...col}))
  }
}

const EmbedControlConnected = connect(mapStateToProps, mapDispatchToProps)(EmbedControl);

export { EmbedControlConnected as EmbedControl };