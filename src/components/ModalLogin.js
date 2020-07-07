import React from 'react';
import { Modal, Button } from 'antd';
import Demo from './Login';

class ModalLogin extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Login
        </Button>
        <Modal
          title="Login Page"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <Demo />
        </Modal>
      </div>
    );
  }
}


export default ModalLogin;
