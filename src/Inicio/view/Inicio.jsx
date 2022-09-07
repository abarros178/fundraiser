import React from 'react'
import { HeaderInicio } from '../components/HeaderInicio.jsx'
import { ProyectListInicio } from '../../proyecto/components/ProyectListInicio.jsx'
import { PrincipalProyecto } from '../components/PrincipalProyecto.jsx'
import { METHOD, setting } from '../../settings/Settings.js'
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo.jsx'
import { LoaderNeoSoft } from '../../components/LoaderNeoSoft.jsx'
import { AboutUs } from '../components/AboutUs.jsx'


const Inicio = () => {
  const { data, loading, error } = useHttpRequestTwo(setting.proyecto_main + "630d0b51dda3b5d4e76a6363", METHOD.GET)
  return (
    <>
      <HeaderInicio />
      {
        error ?
          <h1>Lo sentimos, ocurrio un problema al cargar la pagina, intentelo de nuevo</h1>
          :
          <>
            {
              loading ?
                <div style={{ position: 'relative', right: 0, bottom: 0, left: 0, top: 0 }}>
                  <LoaderNeoSoft />
                </div>
                :
                (<>


                  <PrincipalProyecto data={data} loading />

                  {/* <ProyectListInicio /> */}
                  <AboutUs />
                </>)

            }

          </>
      }




    </>
  )
}

export default Inicio