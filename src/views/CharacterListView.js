import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChars } from "../actions"

class CharacterListView extends React.Component {

  componentDidMount() {
    this.props.getChars("https://swapi.co/api/people");
  }

  changePage = (e) => {
    e.preventDefault();
    if (e.target.innerHTML === "previous") {this.props.getChars(this.props.previous)}
    if (e.target.innerHTML === "next") {this.props.getChars(this.props.next)}
  }

  render() {  
    return (
      <div className="CharactersList_wrapper">
        {this.props.fetching && <h2>Loading...</h2>}
        {this.props.error && <div>{`${this.props.error}`}</div>}      
        <CharacterList characters={this.props.characters} />
        {!this.props.fetching && this.props.previous && <button onClick={this.changePage}>previous</button>}
        {!this.props.fetching && this.props.next &&<button onClick={this.changePage}>next</button>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error,
  previous: state.charsReducer.previous,
  next: state.charsReducer.next
});

export default connect(
  mapStateToProps,
  { getChars }
)(CharacterListView);
