import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import {Form,Input,Table,Button,Select} from 'element-react';
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
		          return <span><Button type="text" size="small">删除</Button><Button type="text" size="small">编辑</Button></span>
		        }
		      }
		    ],
		    options:[{
		    	value:'选项1',
		    	label:10
		    },
		    {
		    	value:'选项2',
		    	label:15
		    },
		    {
		    	value:'选项3',
		    	label:20
		    },
		    {
		    	value:'选项4',
		    	label:50
		    }]
		   
		   
		}
	}
	componentWillMount(){
		console.log(this)
		this.props.products({qty:20}).then(function(res){
		});
		
	}
	onChange() {
		var val = document.querySelector('.pageNum div input').value; 
  		this.props.products({qty:val}).then(function(res){
		});
	}
	search(){
		var search = document.querySelector('.search').value;
		this.props.productsSearch(search).then(function(res){
		
		});
	}
	render() {
	  return (
	  	<div>
	  	<Form>
	  		<Form.Item>
  			<Input placeholder="请输入条码/商品名" className="search" append={<Button type="primary" icon="search" onClick={this.search.bind(this)}>搜索</Button>} />
  			<Select className="pageNum" value = {this.state.value} onChange={this.onChange.bind(this)}>{
  				this.state.options.map(el => {
          			return <Select.Option  key={el.value} label={el.label} value={el.value} />
        		})
  			}
  			</Select>
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
    	loading: state.products.loading,
    	data: state.products.data
 
    }
}

export default connect(mapStateToProps, ProductsAction)(ProductsComponent)