export const dominio = {
    develop: "https://back-donaciones-develop.onrender.com",
    main: "https://donaciones.onrender.com"

}

export const setting = {
    visitas_main: dominio.main + "/api/visitas/",
    proyecto_main: dominio.main + "/api/proyectos/",
    donaciones_main: dominio.main + "/api/donaciones/",
}

export const METHOD = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    PUT: "PUT",
}
