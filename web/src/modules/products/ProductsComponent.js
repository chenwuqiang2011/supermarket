import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import {Form,Input,Table,Button,Select,Pagination,MessageBox,message} from 'element-react';
import SpinnerComponent from '../spinner/SpinnerComponent'
import './Products.scss'
import * as ProductsAction from './ProductsAction'
import $ from '../addproduct/jquery3.1.1.js'


class ProductsComponent extends React.Component{
	constructor(props) {
  		super(props);

		this.state = {
		    columns: [
		      {
		        label: "货号",
		        prop: "goodsId",
		        width: 80,
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
		        width: 100,
		        render: ()=>{
		          return <div>
		          <span className = "edit"><i className="el-icon-edit icon"></i></span>
                  <span className = "delete"><i className="el-icon-delete icon"></i></span></div>
		        }
		      }
		    ]
		   
		   
		}
	}

	componentWillMount(){
		this.props.products({qty:10}).then(function(res){
		});
		
	}


	componentDidMount() {
		var _this = this.props;
        var _state = this;
		$('table').on('click','.delete',function(){
			MessageBox.confirm('是否要删除此用户?', '提示', {
                type: 'warning'
            }).then(() => {
                //删除前端数据；
                $(this).parents("tr").remove();
                //获取当前删除用户的信息，更新数据库；
                var currentId = $(this).parents("tr").children().eq(0).text();
                _this.removeProduct(currentId).then(function(res){
                	console.log(666)
                    /*if(res.res.data.status){

                        //弹框提示；
                        Message({
                          type: 'success',
                          message: '删除成功!'
                        })
                    }*/
                })
            })

		})
	}

	onChange() {
		var val = parseInt(document.querySelector('.pageNum .el-input__inner').value); 
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