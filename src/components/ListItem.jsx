import React, {Component} from "react";
import {connect} from "react-redux";

class ListItem extends Component {
	handleDeleteListItem = () => {
		this.props.deleteListItem(this.props.id);
	}

	render() {
		return (
			<div>
				{this.props.text}
				<button onClick={this.handleDeleteListItem}>X</button>
			</div>
		);
	}
}

export default connect(
	state => ({
		state: state
	}), 
	dispatch => ({
		deleteListItem: id => {
			dispatch({type: "REMOVE_LIST", payload: id})
		}
	}))(ListItem);