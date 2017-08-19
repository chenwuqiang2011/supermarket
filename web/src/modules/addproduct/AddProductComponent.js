import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Form,Table,Button,Select,Pagination,Layout,Input,Checkbox,Message,Switch,DatePicker,TimePicker} from 'element-react';
import SpinnerComponent from '../spinner/SpinnerComponent';
import './AddProduct.scss';
import * as AddProductAction from './AddProductAction';

import $ from '../../libs/jquery-3.2.1.min.js';

class AddProductComponent extends React.Component{
	constructor(props) {
	  super(props);

	  this.state = {
	    options: [{
	      value: '米类',
	      label: '米类'
	    }, {
	      value: '酒类',
	      label: '酒类'
	    }, {
	      value: '饮料类',
	      label: '饮料类'
	    }, {
	      value: '日化类',
	      label: '日化类'
	    }, {
	      value: '油类',
	      label: '油类'
	    }],
	    value: '',
	    form:{
	    	barCode:'',
	    	goodsName:'',
	    	goodsId:'',
	    	classify:'',
	    	unit:'',
	    	salePrice:'',
	    	purchasingCost:'',
	    	specification:'',
	    	supplier:'',

	    }
	  };
	}

  	add() {
  		this.props.addproduct(this.state.form).then(function(res){
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
	  	<div className="addproduct">
	  		<h1>商品信息录入</h1>
	  		<Form>
	  			<Form.Item label="商品条码(必填)：" required>
		  			<Input 
		  			onChange={this.onChange.bind(this,'barCode')} 
		  			value={this.state.form.barCode}/>
	  			</Form.Item>
	  			<Form.Item label="商品名称(必填)：" required>
		  			<Input 
		  			onChange={this.onChange.bind(this,'goodsName')} 
		  			value={this.state.form.goodsName}/>
	  			</Form.Item>
	  			<Form.Item label="商品货号：">  
		  			<Input 
		  			onChange={this.onChange.bind(this,'goodsId')} 
		  			value={this.state.form.goodsId} />
	  			</Form.Item>
	  			<Form.Item label="商品类别：">
		  			<Select
		  			ref="select" 
		  			value={this.state.value} 
		  			className="select"
		  			onChange={this.onChange.bind(this,'classify')}
		  			clearable={true}>
				    {
				    	this.state.options.map(el => {
				          return <Select.Option key={el.value} label={el.label} value={el.value} />
				        })
				    }
	    			</Select>
    			</Form.Item>
	  			<Form.Item label="单位：">
		  			<Input 
		  			onChange={this.onChange.bind(this,'unit')} 
		  			value={this.state.form.unit}/>
	  			</Form.Item>
	  			<Form.Item label="零售价：" required>
		  			<Input 
		  			onChange={this.onChange.bind(this,'salePrice')} 
		  			value={this.state.form.salePrice}/>
		  		</Form.Item>
	  			<Form.Item label="进货价：">
		  			<Input 
		  			onChange={this.onChange.bind(this,'purchasingCost')} 
		  			value={this.state.form.purchasingCost} />
	  			</Form.Item>
	  			<Form.Item label="规格：">
		  			<Input 
		  			onChange={this.onChange.bind(this,'specification')} 
		  			value={this.state.form.specification} />
	  			</Form.Item>
	  			<Form.Item label="供应商Id">
		  			<Input 
		  			onChange={this.onChange.bind(this,'supplierId')} 
		  			value={this.state.form.supplierId} />
		  		</Form.Item>
	  			<p><Button type="primary" 
		  			className="add" 
		  			onClick={this.add.bind(this)}>确认录入
		  		</Button></p>
	  		</Form>
	  		<SpinnerComponent show={this.props.loading}/>
	  	</div>
	  )
	}
}

const mapStateToProps = state => {
    return {
    	loading: state.products.loading,
    	data: state.products.data,
    }
}

export default	connect(mapStateToProps,AddProductAction)(AddProductComponent) 