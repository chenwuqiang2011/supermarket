import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import elementui from 'element-react'
import pucharseActions from './pucharseAction'
import pucharsecss from './pucharse.scss'
import $ from './jquery'


class PucharseComponent extends React.Component{
	click(){
		$('.order').show();
	}
	close(){
		$('.order').hide();
	}

	save(){	
		var goods = {
			state: $('.state').val(),
			layer: $('.layer').val(),
			superlier: $('.superlier').val(),
			barcode: $('.barcode').val(),
			productName: $('.productName').val(),
			guit: $('.guit').val(),
			enterPrice: $('.enterPrice').val(),
			realPrice: $('.realPrice').val(),
			num: $('.num').val(),
			time: $('.time').val()
		}

		if($('.state').val().trim() == ''){
			alert('状态不能为空');
			return false;
		}
		if($('.layer').val().trim() == ''){
			alert('进货批次不能为空');
			return false;
		}
		if($('.superlier').val().trim() == ''){
			alert('供应商不能为空');
			return false;
		}
		if($('.barcode').val().trim() == ''){
			alert('商品条码不能为空');
			return false;
		}
		if($('.productName').val().trim() == ''){
			alert('商品名称不能为空');
			return false;
		}
		if($('.guit').val().trim() == ''){
			alert('规格不能为空');
			return false;
		}
		if($('.enterPrice').val().trim() == ''){
			alert('进价不能为空');
			return false;
		}
		if($('.realPrice').val().trim() == ''){
			alert('零售价不能为空');
			return false;
		}
		if($('.num').val().trim() == ''){
			alert('数量不能为空');
			return false;
		}
		if($('.time').val().trim() == ''){
			alert('入库日期不能为空');
			return false;
		}

		

		$('.order').hide();
	}

	render(){
		

		return(
			<div>
				<div className='order'>
					<h2>订单管理<span onClick={this.close}>&times;</span></h2>
					<div><p>状态：</p><input className="state" type="text" /></div>
					<div><p>进货批次：</p><input type="text" className="layer" /></div>
					<div><p>供应商：</p><input type="text" className="superlier" /></div>
					<div><p>商品条码：</p><input type="text" className="barcode" /></div>
					<div><p>商品名称：</p><input type="text" className="productName" /></div>
					<div><p>规格：</p><input type="text" className="guit" /></div>
					<div><p>进价：</p><input type="text" className="enterPrice" /></div>
					<div><p>零售价：</p><input type="text" className="realPrice" /></div>
					<div><p>数量：</p><input type="text" className="num" /></div>
					<div><p>入库日期：</p><input type="text" className="time" /></div>
					<div className="save"><input type="button" value='保存' onClick={this.save}/></div>
				</div>
				<div className="pu_header">
        			<select className="fasttips">
        				<option value="快速查询">快速查询</option>
        				<option value="本日进货">本日进货</option>
        				<option value="本月进货">本月进货</option>
        				<option value="本年进货">本年进货</option>
        			</select> 
        			<label htmlFor="lot">批次：</label>
        			<input type="text" id="lot"/><input type="button" value="查询批次" className="lot" />
        			<label htmlFor="superlier">查询供货商：</label><input type="text" className="superlier" id="superlier" /><label htmlFor="barcode">条码：</label>
			    	<input type="text" id="barcode"/><input type="button" value="查询单品" className="queryitem"/>
			    	<input type="button" value="生成订单" onClick={this.click}/>
			    </div>
			    <div>
			    	<table>
			    		<thead>
			    			<tr>
			    				<th>#</th>
			    				<th>状态</th>
			    				<th>进货批次</th>
			    				<th>供应商</th>
			    				<th>商品条码</th>
			    				<th>商品名称</th>
			    				<th>规格</th>
			    				<th>进价</th>
			    				<th>零售价</th>
			    				<th>数量</th>
			    				<th>入库日期</th>
			    				<th>操作</th>
			    			</tr>
			    		</thead>
			    		<tbody>
							
			    		</tbody>
			    	</table>
			    </div>
			</div>
			
		)
	}
}

export default PucharseComponent;


