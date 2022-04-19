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

//3.Servicio para buscar por ID
rutas.get('/api/v1/habitaciones/id/', function (req, res) {
    res.send('Hello World')
})

//4.Servicio para cambiar habitaciones
rutas.put('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
})

//5. Servicio para Eliminar Habitaciones
rutas.delete('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
})

//6. Servicio para Ingresar reserva
rutas.get('/api/v1/reserva/', function (req, res) {
    res.send('Hello World')
})

//7. Servicio buscar reserva
rutas.get('/api/v1/reserva/id/', function (req, res) {
    res.send('Hello World')
})

//8. Servicio para editar reserva
rutas.put('/api/v1/reserva/', function (req, res) {
    res.send('Hello World')
})

//9. Servicio para elimiar reserva
rutas.delete('/api/v1/reserva/', function (req, res) {
    res.send('Hello World')
})


//Rutas para los servicios de reserva