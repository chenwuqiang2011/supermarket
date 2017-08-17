import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import {Form,Input,Table,Button,Select,Pagination} from 'element-react';
import SpinnerComponent from '../spinner/SpinnerComponent';
import './Search.scss';
import * as SearchAction from './SearchAction';

class SearchComponent extends React.Component{
	constructor(props) {
	  super(props);

	  this.state = {
	    columns: [
		      {
		        label: "货号",
		        prop: "goodsId",
		        width: 100,
		        sortable:true
		      },
		      {
		        label: "条码",
		        prop: "barCode",
		        width: 160,
		        sortable:true
		      },
		      {
		        label: "商品名称",
		        prop: "goodsName",
		        width: 200,
		        sortable:true
		      },
		      {
		        label: "规格",
		        prop: "specification",
		        width: 80,
		      },
		      {
		        label: "类别",
		        prop: "classify",
		        width: 70,
		      },
		      {
		        label: "单位",
		        prop: "unit",
		        width: 70,
		      },
		      {
		        label: "进货价",
		        prop: "purchasingCost",
		        width: 100,
		        sortable:true
		      },
		      {
		        label: "销售价",
		        prop: "salePrice",
		        width: 100,
		        sortable:true
		      },
		      {
		        label: "创建时间",
		        prop: "CreateTime",
		        width: 120,
		        sortable:true
		      },
		      {
		        label: "更新时间",
		        prop: "ModifiTime",
		        width: 120,
		        sortable:true
		      },
		      {
		        label: "供应商Id",
		        prop: "supplierId",
		        width: 100
		      }
		    ],
	    data: [{
	      date: '',
	      name: '',
	      address: ''
	    }]
	  }
	}

	search() {
		var search = document.querySelector('.search input').value;
		this.props.searchProduct(search).then(function(res){
		});
	}

	render() {

		console.log(this.props)
	  return (
	  	<div>
	  		<Form className="search">
  				<Input placeholder="请输入条码/商品名" className="search" append={<Button type="primary" icon="search" onClick={this.search.bind(this)}>搜索</Button>} />
	  		</Form>
		    <Table
		      style={{width: '100%'}}
		      columns={this.state.columns}
		      data={this.props.data}
		      border={true}
		      height={550}
		    />
	    	<SpinnerComponent show={this.props.loading}/>
	    </div>
	  )
	}
}
const mapStateToProps = state => {

	
    return {
    	loading: state.searchProduct.loading,
    	data: state.searchProduct.data,
    	pageNo: state.searchProduct.pageNo,
    }
}

export default connect(mapStateToProps, SearchAction)(SearchComponent)
