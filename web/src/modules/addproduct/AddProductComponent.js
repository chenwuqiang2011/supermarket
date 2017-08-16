import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Form,Table,Button,Select,Pagination,Layout,Input,Checkbox,Message,Switch,DatePicker,TimePicker} from 'element-react';
import SpinnerComponent from '../spinner/SpinnerComponent';
import './AddProduct.scss';
import * as AddProductAction from './AddProductAction';

import $ from './jquery3.1.1.js';

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

		});
		Message({
    		message: '恭喜你，商品信息已录入',
    		type: 'success'
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
	  			<p><label><span>商品条码(必填):</span><Input onChange={this.onChange.bind(this,'barCode')} value={this.state.form.barCode}/></label></p>
	  			<p><label><span>商品名称(必填):</span><Input onChange={this.onChange.bind(this,'goodsName')} value={this.state.form.goodsName}/></label></p>
	  			<p><label><span>商品货号:</span><Input onChange={this.onChange.bind(this,'goodsId')} value={this.state.form.goodsId} /></label></p>
	  			<p><label><span>商品类别:</span>
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
    			</label></p>
	  			<p><label><span>商品单位:</span><Input onChange={this.onChange.bind(this,'unit')} value={this.state.form.unit}/></label></p>
	  			<p><label><span>零售价(必填):</span><Input onChange={this.onChange.bind(this,'salePrice')} value={this.state.form.salePrice}/></label></p>
	  			<p><label><span>进货价:</span><Input onChange={this.onChange.bind(this,'purchasingCost')} value={this.state.form.purchasingCost} /></label></p>
	  			<p><label><span>规格:</span><Input onChange={this.onChange.bind(this,'specification')} value={this.state.form.specification} /></label></p>
	  			<p><label><span>供应商Id:</span><Input onChange={this.onChange.bind(this,'supplierId')} value={this.state.form.supplierId} /></label></p>
	  			<p><Button className="add" onClick={this.add.bind(this)}>确认</Button></p>
	  		</Form>
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