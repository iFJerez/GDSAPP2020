

var MesNombre = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio',
'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


var diaNombre = [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

var dia = diaNombre[new Date().getDay()];
var numero = new Date().getDate(); //Current Date
var mes = MesNombre[new Date().getMonth()];



export function funFecha(){
 return dia + ', ' + numero + ' de ' + mes

}




