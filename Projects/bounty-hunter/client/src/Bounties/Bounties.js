import React from "react";
import Bounty from "./Bounty";
import "./Bounties.css";
import { connect } from "react-redux";
import { addBounty, getBounties } from "../redux";

class Bounties extends React.Component {
  constructor() {
    super();
    this.state = {
      // this should be a single object because they represent inputs
      fullName: '',
      living: true,
      bountyAmount: '',
      type: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAdd = e => {
    e.preventDefault();
    this.props.addBounty( this.state );
  };

  componentDidMount = () => {
    this.props.getBounties();
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleAdd}>
          <input
            className="input1"
            onChange={this.handleChange}
            type="text"
            value={this.state.name}
            name="fullName"
            placeholder="Full Name"
            required
          />
          <select className="input2" name="living" value={this.state.living} onChange={this.handleChange}>
            <option value="true">Living thing</option>
            <option value="false">Non-living thing</option>
          </select>
          <input
            className="input3"
            onChange={this.handleChange}
            type="text"
            value={this.state.bountyAmount}
            name="bountyAmount"
            placeholder="Bounty Amount"
            required
          />
          <input
            className="input4"
            onChange={this.handleChange}
            type="text"
            value={this.state.type}
            name="type"
            placeholder="Type"
            required
          />
          <button className="addBtn" >
            ADD
          </button>
        </form>
        {this.props.bounties.map(bounty => {
          return <Bounty key={bounty._id}{...bounty} />;
        })}
      </div>
    );
  }
}

export default connect(
  state => state,
  { addBounty, getBounties }
)(Bounties);
