// 档案新建页面
import React from "react";
import BasicInfo from "./BasicInfo";
import "../../style.scss";

class NewRecord extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1 style={{marginBottom:50}}>建立健康档案</h1>
				<h3 className="fontSize paddleft" style={{ marginBottom: 10}}>基本资料</h3>
				<BasicInfo />
			</div>
		);
	}

}

export default NewRecord;



