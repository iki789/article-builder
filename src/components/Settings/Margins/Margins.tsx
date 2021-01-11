import * as React from "react";
import { Form } from "react-bootstrap";
import "./Margins.scss";
import * as MarginIcon from "../../../assets/icons/ic_border_right_48px.svg";

class Margins extends React.Component<IMarginsProps, IMargins> {
  public state: IMargins = {
    left: this.props.margins.left || 1,
    top: this.props.margins.top || 1,
    right: this.props.margins.right || 1,
    bottom: this.props.margins.bottom || 1,
  };

  public handleChange = (field: string, e: React.ChangeEvent<any>) => {
    this.setState(
      {
        ...this.state,
        [field]: e.target.value,
      },
      () => {
        this.updateMargins();
      }
    );
    return e.target.value;
  };

  public updateMargins = () => {
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
  };

  public render() {
    return (
      <div className="Marginswrapper">
        <Form.Label className="w-100">Margins</Form.Label>
        <Form.Group className="d-flex align-items-center">
          <Form.Label className="mr-2">
            <img src={MarginIcon} className="MarginLeft" />
          </Form.Label>
          <Form.Control
            type="number"
            step="0.1"
            min="1"
            value={this.state.left.toString()}
            onChange={this.handleChange.bind(this, "left")}
            placeholder="1.0"
          />
        </Form.Group>
        <Form.Group className="d-flex align-items-center">
          <Form.Label className="mr-2">
            <img src={MarginIcon} className="MarginRight" />
          </Form.Label>
          <Form.Control
            type="number"
            step="0.1"
            min="1"
            value={this.state.right.toString()}
            onChange={this.handleChange.bind(this, "right")}
            placeholder="1.0"
          />
        </Form.Group>
        <Form.Group className="d-flex align-items-center">
          <Form.Label className="mr-2">
            <img src={MarginIcon} className="MarginTop" />
          </Form.Label>
          <Form.Control
            type="number"
            step="0.1"
            min="1"
            value={this.state.top.toString()}
            onChange={this.handleChange.bind(this, "top")}
            placeholder="1.0"
          />
        </Form.Group>
        <Form.Group className="d-flex align-items-center">
          <Form.Label className="mr-2">
            <img src={MarginIcon} className="MarginBottom" />
          </Form.Label>
          <Form.Control
            type="number"
            step="0.1"
            min="1"
            value={this.state.bottom.toString()}
            onChange={this.handleChange.bind(this, "bottom")}
            placeholder="1.0"
          />
        </Form.Group>
      </div>
    );
  }
}

interface IMarginsProps {
  margins: IMargins;
  onChange?: (margins?: IMargins) => IMargins;
}

export interface IMargins {
  left: number;
  top: number;
  bottom: number;
  right: number;
}

export default Margins;
