import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChars } from "../actions"

class CharacterListView extends React.Component {

  componentDidMount() {
    this.props.getChars();
  }

  render() {  
    return (
      <div className="CharactersList_wrapper">
        {this.props.fetching && <h2>Loading...</h2>}
        {this.props.error && <div>{`${this.props.error}`}</div>}
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error,
});

export default connect(
  mapStateToProps,
  { getChars }
)(CharacterListView);
