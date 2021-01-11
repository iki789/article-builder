import * as React from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import "./Preview.scss";
import { ComponentMount } from "../../components/BuilderComponents";
import { CLEAR_ROWS } from "./store/actions";

class Preview extends React.Component<IPreviewProps, IPreviewState> {
  public toolbar: React.RefObject<HTMLDivElement>;
  public PreviewWrapper: React.RefObject<HTMLDivElement>;

  public constructor(props: IPreviewProps) {
    super(props);
    this.toolbar = React.createRef();
    this.PreviewWrapper = React.createRef();
  }

  public componentDidUpdate(prevProps: IPreviewProps) {
    if (prevProps.state.rows.length !== this.props.state.rows.length) {
      if (this.PreviewWrapper.current) {
        this.PreviewWrapper.current.scrollTop = this.PreviewWrapper.current.scrollHeight;
      }
    }
  }

  public clearArticle = () => {
    if (this.toolbar.current) {
      this.toolbar.current.style.display = "none";
    }
    this.props.clearRows();
  };

  public render() {
    const settings = this.props.state.settings;
    const styles = {
      paddingLeft: `${settings.margins.left}%`,
      paddingRight: `${settings.margins.right}%`,
      paddingTop: `${settings.margins.top}%`,
      paddingBottom: `${settings.margins.bottom}%`,
      fontFamily: `${settings.fonts.family}, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      fontSize: `${settings.fonts.size}rem`,
      color: `${settings.fonts.color}`,
    };
    return (
      <div>
        <div ref={this.toolbar} className="create-article-toolbar">
          <button onClick={this.clearArticle}>Create New Article</button>
        </div>
        <div ref={this.PreviewWrapper} style={styles} className="Preview">
          {this.props.state.rows.map((row, i) => {
            return (
              <Row key={i}>
                {row.cols.map((col) => {
                  return (
                    <Col key={col.id}>
                      <ComponentMount
                        colId={col.id}
                        type={col.type}
                        data={col.data}
                      />
                    </Col>
                  );
                })}
              </Row>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    state: state.PreviewReducer,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    clearRows: () => dispatch(CLEAR_ROWS()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);

export interface IPreviewState {
  settings: ISettings;
  rows: IRow[];
  colCount: number;
}

export interface ISettings {
  fonts: {
    color: string;
    family: string;
    size: number;
  };
  theme: string;
  margins: {
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
}

export interface IPreviewProps {
  state: IPreviewState;
  clearRows: () => void;
}

export interface IRow {
  cols: ICol[];
}

export interface ICol {
  id: number;
  type: string;
  data: any;
  responsive?: { sm?: number; md?: number; lg?: number };
}
