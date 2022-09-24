// import Message from "@mui/icons-material/Message";
import { Grid, TextField,Button,Box } from "@mui/material";
import { message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { formularioContactanosValidation } from "../../acciones/utils/validation";
import { useForm } from "../../hooks/useForm";
import { useHttpRequest } from "../../hooks/useHttpRequest";
import { METHOD, setting } from "../../settings/Settings";
import emailjs from '@emailjs/browser';

export default function Contactus() {
  const { formState, onInputChange, onResetForm } = useForm({
    name: "",
    email: "",
    message: "",
  });
  const { execute, loading } = useHttpRequest(setting.contactanos, METHOD.POST);
//   const navigate = useNavigate();

  const handleContactar = async (event) => {
    
    if (!formularioContactanosValidation(formState)) return;
    const res = await execute({
      ...formState,
    });
    if (res.statusCode === 201) {
      console.log(res.data);
      message.success("Se guardo con exito");

      onResetForm();
    } else {
      message.error("Ocurrio un problema al guardar.");
    }


    emailjs.send('service_qb9jl5k','template_21l09vl',formState,'H7NsOA0SL3G0LY1XW')
    .then(response => console.log(response))
    .catch(error => console.log(error))

  };

  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              CONTACTANOS
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Si tienes alguna duda, sugerencia o inquietud sobre nuestra
              plataforma y el servicio que prestamos te invitamos a escribir y
              con gusto te responderemos a la mayor brevedad posible
            </p>
          </div>
          <form>
            <Grid container justifyContent="center">
              <Grid container columnSpacing={2} rowSpacing={2} width={{xs:"100%",sm:"80%",md:"80%"}}>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    onChange={onInputChange}
                    value={formState.name}
                    name="name"
                    fullWidth
                    id="outlined-basic"
                    label="Nombre"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    onChange={onInputChange}
                    value={formState.email}
                    name="email"
                    fullWidth
                    id="outlined-basic"
                    type="email"
                    label="email"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    onChange={onInputChange}
                    value={formState.message}
                    id="outlined-multiline-static"
                    label="Mensaje"
                    name="message"
                    multiline
                    rows={5}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>

            <Box container textAlign='center' p={1}>
              <Grid item xs={12} sm={4} md={3} mr={2} margin={1}>
                <Button
                  onClick={handleContactar}
                  variant="contained"
                  size="large"
                  disabled={loading}
                >
                  CONTACTENOS
                </Button>
              </Grid>
            </Box>
          </form>
          <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <p class="text-indigo-500">example@email.com</p>
          </div>
        </div>
      </section>
    </>
  );
}
