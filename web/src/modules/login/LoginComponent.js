import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as loginActions from './LoginAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import { Input, Button } from "element-react";
import "./Login.scss";

// @connect(
//     state => ({
//         loading: state.login.loading
//     }),
//     loginActions
// )

class LoginComponent extends React.Component {
    constructor(props){
        super(props)
    }

    loginHandler(){
        // console.log(loginActions)
        // this.router.push('register')
        // if(!this.refs.username){
        //     //show up dialog => username cannot empty
        //     return
        // } else if(!this.refs.password){
        //     //show up dialog => password cannot empty
        //     return 
        // }
        var _username = document.getElementById("username").value;
        var _password = document.getElementById("username").value;
        this.props.login(_username, _password );
        if(this.props.data){
            alert("登录成功！")
        }
        console.log(this.props.data)

    }

    render(){
        return(
            <div className="login">
                <label htmlFor = "username">用户名：<Input type = "text" ref = "username" placeholder="请输入用户名" id="username" /></label><br />
                <label htmlFor = "password">密码：<Input type = "password" ref = "password" placeholder="请输入密码" id = "password" /></label><br />
                <Button type="primary" onClick={this.loginHandler.bind(this)}>登录</Button>
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