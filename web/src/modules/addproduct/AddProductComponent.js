import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import {Form,Table,Button,Select,Pagination,Layout,Input,Checkbox,Radio,Switch,DatePicker,TimePicker} from 'element-react';
import SpinnerComponent from '../spinner/SpinnerComponent'
import './AddProduct.scss'
import * as AddProductAction from './AddProductAction'

class AddProductComponent extends React.Component{
	constructor(props) {
  		super(props);
  	}
	render() {
	  return (
	  	<div className="addproduct">
	  		<h1>商品信息录入</h1>
	  		<Form>
	  			<label><span>商品条码:</span><Input /></label>
	  			<label><span>商品名称:</span><Input /></label>
	  			<label><span>商品货号:</span><Input /></label>
	  			<label><span>商品类别:</span><Input /></label>
	  			<label><span>商品条码:</span><Input /></label>
	  			<label><span>商品单位:</span><Input /></label>
	  			<label><span>零售价:</span><Input /></label>
	  			<label><span>进货价:</span><Input /></label>
	  			<label><span>规格:</span><Input /></label>
	  			<label><span>过期时间:</span><Input /></label>
	  		</Form>
	  	</div>
	  )
	}
}
export default AddProductComponent