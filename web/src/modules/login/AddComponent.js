import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as addActions from './AddAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import { Input, Button, Form, Table, Message, Select, MessageBox, Pagination} from "element-react";
import {hashHistory} from 'react-router';
import "./addUser.scss";
import $ from "../../libs/jquery-3.2.1.min";

class AddAction extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pageNo: 1,
            labelPosition: 'right',
            form: {
              id:'',
              name: '',
              password: '',
              access: ''
            },
            columns: [
            {
                label: "ID",
                prop: "id",
                align:"center"
            }, 
            {
                label: "用户名",
                prop: "name",
                align:"center"
            },
            {
                label: "密码",
                prop: "password",
                align:"center"
                
            },
            {
                label: "用户权限",
                prop: "access",
                align:"center"
            },
            {
                label: "操作",
                prop: "edit",
                align:"center",
                render: ()=>{
                  return <div><span className = "edit"><i className="el-icon-edit icon"></i></span>
                            <span className = "delete"><i className="el-icon-delete icon"></i></span></div>
                } 
            }
            ],
            data: []
        };
    }


    onChange(key,value){
        console.log(999,value);
        this.setState({
            form: Object.assign(this.state.form, { [key]: value })
        }); 
    }
    componentWillMount(){
      
        //获取用户；
        this.props.allUser().then(response=>{
            console.log(response,this.props.data);
            console.log(this.props);alert(999)
        });
    }

    componentDidMount(){
        var _this = this.props;
        var _state = this;

        //事件监听；
        $("table").on("click",".delete",function(){
            MessageBox.confirm('是否要删除此用户?', '提示', {
                type: 'warning'
            }).then(() => {

                //获取当前删除用户的信息，更新数据库；
                var currentId = $(this).parents("tr").children().eq(0).text();
                var pageNo = _state.refs.pageNo.state.internalCurrentPage;
   
                //操作数据库删除用户；
                _this.deleteUser(currentId, pageNo).then(function(res){
                    console.log(res)
                    
                    if(res.response.statu){

                        //弹框提示；
                        Message({duration: 2000, type: 'success', message: '删除成功!'});
                    }
                });
  
            }).catch(() => {
                Message({duration: 2000, type: 'info',message: '已取消删除'});
            });   
        }).on("click", ".edit", function(){
            var _id = $(this).parents("tr").children().eq(0).text();
            var _name = $(this).parents("tr").children().eq(1).text();
            var _password = $(this).parents("tr").children().eq(2).text();
            var _access = $(this).parents("tr").children().eq(3).text();
            console.log(_name,_password,_access)
            _state.setState({
                form:{ id: _id, name: _name, password: _password,access: _access}
            })
        })
    }

    onCurrentChange(){
        var pageNo = this.refs.pageNo.state.internalCurrentPage;
        var qty = this.refs.pageNo.state.internalPageSize;
        console.log(qty,pageNo);
        this.props.allUser(pageNo, qty)
        console.log(this.props)
    }
    onSizeChange(){
        var pageNo = this.refs.pageNo.state.internalCurrentPage;
        var qty = this.refs.pageNo.state.internalPageSize;
        console.log(qty,pageNo);
        this.props.allUser(pageNo, qty)
        console.log(this.props)
    }

    query(){
        console.log(this.state.form.access)
        var name = this.state.form.name
        var password = this.state.form.password;
        var access = this.state.form.access;
        console.log(name,password,access)
        if(!name){
            Message({
                duration: 2000,
                message: '用户名不能为空',
                type: 'warning'
            });
            return;
        }else if(!password){
            Message({
                duration: 2000,
                message: '密码不能为空',
                type: 'warning'
            });
            return;
        }else if(!access){
            Message({
                duration: 2000,
                message: '管理权限不能为空',
                type: 'warning'
            });
            return;
        }

        //将所有用户重新发送到后端数据库；
        var _user = JSON.stringify(this.props.data.data);
        console.log(999999,_user)

        this.props.addUser(name, password, access, _user).then(response=>{
            console.log(response,this.props.data)
            var res = this.props.data.statu;
            //提示是否添加成功
            if(res){
                Message({
                    duration: 2000,
                    message: '恭喜你，用户添加成功！',
                    type: 'success'
                });
                //更新用户；
                this.props.allUser()
            }else{
                Message({duration: 2000, message: '对不起，用户已存在！', type: 'error'})
            }
        });
    }

    update(){
        var id = this.state.form.id;
        var name = this.state.form.name;
        var password = this.state.form.password;
        var access = this.state.form.access;
        console.log(name,password,access)
        if(!name){
            Message({
                message: '用户名不能为空',
                type: 'warning'
            });
            return;
        }else if(!password){
            Message({
                message: '密码不能为空',
                type: 'warning'
            });
            return;
        }else if(!access){
            Message({
                message: '管理权限不能为空',
                type: 'warning'
            });
            return;
        }

        //将所有用户重新发送到后端数据库；
        var _user = JSON.stringify(this.props.data.data);
        console.log(999999,_user)

        this.props.updateUser(id, name, password, access, _user).then(response=>{
            console.log(response,this.props.data)
            var res = this.props.data.statu;
            //提示是否添加成功
            if(res){
                Message({
                    message: '恭喜你，用户修改成功！',
                    type: 'success'
                });
                //更新用户；
                this.props.allUser()
            }else{
                Message.error('用户更改失败！')
            }
        });
    }

    render(){
        return (
            <div className = "addUser">
                <div className = "userList">
                    <Table
                       style={{width: '100%'}}
                       columns={this.state.columns}
                       height={550}
                       data={this.props.data}
                    />
                     <Pagination layout="total, sizes, prev, pager, next, jumper" 
                        ref = "pageNo"
                        total={this.props.total} 
                        pageSizes={[10]} 
                        pageSize={10} 
                        currentPage={this.props.pageNo}
                        onSizeChange = {this.onSizeChange.bind(this)}
                        onCurrentChange = {this.onCurrentChange.bind(this)}
                    />
                </div>
                <div className = "add">
                    <Form  labelWidth="100" model={this.state.form} className="demo-form-stacked">
                        <Form.Item label="用户名">
                            <Input className = "name" value = {this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
                        </Form.Item>
                        <Form.Item label="密码">
                            <Input className = "name" value = {this.state.form.password} onChange={this.onChange.bind(this, 'password')}></Input>
                        </Form.Item>
                        <Form.Item label="用户权限">
                            <Select className = "name" value={this.state.form.access} onChange={this.onChange.bind(this, 'access')} placeholder="请选择权限区域">
                                <Select.Option label="前台" value="前台"></Select.Option>
                                <Select.Option label="后台" value="后台"></Select.Option>
                            </Select>
                           
                        </Form.Item>
                        <Button type = "primary" onClick = {this.query.bind(this)}>添加用户</Button>
                        <Button type = "primary" onClick = {this.update.bind(this)}>修改用户</Button>
                    </Form>

                </div>
                 <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.add.loading,
    data:state.add.data,
    total: state.add.total,
    pageNo: state.add.pageNo,
    name: state.add.name,
    store: state
})
export default connect(mapStateToProps, addActions)(AddAction)
// export default AddActionadd