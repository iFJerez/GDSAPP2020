

var MesNombre = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio',
'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


var diaNombre = [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];





export function funFecha(fecha){

  var hoy = transformaFecha()

    
    if(transformaFecha(fecha)===hoy){
          return 'Hoy'
    }
    else 
    {
       return transformaFecha(fecha)
    }
}

export function transformaFecha(fecha){

    if(fecha){
        var dia = diaNombre[new Date(fecha).getDay()];
        var numero = new Date(fecha).getDate(); //Current Date
        var mes = MesNombre[new Date(fecha).getMonth()];

        return dia + ', ' + numero + ' de ' + mes

    }
    else 
    {
        var dia = diaNombre[new Date().getDay()];
        var numero = new Date().getDate(); //Current Date
        var mes = MesNombre[new Date().getMonth()];

        return dia + ', ' + numero + ' de ' + mes
    }


}


