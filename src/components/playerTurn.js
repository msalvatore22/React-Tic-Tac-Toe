import React, { Component } from 'react';
import Player from './choosePlayer'

class PlayerTurn extends Component {
  handleSetPlayer(e){
    this.props.setPlayer(e)
  }

  renderPlayer(){
    if(this.props.winner){
      return <h2>Winner is {this.props.winner}</h2>
    } else {
      return this.props.player ? 
      <h2>Next Player is {this.props.player}</h2> :
      <Player player={(e) => this.handleSetPlayer(e)} />
    }
  }
  
  render(){
    return (
      <div>
        {this.renderPlayer()}
      </div>
    )
  }
}

export default PlayerTurn;