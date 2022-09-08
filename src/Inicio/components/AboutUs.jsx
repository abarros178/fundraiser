import React from 'react'
import {personas} from "../utils/Datos"
import { AboutMe } from './AboutMe'
export const AboutUs = () => {
    
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            personas.map((persona,index) =>(
                                <AboutMe data={persona} key={index}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
