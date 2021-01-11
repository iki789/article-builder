import React from "react";
import { connect } from "react-redux";
import { UPDATE_COL } from "../../../store/actions/app";
import { default as QuillEditor } from "../../UI/TextEditor/TextEditor";
import { ICol } from "src/containers/Preview/Preview";

class TextEditor extends React.Component<IEditorProps> {
  public handleChange = (value: string) => {
    const col = this.props.activeCol;
    col.data = value;
    this.props.onUpdate(col);
    return value;
  };

  public render() {
    return (
      <QuillEditor
        onChange={this.handleChange}
        value={this.props.activeCol.data}
      />
    );
  }
}

interface IEditorProps {
  value: React.ReactElement<any>;
  activeCol: ICol;
  onUpdate: (Col: ICol) => any;
}

const mapStateToProps = (state: any) => {
  return {
    activeCol: state.rootReducer.activeCol,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onUpdate: (col: ICol) => dispatch(UPDATE_COL({ ...col })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
