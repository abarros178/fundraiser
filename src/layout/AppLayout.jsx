import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={[{
          label: `Fundacion`,
          onClick: () => console.log('object'),
        },{
          label:''
        }]}
      />
    </Header>
    <Content
      style={{
        padding: '0 50px',
        marginTop: '35px',
      }}
    >
      <div className="site-layout-content">{children}</div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default AppLayout;