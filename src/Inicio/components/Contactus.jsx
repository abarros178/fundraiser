import { Grid, TextField } from '@mui/material'
import React from 'react'
import { useForm } from '../../hooks/useForm'

const Contactus = () => {
    const { formState, onInputChange, onResetForm } = useForm({
        nombre: "",
        tipo: "",
        monto_donacion: 0,
        medio_pago: ""
    })

    return (
        <>
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">CONTACTANOS</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Si tienes alguna duda, sugerencia o inquietud sobre nuestra plataforma y el servicio que prestamos te invitamos a escribir y con gusto te responderemos a la mayor brevedad posible</p>
                    </div>

                    <Grid container columnSpacing={2} rowSpacing={2}>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField name='nombre' fullWidth id="outlined-basic" label="Nombre" variant="outlined" />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <TextField name='correo' fullWidth id="outlined-basic" type='email' label="Correo" variant="outlined" />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} >
                            <TextField
                                id="outlined-multiline-static"
                                label="Mensaje"
                                multiline
                                rows={5}
                                fullWidth
                                
                            />
                        </Grid>



                    </Grid>

                    <div class="p-2 w-full">
                        <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    </div>
                    <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                        <p class="text-indigo-500">example@email.com</p>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Contactus