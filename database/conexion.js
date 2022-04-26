import mongoose from "mongoose";


export async function conectarconbd(){

    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("exito Conectadonos a BD")

    }catch(error){

        console.log("Error en al conexion con BD" +error)
    }

}