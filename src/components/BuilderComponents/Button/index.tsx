import React from "react";
import { connect } from "react-redux";
import Radium from "radium";
import color from "color";
import { UPDATE_COL } from "../../../containers/Preview/store/actions";
import { Row, Col, Form } from "react-bootstrap";
import { ICol } from "src/containers/Preview/Preview";

export class ButtonForm extends React.Component<
  IButtonControlProps,
  IButtonState
> {
  public state: IButtonState = {
    label: this.props.label,
    url: this.props.url || "",
    block: this.props.block || false,
    type: this.props.type || "default",
  };

  public handleChange = (
    ColField: "label" | "url" | "block" | "type",
    e: React.ChangeEvent<any>
  ) => {
    let value = e.target.value;
    // if checkbox - on
    if (value === "on") {
      value = !this.state.block;
    }
    this.setState(
      {
        ...this.state,
        [ColField]: value,
      },
      () => {
        this.updateCol();
      }
    );
    return value;
  };

  public updateCol = () => {
    const col: ICol = this.props.activeCol;
    col.data.label = this.state.label;
    col.data.url = this.state.url;
    col.data.block = this.state.block;
    col.data.type = this.state.type;
    this.props.updateCol(col);
  };

  public render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <h3>Button</h3>
            <form>
              <Form.Group controlId="ButtonLabel">
                <Form.Label>Label</Form.Label>
                <Form.Control
                  autoFocus={true}
                  type="text"
                  value={this.state.label}
                  onChange={this.handleChange.bind(this, "label")}
                  placeholder="View now"
                />
              </Form.Group>
              <Form.Group controlId="ButtonLocation">
                <Form.Label>URL Location</Form.Label>
                <Form.Control
                  type="url"
                  value={this.state.url}
                  onChange={this.handleChange.bind(this, "url")}
                  placeholder="https://foobar.com"
                />
              </Form.Group>
              <Form.Group controlId="ButtonType">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  as="select"
                  onChange={this.handleChange.bind(this, "type")}
                  value={this.state.type}
                >
                  <option value="default">Default</option>
                  <option value="outlined">Outlined</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="ButtonFullWidth">
                <Form.Check
                  custom={true}
                  type="checkbox"
                  onChange={this.handleChange.bind(this, "block")}
                  checked={this.state.block ? true : false}
                  label="Button is full-width"
                />
              </Form.Group>
            </form>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

interface IButtonControlProps {
  label: string;
  url?: string;
  type?: "default" | "outlined";
  block?: boolean;
  updateCol: (Col: ICol) => void;
  activeCol: ICol;
}

interface IButtonState {
  label: string;
  url?: string;
  type?: "default" | "outlined";
  block?: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    activeCol: state.rootReducer.activeCol,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateCol: (col: ICol) => dispatch(UPDATE_COL({ ...col })),
  };
};

export const ButtonControl = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonForm);

const Button: React.StatelessComponent<IButtonProps> = (
  props: IButtonProps
) => {
  const classes: string[] = ["btn"];

  if (props.block) {
    classes.push("btn-block");
  }
  if (props.type === "default") {
    classes.push("btn-primary");
  }
  if (props.type === "outlined") {
    classes.push("btn-outline-primary");
  }

  const styles = {
    base: {
      backgroundColor: props.type === "default" ? props.theme : "transparent",
      borderColor: props.theme,
      color: props.type === "outlined" ? props.theme : "#fff",
      ":hover": {
        boxShadow: `0 0 0 0.2rem ${color(props.theme).lighten(0.5).hex()}`,
      },
      ":focus": {
        boxShadow: `0 0 0 0.2rem ${color(props.theme).lighten(0.5).hex()}`,
      },
    },
  };

  let btn = (
    <button className={classes.join(" ")} style={styles.base}>
      {props.label}
    </button>
  );

  if (props.url) {
    const preventUrlRedirect = (e: React.MouseEvent<any>) => {
      e.preventDefault();
      return false;
    };
    btn = (
      <a href={props.url} onClick={preventUrlRedirect}>
        {btn}
      </a>
    );
  }

  return <React.Fragment>{btn}</React.Fragment>;
};

interface IButtonProps {
  label: string;
  url?: string;
  type?: "default" | "outlined";
  block?: boolean;
  theme: string;
}

const mapButtonStateToProps = (state: any) => {
  return {
    theme: state.PreviewReducer.settings.theme,
  };
};

const ButtonConnected = connect(mapButtonStateToProps)(Radium(Button));

export { ButtonConnected as Button };
