import { Layout, Menu } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterInicio } from '../Inicio/components/FooterInicio';
const { Header, Content } = Layout;
const AppLayout = ({ children }) => {
  const navigate = useNavigate();


  return (<Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        selectable={false}
        items={[{
          label: `Fundacion`,
          onClick: () => navigate('/'),

        },
        {
          label: 'Donar',
          onClick: () => navigate('/donar'),

        }, {
          label: 'Acerca de',
          style: { position: 'relative', right: '0px' }
        }]}
      />
    </Header>
    <Content
      style={{
        padding: '0 50px',
        marginTop: '35px',
        minHeight: '72vh',
        color: 'white',
      }}
    >
      <div className="site-layout-content">{children}</div>
    </Content>
    {
    //todo: ponerle links a los iconos
    }
    <FooterInicio />
  </Layout>)
};

export default AppLayout;