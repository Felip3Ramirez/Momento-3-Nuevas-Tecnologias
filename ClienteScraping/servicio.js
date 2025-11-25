// Función para consultar las selecciones
export async function consultarSelecciones(){
    try {
        let url = "http://localhost:8000/ranking"
        let peticion = { method: "GET" }
        let respuesta = await fetch(url, peticion)
        let datos = await respuesta.json()
        return datos
    } catch (error) {
        console.log("Error:", error)
        return {items: []}
    }
}

// Función para obtener la bandera (CON IMAGENES)
export function obtenerBandera(pais) {
    // Convertir el nombre del país a código de país
    let codigo = ''
    
    if (pais === 'Spain') codigo = 'es'
    else if (pais === 'Argentina') codigo = 'ar'
    else if (pais === 'France') codigo = 'fr'
    else if (pais === 'England') codigo = 'gb-eng'
    else if (pais === 'Brazil') codigo = 'br'
    else if (pais === 'Portugal') codigo = 'pt'
    else if (pais === 'Netherlands') codigo = 'nl'
    else if (pais === 'Belgium') codigo = 'be'
    else if (pais === 'Germany') codigo = 'de'
    else if (pais === 'Croatia') codigo = 'hr'
    else if (pais === 'Morocco') codigo = 'ma'
    else if (pais === 'Italy') codigo = 'it'
    else if (pais === 'Colombia') codigo = 'co'
    else if (pais === 'United States') codigo = 'us'
    else if (pais === 'Mexico') codigo = 'mx'
    else if (pais === 'Uruguay') codigo = 'uy'
    else if (pais === 'Switzerland') codigo = 'ch'
    else if (pais === 'Japan') codigo = 'jp'
    else if (pais === 'Senegal') codigo = 'sn'
    else if (pais === 'Iran') codigo = 'ir'
    else codigo = 'un' // Bandera por defecto (Naciones Unidas)
    
    // URL de la bandera
    let urlBandera = `https://flagcdn.com/w80/${codigo}.png`
    
    return urlBandera
}