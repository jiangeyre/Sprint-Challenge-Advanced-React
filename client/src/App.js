import React, { Component } from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  constructor(){
    super();
    this.state = {
      players: [],
    }
  }

  componentDidMount(){
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(res => this.setState({ players: res }))
      .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App">
        <Typography variant="h1" color="primary" className="head">Womens World Cup Players</Typography>
        <PlayerList players={this.state.players} /> 
      </div>
    );
  }
}

export default App;
