function cargarContenido(url) {
   let contenedor = document.getElementById('principal')

   fetch(url)
   .then(response=> response.text())
   .then(text=> contenedor.innerHTML = text)

}

document.addEventListener('DOMContentLoaded', (event) => {
   cargarContenido('home.html');
 });

function cargarContenidoJS(url) {
   let contenedor = document.getElementById('principal')
   setInnerHTML(contenedor, url);
}

 
