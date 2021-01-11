import React from "react";
import { Form } from "react-bootstrap";

class Fonts extends React.Component<IFontsProps, IFonts> {
  public state: IFonts = {
    family: this.props.fonts.family || "Roboto",
    size: this.props.fonts.size || 1,
  };

  public handleChange = (
    field: "family" | "size",
    e: React.ChangeEvent<any>
  ) => {
    const val = e.target.value;
    this.setState(
      {
        ...this.state,
        [field]: val,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      }
    );
    return val;
  };

  public render() {
    return (
      <div style={{ display: "flex" }}>
        <Form.Group
          controlId="Fonts"
          style={{ maxWidth: "170px", width: "100%", marginRight: "1rem" }}
        >
          <Form.Label>Fonts</Form.Label>
          <Form.Control
            as="select"
            value={this.state.family}
            onChange={this.handleChange.bind(this, "family")}
          >
            {FontFamilies.map((font) => {
              return (
                <option key={font} value={font}>
                  {font}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="Size" style={{ maxWidth: "100px" }}>
          <Form.Label>Size</Form.Label>
          <Form.Control
            type="number"
            step="0.1"
            min="1"
            max="3"
            value={(this.state.size ? this.state.size : 1).toString()}
            onChange={this.handleChange.bind(this, "size")}
            placeholder="1.2"
          />
        </Form.Group>
      </div>
    );
  }
}

interface IFontsProps {
  family?: string;
  size?: number;
  fonts: IFonts;
  onChange?: (fonts: IFonts) => void;
}

export interface IFonts {
  family?: string;
  size?: number;
}

export default Fonts;

const FontFamilies: any[] = [
  "Aleo",
  "Averia Serif Libre",
  "Bree Serif",
  "Cookie",
  "Fenix",
  "IBM Plex Serif",
  "Lato",
  "Lora",
  "Lustria",
  "Maven Pro",
  "Merriweather",
  "Noto Serif KR",
  "Noto Serif SC",
  "Nunito Sans",
  "Nunito",
  "Old Standard TT",
  "Open Sans",
  "Orbitron",
  "Poppins",
  "PT Serif",
  "PT Serif Caption",
  "Rajdhani",
  "Raleway",
  "Roboto",
  "Roboto Condensed",
  "Roboto Slab",
  "Rokkitt",
  "Source Sans Pro",
  "Source Serif Pro",
  "Teko",
  "Ubuntu",
  "Ubuntu Condensed",
  "Ubuntu Mono",
];
