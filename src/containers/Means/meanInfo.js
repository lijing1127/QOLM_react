//这是方案室三个页面共用的底部管理师及日期等信息显示组件

import React from 'react';
import {Row, Col} from "antd";
import {observer} from "mobx-react";
import MeansInfo from "models/MeansInfo";
import MeansJz from "models/MeansJz";

import './meanInfo.css';

@observer
class MeanInfo extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		const { userName, registration, dateTime } = MeansInfo.footerInfo;
		const { prices } = MeansJz.isKaifang;
		return (
			<div className="info">			
				<Row>
					<Col xs={{ span: 26, }} lg={{ span: 12 }}>
						<p>健康管理师：<span>{ userName }</span></p>
					</Col>
					<Col xs={{ span: 26, }} lg={{ span: 12 }}>
						<p>病例编号：<span>{ registration }</span></p>
					</Col>
				</Row>
				<Row>
					<Col xs={{ span: 26, }} lg={{ span: 12 }}>
						<p>总额：<span>{ prices }</span></p>
					</Col>
					<Col xs={{ span: 26, }} lg={{ span: 12 }}>
						<p>开具日期：<span>{ dateTime }</span></p>
					</Col>
				</Row>
			</div>
		);
	}
}

export default MeanInfo;