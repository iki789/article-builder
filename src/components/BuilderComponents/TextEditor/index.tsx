import React from 'react';
import ReactDomServer from 'react-dom/server';
import { connect } from 'react-redux';
import TextEditor from '../../UI/TextEditor/TextEditor';
import { ICol } from 'src/containers/Preview/Preview';

class Editor extends React.Component<IEditorProps>{

  public handleChange = (value: string) => {
    
    return value;
  }
  
  public render() {
    return (
      <TextEditor onChange={this.handleChange} value={ReactDomServer.renderToString(this.props.activeCol.data)} />
    );
  }
}

interface IEditorProps{
  value: React.ReactElement<any>,
  activeCol: ICol
}

const mapStateToProps = (state: any) => {
  return {
    activeCol: state.rootReducer.activeCol
  }
}

export default connect(mapStateToProps)(Editor);