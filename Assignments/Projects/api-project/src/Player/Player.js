import React from "react"
import './Player.css'
import { connect } from "react-redux"
import { getPlayer } from "../redux"

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      player: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      player: e.target.value
      // const { name, value } = e.target;
      //2 values, use [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getPlayer(this.state.player);
  };

  render() {
    const { player } = this.props;
    return (
      <div className='player'>
        <div className='topForm'>
          <div className='topWrapper'>
            <form onSubmit={this.handleSubmit}>
              <input
                value={this.state.player}
                onChange={this.handleChange}
                name="id"
                placeholder="Enter Player ID"
              />
              <button>SEARCH</button>
            </form>
          </div>
        </div>
        
        <div className='main'>
          <img src={player && player.profile.avatarfull} id='avatar' alt='' />
          <div className='mainInfo'>
            <h3 className='mainH3'>Player Name: {player && player.profile.personaname}</h3>
            <h3 className='mainH3'>MMR: {player && player.solo_competitive_rank}</h3>
            <h3 className='mainH3'>Country: {player && player.profile.loccountrycode}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state,
  { getPlayer }
)(Player)
