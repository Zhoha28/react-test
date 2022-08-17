// React is loaded and is available as React and ReactDOM
// imports should NOT be used

import ReactDOM from "react-dom";
import React from "react";

const sampleOptions = [
  { id: "753", title: "This is the first option" },
  { id: "035", title: "This is the second option" }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    const { options } = props;
    this.state = { options, displayOptions: true };
  }

  displayOptions() {
    this.setState({
      options: this.state.options,
      displayOptions: !this.state.displayOptions
    });
  }

  render() {
    var options = null;
    if (this.state.displayOptions) {
      options = (
        <ul id="options">
          {this.state.options.map((option) => (
            <li key={option.id}>{option.title}</li>
          ))}
        </ul>
      );
    }
    return (
      <div>
        <button onClick={this.displayOptions}>
          {this.state.displayOptions ? "Hide options" : "Show options"}
        </button>
        {options}
      </div>
    );
  }
}

document.body.innerHTML = "<div id='root'> </div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App options={sampleOptions} />, rootElement);