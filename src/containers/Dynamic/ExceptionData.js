// 异常处理页面
import React from 'react';
import {Table, Row,Col } from 'antd';
import { observer } from 'mobx-react';
import { Link } from 'react-router';
import MeansInfo from 'models/MeansInfo';

import ".././style.scss";

@observer
class ExceptionData extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '姓名',
      dataIndex: 'name',
      width: '18%',
    }, {
      title: '检测项目',
      dataIndex: 'prog',
    }, {
      title: '体征值',
      dataIndex: 'number',
    },{
      title: '异常状态',
      dataIndex: 'abnormal',
    },{
      title: '检测时间',
      dataIndex: 'date',
    },{
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
            <a type="primary">
              <Link to={`/holographicView?id=${record.dataNum}`}>处理异常</Link>
            </a>
          );
      },
    }];

    this.state = {
      current: 1,
    };
  }

  componentDidMount(){
    MeansInfo.getUnnormal("http://qolm.ybyt.cc/api/v1/exception/data?page=1&per_page=10");
   
  }

 
  render() {
    const columns = this.columns;
    const dataSource = MeansInfo.exceptionInfo.data.toJS();
    return (
      <div className="pagination-block">
        <h1>异常管理</h1>
        <p style={{marginTop:50,marginLeft:30,marginBottom:30,fontSize:26}} className="yc-title">最新异常信息</p>
        <Row>
          <Col  xs={26} lg={26}>
            <Table  
              bordered dataSource={dataSource} 
              columns={columns} 
              style={{marginLeft:30}} 
              className="table yc-table"
              pagination={{
                total:MeansInfo.exceptionInfo.meta["total"],
                onChange(pageNumber) {
                    MeansInfo.getUnnormal(`http://qolm.ybyt.cc/api/v1/exception/data?page=${pageNumber}&per_page=10`);
                }
              }}
            />
          </Col>
        </Row>
        
        
      </div>
    );
  }
}

export default ExceptionData;
