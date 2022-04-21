
export class ControladorReserva{
    constructor(){}

    ingresar(request,response){         
         let datosReserva=request.body
         response.status(200).json({
             mensaje:"Exito ingresando la reserva",
             datosIngresados:datosReserva,
             estado:true
         })
    }
    buscar(request,response){
        let id=request.params.id
        response.status(200).json({
            mensaje:"Exito buscando reserva por Id",
            datos:"Datos del id "+id,
            estado:true
        })
    }
    editar(request,response){
        let id=request.params.id
        let datosPeticion=request.body 
        response.status(200).json({
            mensaje:"Exito editando la reserva por Id",
            datos:"Datos del id "+id,
            estado:true
        })
    }

    eliminar(request,response){
        let id=request.params.id //id que llega por la URL
        response.status(200).json({
            mensaje:"Exito eliminando la reserva por Id",
            datos:"Datos del id "+id,
            estado:true
        })
    }
}