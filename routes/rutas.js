import express from 'express'

export let rutas=express.Router()
//Defino las rutas que voy a utilizar

//Rutas para los servicios de habitaciones
//1.Servicio agregar habitacion
rutas.post('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
})

//2.Servicio para buscar todas las habitaciones
rutas.get('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World1')
})

//3.Servicio para bsucar por ID
rutas.get('/api/v1/habitaciones/id/', function (req, res) {
    res.send('Hello World')
})

//Rutas para los servicios de reserva