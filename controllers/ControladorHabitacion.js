import { ServicioHabitacion } from "../services/servicioHabitacion.js"

//CONTROLADOR TIENE LA LOGICA

//DEL NEGOCIO
export class ControladorHabitacion{

    

    constructor(){}

     async insertar(request,response){ 
        
        let servicio=new ServicioHabitacion()
        let datosPeticion=request.body

        try{
            await servicio.registrar(datosPeticion)
            response.status(200).json({
            mensaje:"exito en el ingreso de datos",
            datosIngresados: datosPeticion,
            estado:true
        })
        }
        catch(error){
            response.status(400).json({
                mensaje:"fallo buscando la informacion",
                datos:["no hay nada crack"],
                estado:false
        })
     }  
}

     async  buscarTodos(request,response){

        let servicio=new ServicioHabitacion()

        try{ 
            response.status(200).json({
            mensaje:"exito buscando la información",
            datos:await servicio.buscarTodos(),
            estado:true
        })  

        }catch(error){
            response.status(400).json({
                mensaje:"fallo buscando la informacion",
                datos:["no hay nada crack"],
                estado:false
        })
     }
 }

    buscarPorId(request,response){

    try{
        
        let servicio=new ServicioHabitacion()
        let id=request.params.id 
        response.status(200).json({
            mensaje:"exito buscando habitación por id",
            datos:await servicio.buscarPorId(id),
            estado:true
        })


    }catch(error){
        response.status(400).json({
            mensaje:"fallo buscando la informacion",
            datos:["no hay nada crack"],
            estado:false})
     }
  }

    


     async editar(request,response){

        let servicio=new ServicioHabitacion()
        let id=request.params.id //El id que llega por la URL
        let datosPeticion=request.body //Recibo datos BODY

        try{
            await servicio.editar(id,datosPeticion)
            response.status(200).json({
            mensaje:"exito editando habitación por id",
            datos:"Datos del id: "+id,
            estado:true})
        }catch(error){response.status(400).json({
                mensaje:"fallo buscando la informacion",
                datos:["no hay nada crack"],
                estado:false})
         

        }
     }

    async eliminar(request,response){


        let servicio=new ServicioHabitacion
        let id=request.params.id //El id que llega por la URL

        try{
            await
            response.status(200).json({
                mensaje:"exito eliminando habitación por id",
                datos:"Datos del id: "+id,
                estado:true})

        }catch(error){
            response.status(400).json({
                mensaje:"fallamos eliminando habitación por id",
                datos:"Datos del id: "+id,
                estado:false
            })




        }
        
      

    }

}