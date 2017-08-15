import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as addActions from './AddAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import { Input, Button, Form} from "element-react";
import {hashHistory} from 'react-router';
import "./addUser.scss";

class AddAction extends React.Component {
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

    onChange(key,value){
        console.log(999,value);

        this.props.addUser(value).then(function(res){
            console.log(11111111111,res)
        })
        
    }

    onPositionChange(value) {
        this.setState({ labelPosition: value });
    }
    query(){
        console.log(this.props)
    }
    // onChange(key, value) {
    //     this.setState({
    //         form: Object.assign(this.state.form, { [key]: value })
    //     });
    // }

    render(){
        return (
            <div className = "addUser">
                <div className = "userList"></div>
                <div className = "add">
                    <Form  labelWidth="100" model={this.state.form} className="demo-form-stacked">
                        <Form.Item label="用户名">
                            <Input  value = {this.props.name} onChange={this.onChange.bind(this, 'name')}></Input>
                        </Form.Item>
                        <Form.Item label="密码">
                            <Input  onChange={this.onChange.bind(this, 'region')}></Input>
                        </Form.Item>
                        <Form.Item label="用户权限">
                            <Input  onChange={this.onChange.bind(this, 'type')}></Input>
                        </Form.Item>
                        <Button type = "primary" onClick = {this.query.bind(this)}>添加用户</Button>
                        <Button type = "primary">更改用户</Button>
                    </Form>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.login.loading,
    data:state.login.data,
    name:state.login.name
})
export default connect(mapStateToProps, addActions)(AddAction)
// export default AddAction