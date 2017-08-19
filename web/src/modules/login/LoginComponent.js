import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as loginActions from './LoginAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import { Input, Button, Message } from "element-react";
import {hashHistory} from 'react-router';
import "./Login.scss";

class LoginComponent extends React.Component {
    constructor(props){
        super(props)
    }

    loginHandler(){
        var _username = document.getElementById("username").value;
        var _password = document.getElementById("password").value;
        var _access = "后台";

        if(!_username){
            Message({
                duration: 2000,
                message: '用户名不能为空',
                type: 'warning'
            });
            return;
        }else if(!_password){
            Message({
                duration: 2000,
                message: '密码不能为空',
                type: 'warning'
            });
            return;
        }else{

            this.props.login(_username, _password, _access).then(response=>{
                console.log("login", this.props)
                // console.log(response.response,this.props.data);
                var res = this.props.data.statu;
                if(res){
                    var username = this.props.data.data[0].name;
                    Message({message: '恭喜你，登录成功！', duration: 2000, type: 'success',onClose: function(){
                         
                         //跳转到主页；
                        hashHistory.push("products");}
                    });

                    //改变登录状态；
                
                    this.props.update_username(username);
                }else{
                    Message.error('用户名或者密码错误！');
                    return;
                }
            });
        }
  
    }
    
    render(){
        return(
            <div className="login">
                <h2>后台系统管理用户登录</h2>
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