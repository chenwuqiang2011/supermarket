import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Message, Table, Button, Select, Input, MessageBox, Form, Layout} from 'element-react'

import './EditSupplier.scss'
import SpinnerComponent from '../spinner/SpinnerComponent'
import * as SupplierActions from './SupplierAction'


class EditComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    

    onChange(key, value) {

        let newdata = JSON.parse(JSON.stringify(this.props.editData))
        newdata[key] = value;
        this.props.editBox({type: 'open', status: true, editData: newdata})
    }

    editBox(data){
        this.props.editBox(data)
    }
    
    save(){
        MessageBox.confirm('此操作将永久修改该商品信息, 是否继续?', '提示', {type: 'warning'}).then(() => {
            // Message({ type: 'success', message: '修改成功!'});

            let data = this.props.editData;
           /* let alldata = this.props.alldata;
            let editID = data.supplierId;
            let editIdx = null;
            for(var i=0; i<alldata.length; i++){
                if(editID == alldata[i].supplierId){
                    editIdx = i;
                }
            }
            alldata.splice(editIdx, 1, data)*/
        
            console.log('page',this.props.state)
            var pageNo = this.props.state.supplier.pageNo;
           
            this.props.update({table:'supplier',editData:data, page: pageNo}).then(()=>{
                Message({ type: 'success', message: '修改成功!'});
            });
        }).catch(() => {
            Message({type: 'info', message: ' 已取消'});
        }).then(() => {
            this.props.editBox({type: 'close'})
        });
                
    }
    
    //拖拽
    beforeDarg(){
        var event = window.event
        var box = document.getElementsByClassName('edit-component')[0];
        var oWidth = event.clientX - box.offsetLeft;
        var oHeight = event.clientY - box.offsetTop;
        document.onMouseMove = function(evt){
            /*var evt = window.event
            var _left = evt.clientX - oWidth
            var _top = evt.clientY - oHeight
            console.log(666)
            box.style.left = _left + 'px';
            box.style.top = _top + 'px';
            console.log(666)*/
        } 

    }

    render(){
        if(!this.props.status){
            return null
        }
        return(
            <div className="edit-component" ref="child" >
                <div className="close">
                    <Layout.Row>
                        <Layout.Col span="6" offset="9"><div className="grid-content" onMouseDown={this.beforeDarg.bind(this)}>供应商编辑</div></Layout.Col>
                        <Layout.Col span="2" offset="7"><div className="grid-content btn" onClick={this.editBox.bind(this, {type: 'close', status: false})}>&times;</div></Layout.Col>
                    </Layout.Row>
                </div>
                <Form labelPosition={this.props.labelPosition} labelWidth="100" model={this.state.form} className="demo-form-stacked">
                    <Form.Item label="供应商Id：">
                      <Input disabled value={this.props.editData.supplierId} onChange={(this.onChange).bind(this, 'supplierId')}></Input>
                    </Form.Item>
                    <Form.Item label="供应商名称：">
                      <Input value={this.props.editData.supplierName} onChange={(this.onChange).bind(this, 'supplierName')}></Input>
                    </Form.Item>
                    <Form.Item label="联系方式：">
                      <Input value={this.props.editData.phone} onChange={(this.onChange).bind(this, 'phone')}></Input>
                    </Form.Item>
                    <Form.Item label="联系人：">
                      <Input value={this.props.editData.linkman} onChange={(this.onChange).bind(this, 'linkman')}></Input>
                    </Form.Item>
                    <Form.Item label="地址：">
                      <Input value={this.props.editData.address} onChange={(this.onChange).bind(this, 'address')}></Input>
                    </Form.Item>
                    <div className="btn">
                        <Button type="success" size="small" onClick={this.save.bind(this)}>保存</Button>
                        <Button type="primary" size="small" onClick={this.editBox.bind(this, {type: 'close', status: false})}>取消</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        status: state.EditSupplier.status,
        loading: state.EditSupplier.loading,
        editData: state.EditSupplier.editData,
        state: state
    }
}

export default connect(mapStateToProps, SupplierActions)(EditComponent)
