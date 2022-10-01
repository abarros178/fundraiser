import { Grid, Toolbar } from '@mui/material'
import React from 'react'
import Atiempo from './../../assets/Atiempo.png'

export const FooterInicio = () => {
    return (
        <>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Grid item xs={12}>
                            <img
                                className="bordeimagen"
                                alt="hero"
                                src={Atiempo}
                                width="180"
                                height="100"
                            />
                        </Grid>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 NeoSoft

                    </p>
                </div>
            </footer>
        </>
    )
}
