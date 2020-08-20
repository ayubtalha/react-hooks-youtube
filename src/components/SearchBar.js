import React, { useState } from "react";

const SeacrBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault(); //avoids accidently submiting form when user submits it
    console.log(term);

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            //   value={console.log(this.state.term)}
            onChange={(e) => setTerm(e.target.value)}
            //   onChange={(e) => console.log({ term: e.target.value })}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SeacrBar;
