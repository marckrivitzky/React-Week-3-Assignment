import React from "react";
import NewRoomForm from "./newRoomForm";

export default class House extends React.Component{
	render(){
		const rooms = this.props.data.rooms
			? this.props.data.rooms.map((room, index) => 
				<li key={index}>
					{room.name} Area: {room.area}
					<br />
					<button 
						className="btn btn-danger"
						onClick={e =>
						this.props.deleteRoom(e, this.props.data, room)
					}>Delete</button><br />
				</li>)
			: null;
			return (
				<div>
					<br />
					<h1>{this.props.data.name}</h1>
					<br />
					<ul>
						{rooms}
					</ul>
					<NewRoomForm
						addRoom={this.props.addRoom} data={this.props.data} />
				</div>
			)
	}
}