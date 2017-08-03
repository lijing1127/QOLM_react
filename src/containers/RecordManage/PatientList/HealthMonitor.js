// 健康监测页面
import React from 'react';
//import ReactDOM from 'react-dom';
import { Tabs, Select, Row, Col } from 'antd';
import { observer } from 'mobx-react';
import MonitorDataTable from './MonitorDataTable';
import BloodSugarData from './BloodSugarData';
import TwXzTable from './TwXzTable';
import TizhongTable from './TizhongTable';
import HeartRate from './Heart_rate';
import Unine from './Unine';
import BloodFat from './BloodFat';
import Electro from './Electro';
import TDSd from './TDS';

import "./PatientList.scss";

const Option = Select.Option;
const TabPane = Tabs.TabPane;

@observer
class HealthMonitor extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			isClientWidth: document.documentElement.clientHeight,
			obj: <MonitorDataTable/>,
		};
	}
	handleSelect = (value) => {
		if (value == "血糖监测") {
			this.setState({
				obj: <BloodSugarData/>,
			});
		}else if(value == "体温监测"){
			this.setState({
				obj: <TwXzTable/>,
			});
		}else if(value == "体重监测"){
			this.setState({
				obj: <TizhongTable/>,
			});
		}else if(value == "心率监测"){
			this.setState({
				obj: <HeartRate/>,
			});
		}else if(value == "尿酸监测"){
			this.setState({
				obj: <Unine/>,
			});
		}else if(value == "血脂监测"){
			this.setState({
				obj: <BloodFat/>,
			});
		}else if(value == "心电图展示"){
			this.setState({
				obj: <Electro/>,
			});
		}else if(value == "TDS数字中医"){
			this.setState({
				obj: <TDSd/>,
			});
		}else if(value == "血压监测"){
			this.setState({
				obj: <MonitorDataTable/>,
			});
		}
	}
	renderXsView() {
		return (
			<div>
				<Row>
					<Col xs={{span: 26}}>
						<Select 
							defaultValue="血压监测" 
							style={{ width: "100%" }}
							onSelect={this.handleSelect}
						>
							<Option value="血压监测">血压监测</Option>
							<Option value="血糖监测">血糖监测</Option>
							<Option value="体温监测">体温监测</Option>
							<Option value="体重监测">体重监测</Option>
							<Option value="心率监测">心率监测</Option>
							<Option value="尿酸监测">尿酸监测</Option>
							<Option value="血脂监测">血脂监测</Option>
							<Option value="心电图展示">心电图展示</Option>
							<Option value="TDS数字中医">TDS数字中医</Option>
						</Select>
					</Col>
				</Row>
				{this.state.obj}
			</div>
		);
	}
	renderLgView() {
		return (
			<Row>
				<Col>
					<Tabs defaultActiveKey="1">
						<TabPane tab="血压监测" key="1"><MonitorDataTable/></TabPane>
						<TabPane tab="血糖监测" key="2"><BloodSugarData/></TabPane>
						<TabPane tab="体温监测" key="3"><TwXzTable/></TabPane>
						<TabPane tab="体重监测" key="4"><TizhongTable/></TabPane>
						<TabPane tab="心率监测" key="5"><HeartRate/></TabPane>
						<TabPane tab="尿酸监测" key="6"><Unine/></TabPane>
						<TabPane tab="血脂监测" key="7"><BloodFat/></TabPane>
						<TabPane tab="心电图展示" key="8"><Electro/></TabPane>
						<TabPane tab="TDS数字中医" key="9"><TDSd/></TabPane>
					</Tabs>
				</Col>
			</Row>
		);
	}
	render(){
		return(
			<div>
				<h1 style={{marginBottom:50}}>健康监测</h1>
				{this.state.isClientWidth<= 768 ? this.renderXsView() : this.renderLgView()}
			</div>
		);
	}
}

export default HealthMonitor;