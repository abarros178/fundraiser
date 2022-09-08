import { message } from "antd"

export const formularioDonarValidation = (form) => {
    if (!form.nombre) {
        message.error("Debe registrar todos los valores")
        return false
    }
    if (!form.tipo) {
        message.error("Debe registrar todos los valores")
        return false
    }
    if (form.monto_donacion === 0) {
        message.error("Debe registrar todos los valores")
        return false
    }
    if (!form.medio_pago) {
        message.error("Debe registrar todos los valores")
        return false
    }
    return true
}