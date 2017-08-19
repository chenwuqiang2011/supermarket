import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Form,Input,Table,Button,Select,Pagination,Message,MessageBox} from 'element-react';
import SpinnerComponent from '../spinner/SpinnerComponent';
import './Supplier.scss';
import * as SupplierAction from './SupplierAction';
import $ from '../../libs/jquery-3.2.1.min.js'
import EditComponent from '../supplier/EditSupplierComponent';

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
		          return <div>
		          <span className = "edit"><i className="el-icon-edit icon"></i></span>
                  <span className = "delete"><i className="el-icon-delete icon"></i></span>
		          </div>
		        }
		      }
		    ]
		}
	}

	//组件挂载前触发
	componentWillMount() {
		this.props.supplier().then(function(res){
		});
		
	}

	//组件挂载后触发
	componentDidMount()	{
		var _this = this.props;
        var _state = this;
		$('table').on('click','.delete',function(){
			var qty = _state.refs.pageNo.state.internalPageSize;
			var current = _state.refs.pageNo.state.internalCurrentPage;
			MessageBox.confirm('是否要删除此用户?', '提示', {
                type: 'warning'
            }).then(() => {
                //删除前端数据；
                $(_state).parents("tr").remove();
                //获取当前删除用户的信息，更新数据库；
                var currentId = $(this).parents("tr").children().eq(0).text();
                _this.deletesupplier(current,qty,currentId).then(function(res){
                	console.log('res',res)
                    if(res.response.status){
                        //弹框提示；
                        Message({
                          type: 'success',
                          message: '删除成功!'
                        })
                    }
                })
            }).catch(() => {
                Message({type: 'info',message: '已取消删除'});
            });
		}).on('click','.edit',function() {
			let index = $(this).closest('tr').index();
			_state.edit(index)
		});
		$('.addBtn').on('click',function() {
			console.log(666)
		})

	}

	//改变多少条数据/页
	onChange(){
		var val = parseInt(document.querySelector('.pageNum .el-input__inner').value); 
  		this.props.supplier({qty:val}).then(function(res){
		});
	}

	//改变页码
	CurrentChange(){
		var val = parseInt(document.querySelector('.pageNum .el-input__inner').value); 
		var current = document.querySelector('.pageNum li.active').innerText;
		this.props.supplier({page:current,qty:val}).then(res=>{
		});
	}

	//模糊搜索供应商
	search(){
		var search = document.querySelector('.search input').value;
		console.log(search)
		this.props.searchsupplier(search).then(function(res){
			//console.log(res)
		});
	}

	edit(idx) {
		let data = this.props.data[idx];
		console.log(data)
        //要修改商品的条码
        let editsupplierId = data.supplierId;
        this.props.editBox({type: 'open',status: true, editData: data})
	}


	render() {
	  return (
	  	<div>
	  	<Form>
	  		<Form.Item>
  			<Input placeholder="请输入供应商Id/供应商名称" className="search" append={<Button onClick={this.search.bind(this)} type="primary" icon="search">搜索</Button>} />
  			<Button type="primary" className="addBtn">新增</Button>
  			</Form.Item>
	  	</Form>
	    <Table
	      style={{width: '100%'}}
	      columns={this.state.columns}
	      data={this.props.data}
	      border={true}
	      height={532}
	    />

	    <SpinnerComponent show={this.props.loading}/>
	    <EditComponent alldata={this.props.data} />
	    <div className="block">
        	<span className="demonstration"></span>
        	<Pagination 
        	ref = "pageNo"
        	className="pageNum" 
        	onSizeChange={this.onChange.bind(this)} 
        	layout="total, sizes, prev, pager, next, jumper" 
        	total={this.props.total} 
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
    	data: state.supplier.data,
    	total:state.supplier.total,
    	pageNo:state.supplier.pageNo
    }
}

export default connect(mapStateToProps, SupplierAction)(SupplierComponent)