import * as React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Image.scss';
import { ICol } from 'src/containers/Preview/Preview';
import { UPDATE_COL } from '../../../store/actions/app';

class ImageControl extends React.Component<IImageFormProps, IImageFormState>{

  public state:IImageFormState = {
    src: this.props.src,
    caption: this.props.caption,
    url: this.props.url
  }

  public updateState = () =>{
    const col = this.props.activeCol;
    col.data.src = decodeURIComponent(this.state.src);
    col.data.caption = this.state.caption;
    col.data.url = this.state.url;
    this.props.onUpdate(col);
  }

  public handleSrcChange = (e: React.ChangeEvent<any>) => {
    this.setState({
      ...this.state,
      src: e.target.value
    }, () => {
      this.updateState();
    });
    return e.target.value;
  }

  public render(){
    return(
      <React.Fragment>
        <Row>
          <Col>
            <h3>Image</h3>
            <form>
              <Form.Group controlId="ImageSrc">
                <Form.Label>Image Source</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="https://imgur.com/img.jpg" 
                  value={this.state.src} onChange={this.handleSrcChange} />
              </Form.Group>
              <Form.Group controlId="ImageCaption">
                <Form.Label>Image Caption</Form.Label>
                <Form.Control type="text" placeholder="A beautiful kitten" />
              </Form.Group>
              <Form.Group controlId="ImageURL">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group>
                <Button>Add Image</Button>
              </Form.Group>
            </form>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

interface IImageFormProps{
  src: string,
  caption?: string,
  url?: string,
  onUpdate: (payload: ICol) => void,
  activeCol: ICol
}

interface IImageFormState{
  src: string,
  caption?: string,
  url?: string,
}

interface IImageProps{
  src?: string,
  caption?: string,
  url?: string
}

const mapStateToProps = (state: any) => {
  return {
    activeCol: state.rootReducer.activeCol
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onUpdate: (col: ICol) => dispatch(UPDATE_COL(col))
  }
}

export const ImageForm = connect(mapStateToProps, mapDispatchToProps)(ImageControl);

export const Image: React.StatelessComponent<IImageProps> = (props:IImageProps) => {
  let img = (
    <div className="image-component">
      <img src={props.src} />
      <p>Credits</p>
    </div>
  ) ;
  if(props.url){
    img = (
      <a href={props.url} target="_blank">
        <img src={props.src} />
      </a>
    );
  }

  return(
    <React.Fragment>
      { img }
    </React.Fragment>
  );
}

Image.defaultProps = {
  src: require('./placeholder.svg')
}