import React from 'react'
import { useHttpRequest } from '../../hooks/useHttpRequest'
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo'
import { METHOD, setting } from '../../settings/Settings'
import {personas} from "../utils/Datos"
import { AboutMe } from './AboutMe'
export const AboutUs = () => {
    const {data, loading,statusCode}=useHttpRequest(setting.usuarios_main,METHOD.GET)


    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        loading
                        {
                            !loading &&
                            data?.map((item,index) =>(
                                <AboutMe data={item} key={index}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
