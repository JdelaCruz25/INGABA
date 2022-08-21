
/* CURSOS */

class Cursos { 
    constructor (id, producto, precio, vacantes=10, duracion, horarios, imagen){
        this.id=id,
        this.producto=producto,
        this.precio=precio,
        this.vacantes=vacantes,
        this.duracion=duracion,
        this.horarios=horarios,
        this.imagen=imagen
    }
}

const curso1 = new Cursos (1, "Gastronomía I", 14000, undefined, 8, "Lunes y miércoles de 20 a 22 hs.", "../archivos-multimedia/gastronomia-1.png")
const curso2 = new Cursos (2, "Gastronomía II", 16000, undefined, 16, "Lunes y miércoles de 18 a 20 hs.", "../archivos-multimedia/gastronomia-2.png")
const curso3 = new Cursos (3, "Panadería", 18000, undefined, 8, "Miércoles y viernes de 14 a 16 hs.", "../archivos-multimedia/panaderia.png")
const curso4 = new Cursos (4, "Pastelería I", 20000, undefined, 16, "Martes y jueves de 20 a 22 hs.", "../archivos-multimedia/pasteleria-1.png")
const curso5 = new Cursos (5, "Pastelería II", 21000, undefined, 18, "Martes y jueves de 18 a 20 hs.", "../archivos-multimedia/pasteleria-2.png")
const curso6 = new Cursos (6, "Cocina vegana", 20000, undefined, 18, "Martes y viernes de 16 a 18 hs.", "../archivos-multimedia/vegano.png")
const curso7 = new Cursos (7, "Cocineritos I", 15000, undefined, 8, "Lunes de 14 a 16 hs. y jueves de 16 a 18 hs.", "../archivos-multimedia/cocineritos-1.png")
const curso8 = new Cursos (8, "Cocineritos II", 17000, undefined, 10, "Martes y jueves de 14 a 16 hs.", "../archivos-multimedia/cocineritos-2.png")
const curso9 = new Cursos (9, "Cocina para celíacos", 20000, undefined, 16, "Lunes de 16 a 18 hs. y viernes de 18 a 20 hs.", "../archivos-multimedia/menu-ejecutivo.png")
const curso10= new Cursos (10, "Viandas para menú ejecutivo", 16000, undefined, 8, "Miércoles de 16 a 18 hs. y viernes de 20 a 22 hs.", "../archivos-multimedia/celiacos.png")


const cursos = [curso1, curso2, curso3, curso4, curso5, curso6, curso7, curso8, curso9, curso10]

const divCursos=document.getElementById("divCursos")

cursos.forEach(c=> {                 /* id="curso${producto.id}"> */
    divCursos.innerHTML += `
    <div class="card card-curso"> 
        <img src=${c.imagen} class="card-img-top" alt="img">
        <p class="t-card">${c.producto}</p>
        <p class="p-card">$${c.precio}.-</p>
        <p class"d-card">Duración: ${c.duracion} hs.</p>
        <a class="btn btn-primary btn-card" id="botonAgregar">Añadir al carrito</a>
    </div> 
    `
})



/* AGREGAR CARRITO */

const carrito = []

if (localStorage.getItem('storageCarrito')) {
    car=JSON.parse(localStorage.getItem('storageCarrito'))
}
else {
    localStorage.setItem('storageCarrito', JSON.stringify(car))
}

const botonAgregar=document.getElementById('botonAgregar')
const divCarrito=document.getElementById('divCarrito')

botonAgregar.addEventListener('click', () =>{

    let carritoStorage = JSON.parse(localStorage.getItem('storageCarrito'))
    divCarrito.innerHTML=""
    
    carritoStorage.forEach((cc) =>{
        divCarrito.innerHTML += `
        <div class="card border-primary mb-3" style="max-width: 20rem; margin:4px"> 
            <img src=${cc.imagen} class="card-img-top" alt="img">
            <p>${cc.producto}</p>
            <p>$${cc.precio}.-</p>

            <a class="btn btn-primary" id="botonEliminar">Eliminar</a>
        </div> 
        `
    })
})



/* MOSTRAR CARRITO */
/* 
carritoStorage.forEach((cc,'ndex)=>{
    document.getElementById(cc${index}).lastElementChild.lastElementChild.addEventListener('click',(=> {
        tareas.splice(indice)
    })
})

 */

/* productos.forEach
const agregarCurso = document.getElementsByClassName('botonAgregar') */
