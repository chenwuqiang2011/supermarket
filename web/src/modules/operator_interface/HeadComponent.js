import React from "react";
import "./header.scss";

class HeadComponent extends React.Component{
	render(){
		return (

				<div className = "header">
				
					<img src = "src/libs/imgs/logo.png" />
				
					<div className = "title">
						<h1>千锋隔壁超市收银系统</h1>
					</div>
					<div className = "user">
						<div>
							<span>操作员：</span>
							<span className = "username"></span>
						</div>
					</div>
				</div>

		)
	}
}
export default HeadComponent;