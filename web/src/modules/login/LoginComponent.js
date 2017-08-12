import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as loginActions from './LoginAction'
import SpinnerComponent from '../spinner/SpinnerComponent'

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
        
        this.props.login(this.refs.username.value, this.refs.password.value)
        console.log(this.props)
    }

    render(){
        return(
            <div className="login">
                <ul>
                    <li><input type="text" ref="username"/></li>
                    <li><input type="text" ref="password"/></li>
                    <li><input type="button" value="登录" onClick={this.loginHandler.bind(this)}/></li>
                    <li>{this.props.loading + ''}</li>
                </ul>
                <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.login.loading,
})
export default connect(mapStateToProps, loginActions)(LoginComponent)
// export default LoginComponent