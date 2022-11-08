

//se genera el formulario de contacto.
function contacto(){
    let salida2 = document.getElementById('principal');
    let divformulario = document.createElement('div');
    divformulario.className = "form-contacto";
    salida2.innerHTML = '';

    let titulo = document.createElement('p');
    titulo.innerHTML = '<b class="destacado">Formulario de Contacto</b>';

    let formulario = document.createElement('form');
    formulario.method = 'post';
    formulario.action = '';
    
    let nombrelabel = document.createElement('label');
    nombrelabel.innerHTML = 'Nombre: <span class="obligatorio">*</span>';
    nombrelabel.for = "nombre";
    let nombre = document.createElement('input');
    nombre.name = "nombre";
    nombre.placeholder = "Ingrese su nombre";
    nombre.type = "text";
    nombre.required = true;
    
    let emaillabel = document.createElement('label');
    emaillabel.innerHTML = 'E-mail: <span class="obligatorio">*</span>';
    emaillabel.for = "email";
    let email = document.createElement('input');
    email.name = "email";
    email.placeholder = "Ingrese su e-mail";
    email.type = "email";
    email.required = true;

    let tellabel = document.createElement('label');
    tellabel.innerHTML = 'Teléfono: <span class="obligatorio">*</span>';
    tellabel.for = "telefono";
    let tel = document.createElement('input');
    tel.name = "telefono";
    tel.placeholder = "Ingrese su número de teléfono";
    tel.type = "tel";
    tel.required = true;

    let asuntolabel = document.createElement('label');
    asuntolabel.innerHTML = 'Asunto: <span class="obligatorio">*</span>';
    asuntolabel.for = "asunto";
    let asunto = document.createElement('input');
    asunto.name = "asunto";
    asunto.placeholder = "Ingrese el tema de su consulta";
    asunto.type = "text";
    asunto.required = true;

    let mensajelabel = document.createElement('label');
    mensajelabel.innerHTML = 'Mensaje: <span class="obligatorio">*</span>';
    mensajelabel.for = "mensaje";
    let mensaje = document.createElement('textarea');
    mensaje.name = "mensaje";
    mensaje.placeholder = "Ingrese su consulta";
    mensaje.required = true;

    let aviso = document.createElement('p');
    aviso.innerHTML = '<span class="obligatorio">* los campos son obligatorios</span>';

    let boton = document.createElement('button');
    boton.type = "submit";
    boton.innerText = "Enviar";

    
    formulario.append(titulo);
    formulario.append(nombrelabel);
    formulario.append(nombre);
    formulario.append(emaillabel);
    formulario.append(email);
    formulario.append(tellabel);
    formulario.append(tel);
    formulario.append(asuntolabel);
    formulario.append(asunto);
    formulario.append(mensajelabel);
    formulario.append(mensaje);
    formulario.append(aviso);
    formulario.append(boton);

    divformulario.append(formulario);

    salida2.append(divformulario);

}