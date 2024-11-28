import { Component } from "react";
import "./rightSection.css";

class RandomText extends Component {
  render() {
    return (
      <div className="right-section">
        <h1 className="random">{this.props.text}</h1>
      </div>
    );
  }
}

export default RandomText;
