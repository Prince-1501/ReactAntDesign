import React from 'react';
import { Row , Col} from 'antd';

function Main() {
  return <Row style={{backgroundColor: "rgb(21, 32, 43)", height:"100vh"}}>
  <Col
  xs={0}
  sm={0}
  md={2}
  lg={6}
  style={{backgroundColor: "pink", height:"100vh"}}>
  </Col>
  <Col
  xs={24}
  sm={24}
  md={20}
  lg={12}
  style={{backgroundColor: "white", height:"100vh"}}>
  </Col>
  <Col
  xs={0}
  sm={0}
  md={2}
  lg={6}
  style={{backgroundColor: "lightgreen", height:"100vh"}}>
  </Col>
  </Row>
}

export default Main;
