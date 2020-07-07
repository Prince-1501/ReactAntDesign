import React from 'react';
import { Row , Col} from 'antd';
import { Button } from 'antd';
import ReactLogo from './../static/undraw.svg';

const divHead = {
  'margin-left' : '30px',
  'margin-top': '150px'
}

function Main() {
  return <Row style={{width:"100vw"}}>

  <Col span={12}>
    <div style={divHead}>
        <h1>Let's Crack it</h1>
        <p>A smart Platform where You can test Your Skills with Lots of questions</p>
        <Button type="primary">Start Test</Button>
    </div></Col>
  <Col span={12}>
  <img style={{width:"50vw"}} src={ReactLogo}  alt="React Logo" />
  <div>created by <span style={{color:"darkOrange"}}>Prince Agarwal</span></div>
  </Col>

  </Row>
}

export default Main;
