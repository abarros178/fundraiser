import { Layout, Menu } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterInicio } from '../Inicio/components/FooterInicio';
import { HashLink } from 'react-router-hash-link';
import { useHttpRequestTwo } from '../hooks/useHttpRequestTwo';
import { METHOD, setting } from '../settings/Settings';
import Atiempo from './../assets/Atiempo.png'
import './layoutStyle.css'
import { useHttpRequest } from '../hooks/useHttpRequest';
const { Header } = Layout;

const AppLayout = ({ children }) => {
  const navigate = useNavigate();
  useHttpRequestTwo(setting.visitas_main, METHOD.POST)
  const { execute, loading } = useHttpRequest(setting.visitas_main, METHOD.POST)
  return (<Layout className="layout">
    <Header>

      <div className="logo" />

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        selectable={false}
        items={[

          {
            label: <img
              className="bordeimagen responsive-logo"
              alt="hero"
              src={Atiempo}
              width="150"
              height="80"
            />,
            onClick: () => navigate('/'),


          },
          {
            label: 'Proyectos',
            onClick: () => {
              navigate('/donar')
              execute({
                action: {
                  type: 'LIST_PROYECTS',
                 
                }
              })
            },

          }, {
            label: <HashLink to="/#acercade">Acerca de</HashLink>,
            style: { position: 'relative', right: '0px' },
          }, {
            label: <HashLink to="/#contactanos">Contáctanos</HashLink>,
            style: { position: 'relative', right: '0px' },
          }]}
      />
    </Header>
    {children}

    <FooterInicio />
  </Layout>)
};

export default AppLayout;