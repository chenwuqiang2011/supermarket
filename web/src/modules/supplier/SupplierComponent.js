import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Form,Input,Table,Button,Select} from 'element-react';
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
	
	render() {
	  return (
	  	<div>
	  	<Form>
	  		<Form.Item>
  			<Input placeholder="请输入供应商Id/供应商名称" className="search" append={<Button type="primary" icon="search">搜索</Button>} />
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
	    <div className="changePage">
		    <Button>上一页</Button>
		    <Input	className="scan"/>
		    <Button>下一页</Button>
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