import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class NewRoomForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			nameValue: '',
			areaValue: '',
		}
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleAreaChange = this.handleAreaChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleNameChange(e){
		this.setState({
			nameValue: e.target.value
		});
	}

	handleAreaChange(e){
		this.setState({
			areaValue: e.target.value
		});
	}

	handleClick(e){
		this.props.addRoom(e, this.props.data, 
			{name: this.state.nameValue, area: this.state.areaValue}
		);
		this.setState({
			nameValue: '',
			areaValue: '',
		});
	}

	render(){
		return(
			<div>
				<input type="text" placeholder="name" onChange={this.handleNameChange} value={this.state.nameValue}/>
				<input type="text" placeholder="area" onChange={this.handleAreaChange} value={this.state.areaValue}/>
				<button type="button" className="btn btn-success" onClick={this.handleClick}>Add Room</button>
			</div>
		);
	}
}