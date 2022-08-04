
/* CURSOS */

const divCursos=document.getElementById("divCursos")

fetch('productos.json')
.then(promise => promise.json())
.then (cursos => {
    cursos.forEach(c=> {                 /* id="curso${producto.id}"> */
        divCursos.innerHTML += `
        <div class="card border-primary mb-3" style="max-width: 20rem; margin:4px"> 
            <img src=${c.imagen} class="card-img-top" alt="img">
            <p>${c.producto}</p>
            <p>$${c.precio}.-</p>
            <p>Vacantes: ${c.vacantes}</p>
            <p>Duración: ${c.duracion}</p>
            <a class="btn btn-primary" id="botonAgregar">Añadir al carrito</a>
        </div> 
        `
    })
})

async function obtenerCursos () {
    const info = await fetch ('productos.json')
    const infoConv = await info.json()
    return infoConv
}

const arrayCursos = obtenerCursos()

arrayCursos.then (cursos => console.log(data))


/* AGREGAR CARRITO */

/* const carrito = []

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
 */


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
