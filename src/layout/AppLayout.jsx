import { Layout, Menu } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterInicio } from '../Inicio/components/FooterInicio';
import { HashLink } from 'react-router-hash-link';
import { useHttpRequestTwo } from '../hooks/useHttpRequestTwo';
import { METHOD, setting } from '../settings/Settings';
const { Header, Content } = Layout;
const AppLayout = ({ children }) => {
  const navigate = useNavigate();
  useHttpRequestTwo(setting.visitas_main , METHOD.POST)
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
          label: 'Proyectos',
          onClick: () => navigate('/donar'),

        }, {
          label: <HashLink to="/#acercade">Acerca de</HashLink>,
          style: { position: 'relative', right: '0px' },
        }]}
      />
    </Header>
    <Content
      style={{
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