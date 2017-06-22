//这是筑脊模块页面

import React from 'react';
import ReactDOM from 'react-dom';
import { Icon,Button } from 'antd';

import MeanInfo from './meanInfo.js';
import MeanSearch from './meanSearch.js';
import UserInfo from './userInfo.js';
import './spine.css';


class Spine extends React.Component{
	render(){
		return (
			<div>
				<MeanSearch />

				<div className="userSpine userSlide">

					<UserInfo />
					<div>
						<p><Icon type="edit" style={{ fontSize: 18, color: '#37474f' }} />健康管理师诊断</p>
						<div className="suggest">
							<span>身体状况描述：</span>
							<textarea />
						</div>
						<div className="suggest">
							<span>诊断建议：</span>
							<textarea />
						</div>
					</div>
					<div>
						<p><Icon type="file-text" style={{ fontSize: 18, color: '#37474f' }} />方案</p>
						
					</div>					

				</div>

				<MeanInfo />
			</div>
		)
	}
}

export default Spine;