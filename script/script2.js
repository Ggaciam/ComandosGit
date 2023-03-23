let propietario,modelo,placa,tipo,fecha,hora,cantidad ;
let formulario = document.getElementById('form2')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    LeerDatos()
})
function LeerDatos() {
    propietario = document.getElementById('propietario').value
    modelo = document.getElementById('modelo').value
    placa = document.getElementById('placa').value
    tipo = document.getElementById('tipo').value
    fecha = document.getElementById('fecha').value
    hora = document.getElementById('hora').value
    cantidad = document.getElementById('cantidad').value

    ValidarData(propietario,modelo,placa,tipo,fecha,hora,cantidad)
    GuardarLocalStorage(propietario,modelo,placa,tipo,fecha,hora,cantidad)
}
function ValidarData( propietario,modelo,placa,tipo,fecha,hora,cantidad ) {
    alert()
    if(propietario.length==0 || modelo.length==0  || placa.length==0 ||tipo.length==0 || fecha.length==0  || hora.length==0 ||cantidad.length==0){
        sawl("buen trabajo","Oprime el boton", "error" )
        Swal.fire({
            titele:'Error!',
            text:'quieres continuar',
            icon:'error',
            confirmButttonText:'cool',
            iconColor:'purple',
        })
    }
}
function GuardarLocalStorage(propietario,modelo,placa,tipo,fecha,hora,cantidad){
    localStorage.setItem('Propietario',propietario)
    localStorage.setItem('Modelo',modelo)
    localStorage.setItem('Placa',placa)
    localStorage.setItem('Tipo',tipo)
    localStorage.setItem('Fecha',fecha)
    localStorage.setItem('Hora',hora)
    localStorage.setItem('Cantidad',cantidad)
    ListarData()
}
function ListarData(){
    let propiertarioUsu = localStorage.getItem('Propietario')
    let modeloUsu = localStorage.getItem('Modelo')
    let placaUsu = localStorage.getItem('Placa')
    let tipoUsu = localStorage.getItem('Tipo')
    let fechaUsu = localStorage.getItem('Fecha')
    let horaUsu = localStorage.getItem('Hora')
    let cantidadUsu = localStorage.getItem('Cantidad')  
}
