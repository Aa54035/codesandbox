import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  onsubmit(e) {
    alert("value has been entered " + this.state.value);
    e.preventDefault();
  }

  onclickvalue(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form onSubmit={(e) => this.onsubmit(e)}>
        <label>
          Name :{" "}
          <input
            type="text"
            value={this.state.value}
            onChange={(e) => this.onclickvalue(e)}
          />
        </label>

        <input type="submit" value="Submit" />
        <h1> value entered in {this.state.value}</h1>
      </form>
    );
  }
}

export default App;
