import * as React from "react";

import "./ToggleButton.scss";
import DownArrow from "../../../assets/icons/dropdown.svg";

interface IToggleButton {
  open: boolean;
  clicked: any;
}

const ToggleButton = (props: IToggleButton) => {
  const classes = ["btn-toggle"];
  if (props.open) {
    classes.push("active");
  }
  return (
    <button onClick={props.clicked} className={classes.join(" ")}>
      <img src={DownArrow} alt="toggle-button" />
    </button>
  );
};

export default ToggleButton;
