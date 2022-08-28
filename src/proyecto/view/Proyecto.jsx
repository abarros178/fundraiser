import React, { useState, useEffect } from 'react'
import { NavBar } from '../components/NavBar'

const Proyecto = () => {
    return (
        <div>

            <NavBar />
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap -mx-4 mb-2 lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div class="w-full sm:p-4 px-4 mb-6">
                            <h1 class="title-font font-medium text-3xl mb-2 pt text-gray-900">Semillero de Líderes Casa de Nicoló</h1>
                            <div class="leading-relaxed">por Fundación M&M Formando Líderes</div>
                        </div>
                        <div class="pt sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-2xl text-gray-900">$5,000,000</h2>
                            <p class="leading-relaxed">Objetivo de financiación</p>
                        </div>
                        <div class="pt sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-2xl text-gray-900">$675,000</h2>
                            <p class="leading-relaxed">Fondos recaudados</p>
                        </div>
                        <div class="pt sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-2xl text-gray-900">25</h2>
                            <p class="leading-relaxed">Días para llegar</p>
                        </div>
                        <div class="pt sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-2xl text-gray-900">Fecha del objetivo</h2>
                            <p class="leading-relaxed">Método de fin de campaña</p>
                        </div>
                        <form action="">
                            <div class="items-center -mx-1 md:flex">
                                <div class="w-full mx-2">
                                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Nombres</label>
                                    <input class="block w-full px-3 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" placeholder='Puede ser anonimo' />
                                </div>
                                <div class="w-full mx-2 mt-10 md:mt-0">
                                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Grupo al que perteneces</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Elige una opcion</option>
                                        <option value="GRADUADOCUC">GRADUADO CUC</option>
                                        <option value="EMPLEADO">EMPLEADO</option>
                                        <option value="EXTERNO">EXTERNO</option>
                                    </select>
                                </div>

                            </div>
                            <div class="items-center -mx-2 mt-2 md:flex">
                                <div class="w-full mx-2">
                                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Monto a donar</label>
                                  <input class="block w-full py-2 pl-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="number" placeholder='$' />
                                </div>
                                <div class="w-full mx-2">
                                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Metodo de donacion</label>
                                  <input class="block w-full py-2 pl-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" placeholder='Visa, MasterCard, otros' />
                                </div>
                                <button type="button" class="focus:outline-none mt-3 mx-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">DONAR</button>
                            </div>
                        </form>

                    </div>
                    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        <img class="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats" />
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Proyecto