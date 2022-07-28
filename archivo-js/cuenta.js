class Usuario {
    constructor (nombre,apellido,dni,contacto,email,pass) {
        this.nombre=nombre,
        this.apellido=apellido,
        this.dni=dni,
        this.contacto=contacto,
        this.email=email,
        this.pass=pass
    }
}

const formulario = document.getElementById('crearUsuario')
let usuarios = []

if (localStorage.getItem('storageUsuario')){
    usuarios = JSON.parse(localStorage.getItem('storageUsuario'))
}
else {
    localStorage.setItem('storageUsuario', JSON.stringify(usuarios))
}

formulario.addEventListener('submit',(event) =>{
    event.preventDefault()

    let nombre = document.getElementById('nombreUsuario').value
    let apellido = document.getElementById('apellidoUsuario').value
    let dni = document.getElementById('dniUsuario').value
    let contacto = document.getElementById('contactoUsuario').value
    let email = document.getElementById('emailUsuario').value
    let pass = document.getElementById('passUsuario').value

    const user = new Usuario (nombre, apellido, dni, contacto, email, pass)
    usuarios.push(user)
    
    formulario.reset()

})
