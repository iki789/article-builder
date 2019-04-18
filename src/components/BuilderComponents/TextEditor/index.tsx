import React from 'react';
import ReactDomServer from 'react-dom/server';
import { connect } from 'react-redux';
import { UPDATE_COL } from '../../../store/actions/app';
import TextEditor from '../../UI/TextEditor/TextEditor';
import { ICol } from 'src/containers/Preview/Preview';

class Editor extends React.Component<IEditorProps>{

  public handleChange = (value: string) => {
    const col = this.props.activeCol;
    col.data = React.createElement(value);
    this.props.onUpdate(col);
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
  activeCol: ICol,
  onUpdate: (Col: ICol) => any
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

export default connect(mapStateToProps, mapDispatchToProps)(Editor);