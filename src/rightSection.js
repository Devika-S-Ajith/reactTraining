import { Component } from "react";
import "./rightSection.css";

class RandomText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: " ",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        text: "Helooooooooo Assignment 2 !!!!!!!!!!!!",
      });
    }, 10000);
  }
  render() {
    return (
      <div className="right-section">
        <h1 className="random">Haiii Byee Helloooo</h1>
      </div>
    );
  }
}

export default RandomText;
