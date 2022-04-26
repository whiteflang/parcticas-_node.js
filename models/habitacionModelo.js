// IMportar Mongoose
import mongoose from 'mongoose'

// constante para crear el modelo de datos

const Schema=mongoose.Schema


const habitacion=new Schema({

     nombre:{
         type:String,
         required:true
     },

     foto:{
         type:String,
         required:true

     },

     descripcion:{
         type:String,
         required:true
     },
    
     precio:{
         type:Number,
         required:true
     }
})

export const modeloHabitacion=mongoose.model('habitaciones',habitacion)