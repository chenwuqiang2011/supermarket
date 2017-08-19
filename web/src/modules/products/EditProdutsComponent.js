import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Message, Table, Button, Select, Input, MessageBox, Form, Layout} from 'element-react'
import './EditProducts.scss'
import SpinnerComponent from '../spinner/SpinnerComponent'
import * as ProductsAction from './ProductsAction'


class EditProductsComponent extends React.Component {
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
        
            var pageNo = this.props.state.products.pageNo;
            var qty    = this.props.state.products.qty
           
            this.props.update({table:'products',editData:data, page: pageNo,qty:qty}).then(()=>{
                Message({ type: 'success', message: '修改成功!'});
            });
        }).catch(() => {
            Message({type: 'info', message: ' 已取消'});
        }).then(() => {
            this.props.editBox({type: 'close'})
        });
                
    }
    
    render(){
        if(!this.props.status){
            return null
        }
        return(
            <div className="edit-component" ref="child" >
                <div className="close">
                    <Layout.Row>
                        <Layout.Col span="6" offset="9"><div className="grid-content">商品信息编辑</div></Layout.Col>
                        <Layout.Col span="2" offset="7"><div className="grid-content btn" onClick={this.editBox.bind(this, {type: 'close', status: false})}>&times;</div></Layout.Col>
                    </Layout.Row>
                </div>
                <Form labelPosition={this.props.labelPosition} labelWidth="100" model={this.state.form} className="demo-form-stacked">
                    <Form.Item label="货号：">
                      <Input disabled value={this.props.editData.goodsId} onChange={(this.onChange).bind(this, 'goodsId')}></Input>
                    </Form.Item>
                    <Form.Item label="商品条码：">
                      <Input value={this.props.editData.barCode} onChange={(this.onChange).bind(this, 'barCode')}></Input>
                    </Form.Item>
                    <Form.Item label="商品名称：">
                      <Input value={this.props.editData.goodsName} onChange={(this.onChange).bind(this, 'goodsName')}></Input>
                    </Form.Item>
                    <Form.Item label="规格：">
                      <Input value={this.props.editData.specification} onChange={(this.onChange).bind(this, 'specification')}></Input>
                    </Form.Item>
                    <Form.Item label="单位：">
                      <Input value={this.props.editData.unit} onChange={(this.onChange).bind(this, 'unit')}></Input>
                    </Form.Item>
                    <Form.Item label="进货价：">
                      <Input value={this.props.editData.purchasingCost} onChange={(this.onChange).bind(this, 'purchasingCost')}></Input>
                    </Form.Item>
                    <Form.Item label="售货价：">
                      <Input value={this.props.editData.salePrice} onChange={(this.onChange).bind(this, 'salePrice')}></Input>
                    </Form.Item>
                    <Form.Item label="类别：">
                      <Input value={this.props.editData.classify} onChange={(this.onChange).bind(this, 'classify')}></Input>
                    </Form.Item>
                    <Form.Item label="供应商Id：">
                      <Input value={this.props.editData.supplierId} onChange={(this.onChange).bind(this, 'supplierId')}></Input>
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

export default connect(mapStateToProps, ProductsAction)(EditProductsComponent)
