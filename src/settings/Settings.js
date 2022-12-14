

export const dominio = {
    main: import.meta.env.VITE_SERVICES

}


export const setting = {
    visitas_main: dominio.main + "/api/visitas/",
    proyecto_main: dominio.main + "/api/proyectos/",
    donaciones_main: dominio.main + "/api/donaciones/",
    usuarios_main: dominio.main + "/api/usuarios/",
    usuarios_main_admin: dominio.main + "/api/usuarios/admin",

}

export const METHOD = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    PUT: "PUT",
}
