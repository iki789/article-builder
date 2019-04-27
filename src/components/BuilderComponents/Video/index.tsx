import * as React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form } from 'react-bootstrap';
import { UPDATE_COL } from 'src/containers/Preview/store/actions';
import { ICol } from 'src/containers/Preview/Preview';
 
class VideoForm extends React.Component<IVideoControl, IVideoControlState>{
 
  public state: IVideoControlState = {
    src: this.props.src,
    title: this.props.title || "",
    poster: this.props.poster || ""
  }

  public handleChange = (ColField: 'src' | 'title' | 'poster' , e: React.ChangeEvent<any>) => {
    const value = e.target.value;
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
    col.data.src = this.state.src;
    col.data.title = this.state.title;
    col.data.poster = this.state.poster;
    this.props.updateCol(col);
  }

  public render() {
    return(
      <React.Fragment>
        <Row>
          <Col>
            <h3>Video</h3>
            <form>
              <Form.Group controlId="videoSrc">
                <Form.Label>Source</Form.Label>
                <Form.Control 
                  type="text" 
                  value={this.state.src}
                  onChange={this.handleChange.bind(this, 'src')}
                  placeholder="https://imgur.com/video.mp4" />
              </Form.Group>
              <Form.Group controlId="videoSrc">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                  type="text" 
                  value={this.state.title}
                  onChange={this.handleChange.bind(this, 'title')}
                  placeholder="Video Title" />
              </Form.Group>
              <Form.Group controlId="vidTitle">
                <Form.Label>Poster</Form.Label>
                <Form.Control 
                  type="text" 
                  value={this.state.poster}
                  onChange={this.handleChange.bind(this, 'poster')}
                  placeholder="https://imgur.com/img.jpg" />
              </Form.Group>
            </form>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

interface IVideoControl{
  src: string,
  title?: string,
  poster?: string,
  activeCol: ICol,
  updateCol: (Col: ICol) => void
}

interface IVideoControlState{
  src: string,
  title: string,
  poster: string
}

const mapStateToProps = (state: any) => {
  return {
    activeCol: state.rootReducer.activeCol
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateCol: (col: ICol) => dispatch(UPDATE_COL(col))
  }
}

export const VideoControl = connect(mapStateToProps, mapDispatchToProps)(VideoForm);

export { default as Video} from './video';