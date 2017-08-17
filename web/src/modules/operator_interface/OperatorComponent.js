import React from "react";
import {connect} from 'react-redux'
import { Input, Button, Form, Table, Message, Select, MessageBox, Pagination} from "element-react";

import HeadComponent from "./HeadComponent";
import ListComponent from "./ListComponent";
import login from "../login/LoginReducer"

import "./header.scss";

class Operator extends React.Component{
	componentDidMount(){
		console.log(this.props.store)
		
		this.refs.list.addEventListener("click",()=>{
            if(!this.props.store.login.name){
            	Message({type: "info", message: "请先登录！"});
            	return;
            }
        })
		
	}
	render(){
		return (
			<div className = "parent">
				<HeadComponent />
				<div className = "content">
					<div className = "content_left" ref = "list"><ListComponent/></div>
					<div className = "content_right">{this.props.children}</div>
				</div>
			</div>

		)
	}
}


const mapStateToProps = state => ({
    store:state
})
export default connect(mapStateToProps)(Operator)
