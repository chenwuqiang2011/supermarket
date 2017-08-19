import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Form,Table,Button,Select,Pagination,Layout,Input,Checkbox,Message,Switch,DatePicker,TimePicker} from 'element-react';
import SpinnerComponent from '../spinner/SpinnerComponent';
import './AddSupplier.scss';
import * as AddSupplierAction from './AddSupplierAction';

import $ from '../../libs/jquery-3.2.1.min.js';

class AddSupplierComponent extends React.Component{
	constructor(props) {
	  super(props);

	  this.state = {
	    value: '',
	    form:{
	    	supplierId:'',
	    	supplierName:'',
	    	phone:'',
	    	linkman:'',
	    	address:'',
	    }
	  };
	}

  	add() {
  		this.props.addSupplier(this.state.form).then(function(res){
  			$("input").val("")
  			Message({
    		message: '恭喜你，商品信息已录入',
    		type: 'success',
  			});

		});
		
  	}

  	onChange(key, value) {
  		this.setState({
    		form: Object.assign(this.state.form, { [key]: value })
  		});
	}

	render() {
	  return (
	  	<div className="addsupplier">
	  		<h1>供应商信息录入</h1>
	  		<Form>
	  			<Form.Item label="供应商Id(必填)：" required >
	  				<Input 
	  				onChange={this.onChange.bind(this,'supplierId')} 
	  				value={this.state.form.supplierId}/>
	  			</Form.Item>
	  			<Form.Item label="供应商名称(必填)：" required>
		  			<Input 
		  			onChange={this.onChange.bind(this,'supplierName')} 
		  			value={this.state.form.supplierName}/>
		  		</Form.Item>
	  			<Form.Item label="联系方式：">
		  			<Input 
		  			onChange={this.onChange.bind(this,'phone')} 
		  			value={this.state.form.phone} />
	  			</Form.Item>
	  			<Form.Item label="联系人：">
		  			<Input 
		  			onChange={this.onChange.bind(this,'linkman')} 
		  			value={this.state.form.linkman}/>
		  		</Form.Item>
	  			<Form.Item label="地址：">
		  			<Input 
		  			onChange={this.onChange.bind(this,'address')} 
		  			value={this.state.form.address}/>
		  		</Form.Item>
	  			<p><Button type='primary' className="add" onClick={this.add.bind(this)}>确认录入</Button></p>
	  		</Form>
	  		<SpinnerComponent show={this.props.loading}/>
	  	</div>
	  )
	}
}

const mapStateToProps = state => {
    return {
    	loading: state.addSupplier.loading,
    	data: state.addSupplier.data,
    }
}

export default	connect(mapStateToProps,AddSupplierAction)(AddSupplierComponent) 