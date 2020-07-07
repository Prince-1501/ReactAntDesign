import React from 'react';
import { Row , Col} from 'antd';
import ReactLogo from './../static/undraw.svg';

function Main() {
  return <Row style={{width:"100vw"}}>

  <Col span={12} style={{backgroundColor: "pink"}}>prince</Col>
  <Col span={12}>
  <img style={{width:"50vw"}} src={ReactLogo}  alt="React Logo" />
  </Col>

  </Row>
}

export default Main;
