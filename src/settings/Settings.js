
export const dominio = {
    main: process.env.REACT_APP_SERVICES,

}


export const setting = {
    visitas_main: dominio.main + "/api/visitas/",
    proyecto_main: dominio.main + "/api/proyectos/",
    donaciones_main: dominio.main + "/api/donaciones/",
    usuarios_main: dominio.main + "/api/usuarios/",

}

export const METHOD = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    PUT: "PUT",
}
