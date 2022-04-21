//El controlador tiene la logica del negocio
export class ControladorHabitacion{

    constructor(){}

    insertar(request,response){
        //recibir los datos de la peticion
        let datosPeticion=request.body //Recibo datos del body

        //conexion con la BD

        //Ejecutar la consulta (es decirle a la base de datos que inserte)

        //Envio la respuesta
        response.status(200).json({
            mensaje:"Exito en el ingreso de datos",
            datosIngresados:datosPeticion,
            estado:true
        })
    }

    buscarTodos(request,response){
        let datosPrueba=[
            {nombre:"hab1",precio:300000},
            {nombre:"hab2",precio:400000}
        ]
        response.status(200).json({
            mensaje:"Exito buscando la informacion",
            datos:datosPrueba,
            estado:true
        })
    }

    buscarId(request,response){
        let id=request.params.id //id que llega por la URL
        response.status(200).json({
            mensaje:"Exito buscando habitacion por Id",
            datos:"Datos del id "+id,
            estado:true
        })
    }

    editar(request,response){
        let id=request.params.id //id que llega por la URL
        let datosPeticion=request.body //Recibo datos del body
        response.status(200).json({
            mensaje:"Exito editando habitacion por Id",
            datos:"Datos del id "+id,
            estado:true
        })
    }

    eliminar(request,response){
        let id=request.params.id //id que llega por la URL
        response.status(200).json({
            mensaje:"Exito eliminando habitacion por Id",
            datos:"Datos del id "+id,
            estado:true
        })
    }

}