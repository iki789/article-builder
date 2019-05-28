import * as React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Image.scss';
import { ICol } from 'src/containers/Preview/Preview';
import { UPDATE_COL } from '../../../store/actions/app';

class ImageControl extends React.Component<IImageFormProps, IImageFormState>{

  public state:IImageFormState = {
    src: this.props.src,
    caption: this.props.caption ? this.props.caption : '',
    url: this.props.url ? this.props.url : ''
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

  public handleCaptionChange = (e: React.ChangeEvent<any>)=> {
    this.setState({
      ...this.state,
      caption: e.target.value
    }, () => {
      this.updateState();
    }); 
    return e.target.value;
  }

  public handleUrlChange = (e: React.ChangeEvent<any>) => {
    this.setState({
      ...this.state,
      url: e.target.value
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
                <Form.Label>Source</Form.Label>
                <Form.Control 
                  autoFocus={true}
                  type="url" 
                  placeholder="https://imgur.com/img.jpg" 
                  value={this.state.src} onChange={this.handleSrcChange} />
              </Form.Group>
              <Form.Group controlId="ImageCaption">
                <Form.Label>Caption</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="A beautiful kitten" 
                  value={this.state.caption} onChange={this.handleCaptionChange} />
              </Form.Group>
              <Form.Group controlId="ImageURL">
                <Form.Label>Location</Form.Label>
                <Form.Control 
                  type="url" 
                  placeholder="https://nerdist.com/article/bulbasaur-best-starter-pokemon/" 
                  value={this.state.url} onChange={this.handleUrlChange} />
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
    onUpdate: (col: ICol) => dispatch(UPDATE_COL({...col}))
  }
}

export const ImageForm = connect(mapStateToProps, mapDispatchToProps)(ImageControl);

export const Image: React.StatelessComponent<IImageProps> = (props:IImageProps) => {
  let img = (
    <React.Fragment>
      <img src={props.src ? props.src : require('./placeholder.svg')} />
      {props.caption ? <p>{props.caption}</p> : null}
    </React.Fragment>
  ) ;
  if(props.url){
    const handleLinkClick = (event: React.MouseEvent):boolean => {
      event.preventDefault();
      return false;
    }
    img = (
      <a href={props.url} target="_blank" onClick={handleLinkClick} >
        { img }
      </a>
    );
  }

  return(
    <div className="image-component">
      { img }
    </div>
  );
}

Image.defaultProps = {
  src: require('./placeholder.svg')
}