
function faq(){
    let salida = document.getElementById('principal');
    let divnuevo = document.createElement('div');
    
    salida.innerHTML = '';

    let titulo = document.createElement('p');
    titulo.innerHTML = '<b class="destacado">Preguntas Frecuentes</b>';
    divnuevo.append(titulo);

    const sec = document.createElement('section');
    sec.className = 'faq-container';
    divnuevo.append(sec);

    preguntas = []; //array con las preguntas del faq
    pregunta1 = ['<h4>¿Qué documentación necesito para atenderme en la guardia?</h4>', "<p>Si es afiliado a alguna obra social deberá presentar un bono categoría A. Si no cuenta con obra social deberá abonar la consulta, disponiendo de 48 hs. para tramitar el reintegro correspondiente.</p>"];
    preguntas.push(pregunta1);
    pregunta1 = ['<h4>¿Dónde se entregan los resultados de los análisis y estudios?</h4>', "<p>- Hematología: en secretaria consultorios PB de lunes a viernes de 8 a 20 hs.</p><p>- Papanicolau y Estudios Histopatológicos: en Asoc. de Profesionales de lunes a viernes de 8 a 18 hs.</p><p>- Estudios de Laboratorio: en Laboratorio de lunes a viernes de 15 a 19 hs.</p><p>- Laboratorio de Bacteriología: en Laboratorio de lunes a viernes de 8 a 12 hs y de 14 a 19:30 hs. Sábados de 8 a 12 hs.</p><p>- Estudios de Ecografía, Rayos X, Resonancia Magnética y Tomografía, Hemodinamia, Medicina Nuclear y Cardiología: en las Secretarías de los respectivos servicios.</p>"];
    preguntas.push(pregunta1);
    pregunta1 = ['<h4> ¿Cuáles son los horarios de visita?</h4>', "<p>- Internación General: de 10 a 11 hs. y de 18 a 19 hs.</p><p>- Unidad de Terapia Intensiva: 11:00 a 11:30 hs. y de 18:00 a 18:30 hs.</p><p>- Unidad Coronaria: 10:00 a 10:30 hs. y de 17:00 a 17:30 hs.</p><p>- Pediatría: 10:30 a 11:00 hs. y de 15:30 a 16:00 hs.</p><p>- Neonatología: 11:00 a 11:30 hs. y de 16:00 a 16:30 hs.</p>"];
    preguntas.push(pregunta1);
    pregunta1 = ['<h4>¿Qué documentación debo presentar para realizar la visita al médico?</h4>', "<p>Deberá presentar el bono de la obra social de la categoría que corresponda según el profesional y los estudios realizados que tengan relación con el tema de su consulta.</p>"];
    preguntas.push(pregunta1);
    pregunta1 = ['<h4> ¿Qué documentación debo traer al momento de la internación?</h4>', "<p>Original y fotocopia de:</p><p>- Carnet de obra social del paciente.</p><p>- Fotocopia del último recibo de sueldo del titular, o de pago si es afiliado voluntario, del mes vigente.</p><p>- Fotocopia de DNI o LE/LC del paciente, 1º y 2º hoja y cambio de domicilio.</p><p>- Orden de internación.</p><p>- Estudios prequirúrgicos.</p>"];
    preguntas.push(pregunta1);

    //se recorre el array para generar las preguntas

    preguntas.forEach(function(elemento, indice, array) {
        let tarjeta = document.createElement('div');
        let preg = document.createElement('div');
        preg.innerHTML = elemento[0];
        preg.className = "faq-page";
        let sign = document.createElement('i');
        sign.className = "fa-solid fa-caret-down";
        let res = document.createElement('div');
        res.innerHTML = elemento[1];
        res.className = "faq-body";
        preg.append(sign);
        tarjeta.append(preg);
        
        tarjeta.append(res);
        sec.append(tarjeta);
    })

    salida.append(divnuevo);

    let faq = document.getElementsByClassName("faq-page");
    let i;
    for (i = 0; i < faq.length; i++) {
        faq[i].addEventListener("click", function () {
            /* agrega y saca la clase active */
            this.classList.toggle("active");
            let flecha = this.getElementsByTagName('i');
            if (flecha[0].className == "fa-solid fa-caret-down") {
                flecha[0].className = "fa-solid fa-caret-up";
            } else {
                flecha[0].className = "fa-solid fa-caret-down";
            }
            /* Muestra y oculta la respuesta */
            var body = this.nextElementSibling;
            if (body.style.display === "block") {
                body.style.display = "none";
            } else {
                body.style.display = "block";
            }
        });
    }
    
    
}