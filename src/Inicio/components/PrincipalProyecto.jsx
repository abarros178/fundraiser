import { Spin } from 'antd';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ButtonNeoSoft } from '../../components/ButtonNeoSoft';
import { useHttpRequest } from '../../hooks/useHttpRequest';
import { METHOD, setting } from '../../settings/Settings';

export const PrincipalProyecto = ({ data }) => {
    const navigate = useNavigate()


    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={data?.img !== "none" ? data.img : "https://dummyimage.com/720x600"} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font font-mono sm:text-7xl text-3xl mb-4 font-medium text-gray-900">{data?.title}
                    </h1>
                    <p className="mb-8 leading-relaxed">{data?.descripcion}</p>
                    <div className="flex justify-center">
                        <ButtonNeoSoft label={"Dona aqui"} type="1" onClick={() => navigate("/donar/proyecto/" + data.uid)} />

                    </div>
                </div>
            </div>
        </section>
    )
}
