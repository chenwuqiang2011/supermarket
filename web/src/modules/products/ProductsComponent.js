import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import {Form,Input,Table,Button,Select,Pagination} from 'element-react';
import SpinnerComponent from '../spinner/SpinnerComponent'
import './Products.scss'
import * as ProductsAction from './ProductsAction'


class ProductsComponent extends React.Component{
	constructor(props) {
  		super(props);

		this.state = {
		    columns: [
		      {
		        label: "货号",
		        prop: "goodsId",
		        width: 80,
		        fixed: 'left'
		      },
		      {
		        label: "条码",
		        prop: "barCode",
		        width: 160
		      },
		      {
		        label: "商品名称",
		        prop: "goodsName",
		        width: 160
		      },
		      {
		        label: "规格",
		        prop: "specification",
		        width: 80
		      },
		      {
		        label: "类别",
		        prop: "classify",
		        width: 70
		      },
		      {
		        label: "单位",
		        prop: "unit",
		        width: 70
		      },
		      {
		        label: "进货价",
		        prop: "purchasingCost",
		        width: 80
		      },
		      {
		        label: "销售价",
		        prop: "salePrice",
		        width: 80
		      },
		      {
		        label: "创建时间",
		        prop: "CreateTime",
		        width: 120
		      },
		      {
		        label: "更新时间",
		        prop: "ModifiTime",
		        width: 120
		      },
		      {
		        label: "供应商Id",
		        prop: "supplierId",
		        width: 100
		      },
		      {
		        label: "操作",
		        prop: "zip",
		        fixed: 'right',
		        width: 100,
		        render: ()=>{
		          return <span><Button type="text" size="small" onClick={this.edit.bind(this)}>编辑</Button><Button type="text" size="small"onClick={this.remove.bind(this)} >删除</Button></span>
		        }
		      }
		    ]
		   
		   
		}
	}
	edit(){
		console.log(666);
		
		
	}
	remove(){
		console.log(888)
	}
	componentWillMount(){
		console.log(this)
		this.props.products({qty:10}).then(function(res){
		});
		
	}
	onChange() {
		var val = parseInt(document.querySelector('.pageNum .el-input__inner').value); 
		console.log(val)
  		this.props.products({qty:val}).then(function(res){
		});
	}
	CurrentChange(){
		var val = parseInt(document.querySelector('.pageNum .el-input__inner').value); 
		var current = document.querySelector('.pageNum li.active').innerText;
		this.props.products({page:current,qty:val}).then(res=>{
		});
		
	}
	render() {
	  return (
	  	<div>
	    <Table
	      style={{width: '100%'}}
	      columns={this.state.columns}
	      data={this.props.data}
	      border={true}
	      height={530}
	    />
	    <SpinnerComponent show={this.props.loading}/>
	    <div className="block">
        	<span className="demonstration"></span>
        	<Pagination 
        	className="pageNum" 
        	onSizeChange={this.onChange.bind(this)} 
        	layout="total, sizes, prev, pager, next, jumper" 
        	total={3037} 
        	pageSizes={[10, 15, 20, 50,100]} 
        	pageSize={10} 
        	currentPage={this.props.pageNo} 
        	onCurrentChange={this.CurrentChange.bind(this)} 
        	/>
      	</div>

	    </div>
	  )
	}    

}

const mapStateToProps = state => {
    return {
    	loading: state.products.loading,
    	data: state.products.data,
    	pageNo: state.products.pageNo,

 
    }
}

export default connect(mapStateToProps, ProductsAction)(ProductsComponent)