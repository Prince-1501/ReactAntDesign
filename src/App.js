import React from 'react';
import { Button } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { DatePicker } from 'antd';
import { Row, Col } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import './App.css';
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
    <Navbar />
    <Main />
    </div>
  );
}

export default App;
