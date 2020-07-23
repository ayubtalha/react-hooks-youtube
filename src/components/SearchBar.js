import React from "react";

class SeacrBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault(); //avoids accidently submiting form when user submits it
    console.log(this.state.term);
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              //   value={console.log(this.state.term)}
              onChange={(e) => this.setState({ term: e.target.value })}
              //   onChange={(e) => console.log({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SeacrBar;
