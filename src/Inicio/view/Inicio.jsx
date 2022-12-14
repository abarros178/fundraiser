import React from 'react'
import { HeaderInicio } from '../components/HeaderInicio.jsx'
import { PrincipalProyecto } from '../components/PrincipalProyecto.jsx'
import { METHOD, setting } from '../../settings/Settings.js'
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo.jsx'
import { LoaderNeoSoft } from '../../components/LoaderNeoSoft.jsx'
import { AboutUs } from '../components/AboutUs.jsx'


const Inicio = () => {
  const { data, loading, error } = useHttpRequestTwo(setting.proyecto_main + "6317964e7e4794ccd1192cef", METHOD.GET)
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
                <LoaderNeoSoft />
                :
                (<>
                  

                  <PrincipalProyecto data={data} loading />
                </>)

            }

          </>
      }




    </>
  )
}

export default Inicio