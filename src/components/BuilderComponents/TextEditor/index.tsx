import React from 'react';
import ReactDomServer from 'react-dom/server';
import { connect } from 'react-redux';
import TextEditor from '../../UI/TextEditor/TextEditor';

class Editor extends React.Component<IEditorProps, IEditorState>{

  public state: IEditorState = {
    value: ""
  }

  public componentDidMount(){
    console.log(this.props.activeCol)
    this.setState({
      value: ReactDomServer.renderToString(this.props.activeCol.data)
    })
  }
  
  public handleChange = (value: string) => {
    this.setState({
      value
    });
    return value;
  }
  
  public render() {
    return (
      <TextEditor onChange={this.handleChange} value={this.state.value} />
    );
  }
}

interface IEditorProps{
  value: React.ReactElement<any>,
  activeCol: any
}

interface IEditorState{
  value: string
}

const mapStateToProps = (state: any) => {
  return {
    activeCol: state.rootReducer.activeCol
  }
}

export default connect(mapStateToProps)(Editor);