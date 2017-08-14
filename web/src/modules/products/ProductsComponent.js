import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import {Table,Button} from 'element-react';

import * as ProductsAction from './ProductsAction'

class ProductsComponent extends React.Component{
	constructor(props) {
  		super(props);

		this.state = {
		    columns: [
		      {
		        label: "日期",
		        prop: "date",
		        width: 150,
		        fixed: 'left'
		      },
		      {
		        label: "姓名",
		        prop: "name",
		        width: 160
		      },
		      {
		        label: "省份",
		        prop: "province",
		        width: 160
		      },
		      {
		        label: "地址",
		        prop: "address",
		        width: 400
		      },
		      {
		        label: "邮编",
		        prop: "zip",
		        width: 120
		      },
		      {
		        label: "操作",
		        prop: "zip",
		        fixed: 'right',
		        width: 100,
		        render: ()=>{
		          return <span><Button type="text" size="small">查看</Button><Button type="text" size="small">编辑</Button></span>
		        }
		      }
		    ],
		    data: [{
		      date: '2016-05-02',
		      name: '王小虎',
		      province: '上海',
		      city: '普陀区',
		      address: '上海市普陀区金沙江路 1518 弄',
		      zip: 200333
		    },{
		      date: '2016-05-02',
		      name: '王小虎',
		      province: '上海',
		      city: '普陀区',
		      address: '上海市普陀区金沙江路 1518 弄',
		      zip: 200333
		    },{
		      date: '2016-05-02',
		      name: '王小虎',
		      province: '上海',
		      city: '普陀区',
		      address: '上海市普陀区金沙江路 1518 弄',
		      zip: 200333
		    },{
		      date: '2016-05-02',
		      name: '王小虎',
		      province: '上海',
		      city: '普陀区',
		      address: '上海市普陀区金沙江路 1518 弄',
		      zip: 200333
		    },{
		      date: '2016-05-02',
		      name: '王小虎',
		      province: '上海',
		      city: '普陀区',
		      address: '上海市普陀区金沙江路 1518 弄',
		      zip: 200333
		    }]
		}
	}
	componentWillMount(){
		this.props.products;
		console.log(this)
	}
	render() {
	  return (
	    <Table
	      style={{width: '100%'}}
	      columns={this.state.columns}
	      data={this.state.data}
	      border={true}
	      height={255}
	    />
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