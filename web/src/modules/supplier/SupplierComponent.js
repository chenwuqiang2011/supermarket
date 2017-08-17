import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Form,Input,Table,Button,Select,Pagination} from 'element-react';
import SpinnerComponent from '../spinner/SpinnerComponent';
import './Supplier.scss';
import * as SupplierAction from './SupplierAction';

class SupplierComponent extends React.Component{
	constructor(props) {
  		super(props);

		this.state = {
		    columns: [
		      {
		        label: "供应商Id",
		        prop: "supplierId",
		        width: 100,
		        fixed: 'left'
		      },
		      {
		        label: "供应商名称",
		        prop: "supplierName",
		        width: 230
		      },
		      {
		        label: "联系方式",
		        prop: "phone",
		        width: 160
		      },
		      {
		        label: "联系人",
		        prop: "linkman",
		        width: 80
		      },
		      {
		        label: "地址",
		        prop: "address",
		        width: 300
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
		        label: "操作",
		        prop: "zip",
		        fixed: 'right',
		        width: 100,
		        render: ()=>{
		          return <span><Button type="text" size="small">删除</Button><Button type="text" size="small">编辑</Button></span>
		        }
		      }
		    ]
		    
		}
	}
	componentWillMount(){
		this.props.supplier().then(function(res){
		});
		
	}
	
	onChange(){

	}

	CurrentChange(){

	}

	search(){
		var search = document.querySelector('.search input').value;
		console.log(search)
		this.props.searchsupplier(search).then(function(res){
			//console.log(res)
		});
	}

	render() {
	  return (
	  	<div>
	  	<Form>
	  		<Form.Item>
  			<Input placeholder="请输入供应商Id/供应商名称" className="search" append={<Button onClick={this.search.bind(this)} type="primary" icon="search">搜索</Button>} />
  			</Form.Item>
	  	</Form>
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
        	ref = "pageNo"
        	className="pageNum" 
        	onSizeChange={this.onChange.bind(this)} 
        	layout="total, sizes, prev, pager, next, jumper" 
        	total={13} 
        	pageSizes={[10]} 
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
    	loading: state.supplier.loading,
    	data: state.supplier.data
    }
}

export default connect(mapStateToProps, SupplierAction)(SupplierComponent)