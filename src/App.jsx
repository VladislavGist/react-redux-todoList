import React, {Component} from "react";
import {Link} from "react-router";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import "./styles/styles.sass";
import "./styles/base.sass";
import "./App.sass";

//redux
import {connect} from "react-redux";

//actions


//components
import ListItem from "./components/ListItem.jsx";

class App extends Component {
	//dispatch methods on event
	onAddList = () => {
		if(this.refs.textarea.value.length === 0) {
			this.props.onErrorHandle("Введите текст");
		} else {
			this.props.onErrorHandle("");
 			this.props.onAddListDispatch(this.refs.textarea.value);
		}
		this.refs.textarea.value = "";
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="container">
					<textarea ref="textarea" />
					<button onClick={this.onAddList}>Add</button>
					{
						<p>{this.props.state.errorReducer}</p>
					}
					{
						this.props.state.firstReducer.map(elem => {
							return <ListItem text={elem.name} key={elem.id} id={elem.id} />
						})
					}
				</div>
			</MuiThemeProvider>
		);
	}
}

//Если компонент хочет получать обновления состояния, или dispatche's он оборачивает себя в connect()
//аргументы: state, dispatch
//state - получаем главный state, по желанию можем его изменить. он будет доступен в this.props.x
//dispatch - все методы в dispatch будут доступны в this.props.x
export default connect((state, ownProps) => 
	({
		state: state,
		ownProps
	}),
	dispatch => ({
		onAddListDispatch: text => {
			let data = {
				id: Date.now(),
				name: text
			};

			dispatch({type: "ADD_LIST", payload: data});
		},
		onErrorHandle: data => {
			dispatch({type: "ON_ERROR_TEXEAREA", payload: data})
		}
	}))(App);