import React from 'react';
import CharacterList from './components/CharacterList';
import './App.css';
import{connect} from "react-redux";
import {updateFavChar} from "./redux/reducers/showReducer";
import {getStarWarsChars} from "./redux/reducers/starWarsReducer"


class App extends React.Component {

  componentDidMount() {
    this.props.getStarWarsChars();
  }

  handleCharChange = e => {
    this.props.updateFavChar(e.target.value);
  }


  render() {
    return (
      <div>
        <div className="App">
          <input placeholder="Favorite Character" onChange={this.handleCharChange}/>
          <h1>{this.props.favChar}</h1>
        </div>
        <CharacterList />
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
    return{
        favChar: reduxState.showReducer.favChar
    }
}
//bring things in first param, send things out is the second
export default connect(mapStateToProps, {
updateFavChar,
getStarWarsChars
})(App);