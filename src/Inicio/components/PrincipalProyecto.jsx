import { Spin } from 'antd';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ButtonNeoSoft } from '../../components/ButtonNeoSoft';
import { useHttpRequest } from '../../hooks/useHttpRequest';
import { METHOD, setting } from '../../settings/Settings';

export const PrincipalProyecto = ({ data }) => {
    const navigate = useNavigate()


    return (
        <section className="text-gray-600 body-font ">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://firebasestorage.googleapis.com/v0/b/donaciones-79b72.appspot.com/o/chico_agradecido.jpg?alt=media&token=fea79837-14d5-4e81-87f9-eb0fab939a3e" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font font-mono sm:text-7xl text-3xl mb-4 font-medium text-gray-900">{data?.title}
                    </h1>
                    <p className="mb-8 leading-relaxed">Hemos creado una plataforma única con el deseo de que nuestros graduados y grupos de interés nos apoyen para que nuestros estudiantes alcancen su gran objetivo en el tiempo justo</p>
                    <div className="flex justify-center">
                        <ButtonNeoSoft label={"Dona aqui"} type="1" onClick={() => navigate("/donar/proyecto/" + data.uid)} />

                    </div>
                </div>
            </div>
        </section>
    )
}
