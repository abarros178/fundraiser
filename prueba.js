const arr2=[
    {
        "field": "fecha",
        "header": "FECHA"
    },
    {
        "field": "nombre_cliente",
        "header": "NOMBRE CLIENTE"
    },
    {
        "field": "tipo_cliente",
        "header": "TIPO CLIENTE"
    },
    {
        "field": "canal",
        "header": "CANAL"
    },
    {
        "field": "numero_recibo",
        "header": "NUMERO RECIBO"
    },
    {
        "field": "placa_vehiculo",
        "header": "PLACA VEHICULO"
    },
    {
        "field": "cod_cliente_destinario",
        "header": "COD. CLIENTE DESTINATARIO"
    },
    {
        "field": "centro_costo",
        "header": "CENTRO COSTO"
    },
    {
        "field": "kilometraje",
        "header": "KILOMETRAJE"
    },
    {
        "field": "codigo_producto",
        "header": "COD. PRODUCTO"
    },
    {
        "field": "producto",
        "header": "PRODUCTO"
    },
    {
        "field": "precio_venta",
        "header": "PRECIO VENTA"
    },
    {
        "field": "valor_venta",
        "header": "VALOR VENTA"
    },
    {
        "field": "volumen_vendido",
        "header": "VOLUMEN VENDIDO"
    },
    {
        "field": "valor_descuento",
        "header": "VALOR DESCUENTO"
    },
    {
        "field": "modificada",
        "header": "MODIFICADA"
    }
]

console.log(arr2.reduce((acumulado, valor, index)=>{
    console.log(valor.header);
    return{
        ...acumulado,[valor.header]:valor.header
    } 
}));
 

