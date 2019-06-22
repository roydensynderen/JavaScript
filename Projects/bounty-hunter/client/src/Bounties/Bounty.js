import React from 'react'
import './Bounty.css'
import { connect } from 'react-redux'
import { delBounty, editBounty } from '../redux'

class Bounty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: this.props.fullName,
            living: this.props.living,
            bountyAmount: this.props.bountyAmount,
            type: this.props.type,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitEdits = this.handleSubmitEdits.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    handleDelete = e => {
        e.preventDefault();
        console.log(this.props._id);
        this.props.delBounty(this.props._id);
    }

    handleSubmitEdits = e => {
        e.preventDefault();
        this.props.editBounty( this.props._id, this.state );
        // console.log(this.props._id, this.state)
        alert("Bounty Tracker successfully updated!")
    }

    render() {
        return (
            <div className='body'>
                <form className='wrapper'onSubmit={ this.handleSubmitEdits }>
                    <input type="text"
                           className='bountyInput' 
                           onChange={ this.handleChange } 
                           value={ this.state.fullName } 
                           placeholder={ this.props.fullName } 
                           name='fullName' />
                    <select className='bountyInput' 
                            name="living" 
                            value={ this.state.living } 
                            onChange={ this.handleChange }>
                        <option value='true'>Living thing</option>
                        <option value='false'>Non-living thing</option>
                    </select>
                    <input type="number"
                           className='bountyInput' 
                           onChange={ this.handleChange } 
                           value={ this.state.bountyAmount } 
                           placeholder={ this.props.bountyAmount } 
                           name='bountyAmount' />
                    <input type="text" 
                           className='bountyInput' 
                           onChange={ this.handleChange } 
                           value={ this.state.type } 
                           placeholder={ this.props.type } 
                           name='type' />
                    <div className='btnWrapper'>
                        <button className="submitEditBtn" >EDIT</button>
                        <button type="button"className='delBtn'onClick={ this.handleDelete }>DELETE</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(state => state, { delBounty, editBounty })(Bounty);
