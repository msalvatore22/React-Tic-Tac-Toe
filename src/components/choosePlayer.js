import React, { Component } from 'react'

class Player extends Component {
  handleSubmit(e){
    e.preventDefault()
    this.props.player(e.target.player.value)
  }
  
  render(){
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Player X
            <input type="radio" name="player" value="X" />
          </label>
          <label>
            Player O
            <input type="radio" name="player" value="O" />
          </label>
          <button type="submit">Start</button>
        </form>
      </div>
    )
  }
}

export default Player;