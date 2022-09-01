import React, { useEffect } from 'react'
import { NavBar } from '../../components/NavBar.jsx'
import { FooterInicio } from '../components/FooterInicio.jsx'
import { HeaderInicio } from '../components/HeaderInicio.jsx'
import { ProyectListInicio } from '../../proyecto/components/ProyectListInicio.jsx'
import { PrincipalProyecto } from '../components/PrincipalProyecto.jsx'
import { useHttpRequest } from '../../hooks/useHttpRequest.jsx'
import { METHOD, setting } from '../../settings/Settings.js'
import { Space, Spin } from 'antd'


const Inicio = () => {
  const { data, execute, loading } = useHttpRequest(setting.proyecto_main + "630d0b51dda3b5d4e76a6363", METHOD.GET)

  useEffect(() => {
    execute()
  }, [])
  return (
    <>

      {
        !data ?
          (<Space size="middle">
            <Spin size="large" />
          </Space>)
          :
          (<><HeaderInicio />


            <PrincipalProyecto data={data} />

            <ProyectListInicio />
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                    <div className="h-full text-center">
                      <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                      <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                      <p className="text-gray-500">Senior Product Designer</p>
                    </div>
                  </div>
                  <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                    <div className="h-full text-center">
                      <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/300x300" />
                      <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                      <p className="text-gray-500">UI Develeoper</p>
                    </div>
                  </div>
                  <div className="lg:w-1/3 lg:mb-0 p-4">
                    <div className="h-full text-center">
                      <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/305x305" />
                      <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                      <p className="text-gray-500">CTO</p>
                    </div>
                  </div>
                </div>
              </div>
            </section></>)

      }




    </>
  )
}

export default Inicio