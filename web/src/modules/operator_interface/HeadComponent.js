import React from "react";
import {connect} from 'react-redux'
import * as loginActions from '../login/LoginAction'
import "./header.scss";
import { hashHistory } from 'react-router';

class HeadComponent extends React.Component{
	constructor(props){
        super(props);
    }
    componentDidUpdate(){
    	console.log(this.props)
    }
    logout(){
    	
    	hashHistory.push("/login");
    	this.props.signout();
    }
   
	render(){
  
    	
		return (

			<div className = "header">
			
				<img src = "src/libs/imgs/logo.png" />
			
				<div className = "title">
					<h1>千锋隔壁超市收银系统</h1>
				</div>
				<div className = "user">
					<div>
						<span className = "logout" onClick = {this.logout.bind(this)}>{this.props.logout}</span>
						<span>操作员：</span>
						<span className = "username">{this.props.name}</span>
					</div>
				</div>
			</div>

		)
	}
}

const mapStateToProps = state => ({
   name:state.login.name,
   logout:state.login.logout

})
export default connect(mapStateToProps,loginActions)(HeadComponent);


