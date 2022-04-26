import { modeloHabitacion } from "../models/habitacionModelo.js";

class ServicioHabitacion{

    constructor(){}

   async bsucarTodos(){
        let habitaciones=await modeloHabitacion.find()
        return habitaciones


    }

     async bsucarporid(id){

        let habitacion=await modeloHabitacion.find(id)
            return habitacion
        
    }

    async registrar(habitacio){
        let nuevahabitacion= new modeloHabitacion(habitacion)
        return await habitacionNueva.save()

    }

    async editar(id,habitacion){
        return await modeloHabitacion.findByIdAndUpdate(id,habitacion)


    }

    async  eliminaar(id){
        return await modeloHabitacion.findByIdAndUpdate(id)
    }


}