

export const dominio = {
    main: "http://52.0.175.246:8080"

}


export const setting = {
    visitas_main: dominio.main + "/api/visitas/",
    proyecto_main: dominio.main + "/api/proyectos/",
    donaciones_main: dominio.main + "/api/donaciones/",
    usuarios_main: dominio.main + "/api/usuarios/",
    usuarios_main_admin: dominio.main + "/api/usuarios/admin",
    objetos: dominio.main + "/api/objetosvarios",
    reportes_metricas: dominio.main + "/api/reportes/metricas",
    contactanos: dominio.main + "/api/contactos",

}

export const METHOD = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    PUT: "PUT",
}
