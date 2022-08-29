export const dominio = {
    develop: "https://back-donaciones-develop.onrender.com",
    main: "https://donaciones.onrender.com"

}

export const setting = {
    donante_main: dominio.main + "/api/donante/",
    donante_develop: dominio.develop + "/api/donante/",
    proyecto_main: dominio.main + "/api/proyectos/",
    proyecto_develop: dominio.develop + "/api/proyectos/",
    donaciones_main: dominio.main + "/api/donaciones/",
    donaciones_develop: dominio.develop + "/api/donaciones/",
}

export const METHOD = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    PUT: "PUT",
}
