import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as loginActions from './LoginAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import { Input, Button } from "element-react";
import {hashHistory} from 'react-router';
import "./Login.scss";

class LoginComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            labelPosition: 'right',
            form: {
              name: '',
              region: '',
              type: ''
            }
        };
    }

    loginHandler(){
        var _username = document.getElementById("username").value;
        var _password = document.getElementById("password").value;
        this.props.login(_username, _password).then(response=>{
            console.log(this.props)
            // console.log(response.response,this.props.data);
            var res = this.props.data.statu;
            var username = this.props.data.data[0].name;
            console.log(username)
            if(res){
                alert("登录成功！");
                //跳转到主页；
                hashHistory.push("/");

                //改变登录状态；
            
                this.props.update_username(username);
            }else{
                alert("用户名或者密码错误！");
                return;
            }
        });
  
    }
    
    render(){
        return(
            <div className="login">
                <label htmlFor = "username">用户名：<Input type = "text" ref = "username" placeholder="请输入用户名" id="username" /></label><br />
                <label htmlFor = "password">密码：<Input type = "password" ref = "password" placeholder="请输入密码" id = "password" /></label><br />
                <Button type="primary" onClick={this.loginHandler.bind(this)}>登录</Button>
                <SpinnerComponent show={this.props.loading}/>
            </div>
        
        )
    }
}

const mapStateToProps = state => ({
    loading: state.login.loading,
    data:state.login.data
})
export default connect(mapStateToProps, loginActions)(LoginComponent)
// export default LoginComponent