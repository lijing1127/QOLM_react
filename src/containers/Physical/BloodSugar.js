import React, { PropTypes } from "react";
import { Form, Input, Button, Row, Col, Select,message } from 'antd';
import {observer} from "mobx-react";
import AddRecord from "./AddRecord";
import PhysicalData from "models/PhysicalData";
import "../style.scss";

const FormItem = Form.Item;
const Option = Select.Option;

@observer
class BloodPressure extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
  }
	constructor(props) {
		super(props);
	}
  handleSubmit = ( e) => {
	e.preventDefault();
    const { idCard } = PhysicalData.userInfo;
    this.props.form.validateFields((err, values) => {
      if (!err) {
            PhysicalData.clearInfo();
            //console.log(values);
        PhysicalData.SubmitPhysical("http://qolm.ybyt.cc/api/v1/examination_input/blood_glucose",
          `id_number=${idCard}&value=${values.val}&item_type=${values.item_type}` );
        message.success('提交成功');
      }else {
        message.error('遇到一些问题，请重新提交');
        
      }
    });
  }
	render() {
    const { getFieldDecorator } = this.props.form;
		return (<div className="record-content">
			<h1>血糖测量</h1>
			<AddRecord />
			<div style={{clear: 'both', marginTop: 30}}>
				<Form onSubmit={this.handleSubmit} className="login-form record-block">
            <Row>
            <Col xs={26} sm={12} md={12} lg={12} xl={25}  span={26} style={{float: 'left', marginTop: 20}}>
						<span className="fontSize">血糖值</span>
						<FormItem>
							{getFieldDecorator('val', {
							rules: [{ required: false, message: 'Please input your value!' }],
							})(
							<Input className="border-n" suffix={<span className="fontSize">毫克/分升</span>} placeholder="" />
							)}
						</FormItem>
			</Col>
				<Col xs={26} sm={12} md={12} lg={12} xl={25} span={26} style={{ float: 'left'}}>
					<div className="mar-b mar-t">
					<p className="fontSize">测量类型</p>
            <FormItem>
              {getFieldDecorator('item_type', {
                rules: [{ required: false, message: 'Please input your type!' }],
                initialValue: "餐前血糖"
              })(
                <Select
                  showSearch
                  className="fontSize"
                  style={{ width: 200,marginTop:15}}
                  optionFilterProp="children"
                  onChange={this.handleChange}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  <Option className="optionWidth" value="1">餐前血糖</Option>
                  <Option className="optionWidth" value="2">餐后血糖</Option>
                  <Option className="optionWidth" value="3">睡前血糖</Option>
                  <Option className="optionWidth" value="4">睡后血糖</Option>
                </Select>
              )}
            </FormItem>
					</div>
					</Col>
				</Row>
				<FormItem>
					<Button type="primary" htmlType="submit" className="login-form-button"> 提交 </Button>
				</FormItem> 
			</Form>
			</div>
			
		</div>);
	}
}

export default Form.create()(BloodPressure);
