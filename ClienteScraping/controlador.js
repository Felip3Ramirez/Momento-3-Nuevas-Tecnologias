import { consultarSelecciones, obtenerBandera } from "./servicio.js"

document.addEventListener('DOMContentLoaded', function() {
    cargarSelecciones()
})

async function cargarSelecciones() {
    try {
        let contenedor = document.getElementById("contenedor")
        let cargando = document.getElementById("cargando")
        cargando.textContent = "Cargando selecciones..."
        
        let respuesta = await consultarSelecciones()
        console.log("Datos:", respuesta)
        
        cargando.style.display = "none"
        
        if (!respuesta.items || respuesta.items.length === 0) {
            contenedor.innerHTML = '<div class="col-12 text-center"><p>No hay datos</p></div>'
            return
        }
        
        let selecciones = respuesta.items.slice(0, 10)
        
        selecciones.forEach(function(seleccion) {
            // Crear columna
            let columna = document.createElement("div")
            columna.className = "col-md-6 col-lg-4 mb-4"
            
            // Crear tarjeta
            let tarjeta = document.createElement("div")
            tarjeta.className = "tarjeta-seleccion"
            
            // Crear número de ranking
            let numero = document.createElement("div")
            numero.className = "badge-ranking"
            numero.textContent = seleccion.rango
            
            // Crear bandera CON IMAGEN
            let bandera = document.createElement("img")
            bandera.className = "bandera-imagen"
            bandera.src = obtenerBandera(seleccion.pais)
            bandera.alt = `Bandera de ${seleccion.pais}`
            
            // Crear nombre del país
            let nombre = document.createElement("div")
            nombre.className = "nombre-pais"
            nombre.textContent = seleccion.pais
            
            // Crear puntuación
            let puntos = document.createElement("div")
            puntos.className = "puntuacion"
            puntos.textContent = seleccion.puntos
            
            // Crear texto "puntos"
            let textoPuntos = document.createElement("div")
            textoPuntos.className = "texto-puntos"
            textoPuntos.textContent = "puntos"
            
            // Agregar todo a la tarjeta
            tarjeta.appendChild(numero)
            tarjeta.appendChild(bandera)
            tarjeta.appendChild(nombre)
            tarjeta.appendChild(puntos)
            tarjeta.appendChild(textoPuntos)
            
            // Agregar tarjeta a la columna
            columna.appendChild(tarjeta)
            
            // Agregar columna al contenedor
            contenedor.appendChild(columna)
        })
        
    } catch (error) {
        console.log("Error:", error)
        document.getElementById("cargando").textContent = "Error al cargar"
    }
}