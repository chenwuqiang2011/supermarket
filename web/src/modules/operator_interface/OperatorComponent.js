import React from "react";
import HeadComponent from "./HeadComponent";
import ListComponent from "./ListComponent";

import "./header.scss";

class Operator extends React.Component{
	render(){
		return (
			<div className = "parent">
				<HeadComponent />
				<div className = "content">
					<div className = "content_left"><ListComponent/></div>
					<div className = "content_right">{this.props.children}</div>
				</div>
			</div>

		)
	}
}
export default Operator;