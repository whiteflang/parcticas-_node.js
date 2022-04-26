import mongoose from 'mongoose'

// constante para crear el modelo de datos

const Schema=mongoose.Schema


const Reserva=new Schema({

     fecha_entrada:{
         type:Date,
         required:true
     },

     fecha_salida:{
         type:Date,
         required:true

     },

     nombre_persona:{
         type:String,
         required:true
     },

     cedula:{
        type:Number,
        required:true
    },


    
     costototal:{
         type:Number,
         required:true
     }
})

export const modeloReserva=mongoose.model('Reserva',Reserva)