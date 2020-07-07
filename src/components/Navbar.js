import React from 'react';
import { Row , Col} from 'antd';
import { Anchor } from 'antd';


const { Link } = Anchor;
const divHead = {
  'border-bottom' : '1px solid black',
  'margin-bottom' : '30px',
  'margin-left' : '30px',
  'margin-right' : '30px'
}

function Navbar() {
  return (
    <div style={divHead}>
    <Row style={{borderBottom:"1px solid black"} ,{textAlign:"center"}}>

    <Col span={24} style={{padding:"10px 100px"}}>
    <div>
        <Anchor style={{float:"right"}}><Link href="#components-anchor-demo-basic" title="Sign up" />  </Anchor>
        <Anchor style={{float:"right"}}><Link href="#components-anchor-demo-basic" title="Sign In" />  </Anchor>

    </div>
    </Col>
    </Row>
    </div>
  );
}

export default Navbar;
