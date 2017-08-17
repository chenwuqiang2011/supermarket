import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Table,Input} from 'element-react';
import '../../static/styles/shouyin.scss';
import * as ShouyinActions from './shouyinAction';
import $ from './jquery3.1.1.js';
import {Link} from 'react-router';

class ShouyinComponent extends React.Component{
	constructor(props) {
		  super(props);
		  this.state = {
		    columns: [
		      {
		        label: "条码",
		        prop: "barCode",
		        width: 180
		      },
		      {
		        label: "品名",
		        prop: "name",
		        width: 250
		      },
		      {
		        label: "规格",
		        prop: "standard"
		      },
		      {
		        label: "进货价",
		        prop: "purchasingCode"
		      },
		      {
		        label: "销售价",
		        prop: "salesPrice"
		      },
		      {
		        label: "分类",
		        prop: "classify"
		      },
		      {
		        label: "单位",
		        prop: "unit"
		      },
		      {
		        label: "数量",
		        prop: "qty"
		      }
		    ],
		    data: []
		}
	}
	collect(event){
		if(event.keyCode == 13){
			var barCode = document.getElementById('barCode').value;
			var aa;
			var total = 0;
			var _qty = 0;
			var _money = $('.smoney');
			var _number = $('.number');
			var res = this.state.data.map(function(item){
				total += item.salesPrice*item.qty;
				_qty += item.qty;
				_money.html((total).toFixed(2));
				_number.html(_qty);
			})
			this.props.cashier(barCode).then(function(res){
				if(this.state.data.length == 0){
					aa = this.state.data.push(this.props.data[0]);
				}else{
					for(var i =0; i <this.state.data.length;i++){
						if(this.state.data[i].barCode == this.props.data[0].barCode){
							 var _qty = this.state.data[i].qty++;
							return _qty;
						}
					}
					aa = this.state.data.push(this.props.data[0]);
				}
				this.setState({
					data:Object.assign(this.state.data, aa)
				})
			}.bind(this));
			if($('#barCode').val() != ''){
				console.log(666);
				$("#barCode").val('').focus();
			}
		}
		
	}
	balance(){
		var _data = "千锋隔壁超市收银系统\n*************************************\n"+'\n'+"商品名称: "+"    单价: "+"   数量: "+"  总价: "+'\n';
		var total = 0;
		var _date = new Date();
		console.log(_date.getDate());
		var res = this.state.data.map(function(item){
			total += item.salesPrice*item.qty;
			return  item.name+'\n'+ item.barCode+" "+item.salesPrice +"      "+item.qty+"      "+(item.salesPrice*item.qty).toFixed(2)+'\n'
			
		}).join('');
		_data += res + '\n'+'总价:'+total + '\n'+"*************************************\n"+'\n'+'收银员： '+'陈胖胖'+'\n'+'买单时间:'+_date.getFullYear()+'.'+_date.getMonth()+'.'+_date.getDate()+'  '+_date.getHours()+':'+_date.getMinutes()+':'+_date.getSeconds()+ '\n'+ '\n';
		console.log(_data)
		$.post(
			'http://10.3.134.71:81/print',
			{text:_data},
			function(res){
				console.log(res);
			}
		)
	}
	render(){
		return(
			   <div className="bigbox">
			   		<div className="head">
			   			<Link to="/"><i className="el-icon-d-arrow-left"></i></Link>
			   			<span>千锋隔壁超市收银系统</span>
			   		</div>
			   		<div className="body">
			   			<div className="fChild">
			   				<div className="screen">
			   					<span>商品编号/条码:</span>
			   					<input type="text" id="barCode" onKeyUp={this.collect.bind(this)}/>
			   					<span>小票流水号:00000000000</span>
			   				</div>
			   				<Table style={{width: '100%'}}
						      columns={this.state.columns}
						      data={this.state.data}
						      border={true}
						      height={350}
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
				   					<span className="number">0</span>
				   				</div>
				   				<div className="two">
					   				<div className="stwo">
					   					<span>应收:¥</span>
					   					<span className="smoney">0.00</span>
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
				   				<button onClick={this.balance.bind(this)}>结算打印</button>
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
const mapStateToProps = (state) => {
    console.log(333,state.cashier.data);
    return {
        loading: state.cashier.loading,
    	data:state.cashier.data
    }
}
export default connect(mapStateToProps, ShouyinActions)(ShouyinComponent)

function contrast(tr,state,props){
	for(var i = 0;i<tr.length-1;i++){
		if(state[i].barCode == props[0].barCode){
			state[i].qty++;
		}else{
			var aa = state.push(contrast(tr,state[i],props))
		}
	}
	return aa;
}

