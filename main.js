//las clases trabajarlas con CSS y los ID con javascript

//var cajas = document.getElementsByTagName('div'); //para acceder a las cajas
var cajas = document.getElementsByClassName('caja');//acceder por la clase

// cajas[0].textContent = 'Hola Mundo!'; fomrma de cambiar el nombre de un elemento de una caja
//cajas[0].innerHTML = '<h1>Hola</h1>';


var primeraCaja = document.getElementById('primeraCaja');//obtener el elemento por id

//primeraCaja[0].textContent = 'Hola Mundo!';
//primeraCaja.innerHTML = '<h1>Hola</h1>'; //se agrega un titulo h1 desde la consola con javascript a la pagina
primeraCaja.innerHTML = '<u>Hola Mundo</u>';

// ------ Creando Nodos o Elementos 5 pasos

//1.crear el elemento
var caja = document.createElement('div');

//2.crear un nodo del texto
var contenido = document.createTextNode('Hola Mundo');

//3.Juntar o Guardar el texto dentro del div con appendChild
caja.appendChild(contenido);

//4.Agregar atributos a la caja
caja.setAttribute('class', 'caja naranja');

//5.posicionar el elemento dentro del documento
//var contenedor = document.getElementById('contenedor');
//contenedor.appendChild(caja);la caja se posiciona al final

// ----- Modificando la clase o is de un elemento

caja.id = 'primera';
caja.className = 'caja naranja';

// ----- conociendo el elemento padre
var padre = cajas[0].parentNode;

//padre.insertBefore(caja, primeraCaja);//se coloca al inio del documento
//padre.insertBefore(caja, cajas[2]);//se posiciona antes de la caja 2

padre.replaceChild(caja, cajas[2]);//el primer valor es que elemento queremos insertar y el segundo que elemento queremos reemplazar

padre.removeChild(cajas[3]);//eliminar un nodo del DOM






