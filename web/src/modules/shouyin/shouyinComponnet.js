import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Table,Input } from 'element-react';
import '../../static/styles/shouyin.scss';
import * as ShouyinActions from './shouyinAction';

class ShouyinComponent extends React.Component{
	constructor(props) {
		  super(props);
		  this.state = {
		    columns: [
		      {
		        label: "条码",
		        prop: "date",
		      },
		      {
		        label: "品名",
		        prop: "name",
		        width: 400
		      },
		      {
		        label: "单价",
		        prop: "address"
		      },
		      {
		        label: "特价",
		        prop: "address"
		      },
		      {
		        label: "折扣",
		        prop: "address"
		      },
		      {
		        label: "数量",
		        prop: "address"
		      },
		      {
		        label: "金额",
		        prop: "address"
		      }
		    ],
		    data: [{
		      date: '',
		      name: '',
		      address: ''
		    }, {
		      date: '',
		      name: '',
		      address: ''
		    }, {
		      date: '',
		      name: '',
		      address: ''
		    }, {
		      date: '',
		      name: '',
		      address: ''
		    }, {
		      date: '',
		      name: '',
		      address: ''
		    }, {
		      date: '',
		      name: '',
		      address: ''
		    }, {
		      date: '',
		      name: '',
		      address: ''
		    }]
		}
	}
	collect(){
		var barCode = document.getElementById('barCode').value;
		this.props.cashier(barCode).then(function(res){
			console.log(res);
			for(var i =0;i<res.response;i++){
				console.log(i);
				if(res.response[i].barCode == barCode){
					console.log(888);
				}else{
					console.log(1);
				}
			}
			
		});
		
	}
	render(){
		return(
				 
			   <div className="bigbox">
			   		<div className="head">
			   			<span>老晨晨</span>
			   		</div>
			   		<div className="body">
			   			<div className="fChild">
			   				<div className="screen">
			   					<span>商品编号/条码:</span>
			   					<input type="text" id="barCode" onBlur={this.collect.bind(this)}/>
			   					<span>小票流水号:00000000000</span>
			   				</div>
			   				<Table style={{width: '100%'}}
						      columns={this.state.columns}
						      data={this.state.data}
						      border={true}
						    />
			   			</div>
			   			<div className="sChild">
			   				<button>会员 F8</button>
			   				<laber>卡号:<input type="text"/></laber>
			   				<laber>姓名:<input disabled type="text"/></laber>
			   				<laber>积分:<input disabled type="text"/></laber>
			   				<laber>类型:<input disabled type="text"/></laber>
			   				<laber>折扣:<input disabled type="text"/></laber>
			   				<laber>余额:<input disabled type="text"/></laber>
			   				<laber>电话:<input disabled type="text"/></laber>
			   			</div>
			   			<div className="tChild">
			   				<div className="left">
				   				<div className="one">
				   					<span>数量:</span>
				   					<span>0</span>
				   				</div>
				   				<div className="two">
					   				<div className="stwo">
					   					<span>应收:¥</span>
					   					<span>0.00</span>
					   				</div>
					   				<div className="sthree">
					   					<span>实收:</span>
					   					<span>0.00</span>
					   					<button>打折</button>
					   				</div>
					   			</div>
			   				</div>
			   				<div className="right">
				   				<div>
				   					<laber>交来:<input type="text"/></laber>
				   					<laber>卡付:<input disabled type="text"/></laber>
				   					<laber>其他:<input disabled type="text"/></laber>
				   					<laber>找零:<input disabled type="text"/></laber>
				   				</div>
				   				<button>结算打印</button>
			   				</div>
			   			</div>
			   			<div className="inline-input">
			   				<div>
				   				<span>08</span><span>月</span><span>08</span><span>日</span>
				   				<span>08</span><span>：</span><span>08</span>
			   				</div>
			   				<div>
			   					<span>收银员:</span><span>陈胖胖</span>
			   				</div>
			   				<div>
			   					<button>帮助F1</button>
			   					<button>设置</button>
			   					<button>查询</button>
			   					<button>统计</button>
			   					<button>退货</button>
			   					<button>钱箱</button>
			   					<button>交班</button>
			   					<button>打印上一单</button>
			   				</div>
					    </div>
			   		</div>
			   </div>
		)
	}
}
const mapStateToProps = state => ({
    loading: state.login.loading,
    data:state.login.data
})
export default connect(mapStateToProps, ShouyinActions)(ShouyinComponent)