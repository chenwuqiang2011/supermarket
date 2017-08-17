import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as postActions from './postAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import { Input, Button, Message } from "element-react";
import {hashHistory} from 'react-router';
import "./post_login.scss"

class PostComponent extends React.Component{
	constructor(props){
        super(props)
    }
    postHandler(){
    	 var post_username = document.getElementById("post_username").value;
        var post_password = document.getElementById("post_password").value;
        var post_access = "前台";

        if(!post_username){
            Message({
                duration: 2000,
                message: '用户名不能为空',
                type: 'warning'
            });
            return;
        }else if(!post_password){
            Message({
                duration: 2000,
                message: '密码不能为空',
                type: 'warning'
            });
            return;
        }else{
            
            this.props.login(post_username, post_password, post_access).then(res=>{
            	console.log(res,this.props.data)
            	if(this.props.data.statu){
                    Message({message: '恭喜你，登录成功！', duration: 2000, type: 'success',onClose: function(){
                         //跳转到主页；
                        // document.getElementById("username").value = "";
                        // document.getElementById("password").value = "";
                        // hashHistory.push("add");
                    	}
                    });

                }else{
                    Message.error('用户名或者密码错误！');
                    return;
                }
            	
            });
        }
    }
	render(){
		return (
		 	<div className="post_login">
		 		<h2>收银台用户登录</h2>
                <label htmlFor = "post_username">用户名：<Input type = "text" ref = "post_username" placeholder="请输入用户名" id="post_username" /></label><br />
                <label htmlFor = "post_password">密码：<Input type = "password" ref = "post_password" placeholder="请输入密码" id = "post_password" /></label><br />
                <Button type="primary" onClick={this.postHandler.bind(this)}>登录</Button>
                <SpinnerComponent show={this.props.loading}/>
            </div>
        )
	}
}

const mapStateToProps = state => ({
   data:state.post.data
})
export default connect(mapStateToProps, postActions)(PostComponent)
// export default LoginComponent