import React from 'react';
import { Row , Col} from 'antd';
import { Anchor } from 'antd';
import ModalLogin from './ModalLogin';

const { Link } = Anchor;
const divHead = {
  // 'border-bottom' : '1px solid black',
  'margin-bottom' : '30px',
  'margin-left' : '30px',
  'margin-right' : '30px'
}
const links = {
  'box-sizing': 'border-box',
  'float': 'right',
  'display':'inline-block'
}

function Navbar() {
  return (
    <div style={divHead}>
    <Row style={{borderBottom:"1px solid black"} ,{textAlign:"center"}}>

    <Col span={24} style={{padding:"10px 100px"}}>
    <div style={links}>
        <ModalLogin />
    </div>
    </Col>
    </Row>
    </div>
  );
}

export default Navbar;
