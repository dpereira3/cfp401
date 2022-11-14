
function faq(){
    let salida = document.getElementById('principal');
    let divnuevo = document.createElement('div');
    divnuevo.className = "mt-5";
    
    salida.innerHTML = '';

    let titulo = document.createElement('p');
    titulo.innerHTML = '<b class="destacado">Preguntas Frecuentes</b>';
    divnuevo.append(titulo);

    const sec = document.createElement('section');
    sec.className = 'faq-container';
    divnuevo.append(sec);

    preguntas = []; //array con las preguntas del faq
    pregunta1 = ['<h4>¿Qué documentación necesito para inscribirme en un curso?</h4>', "<ul><li>Copia de DNI.</li> <li>Copia de certificado de estudios primarios o secundarios.</li></ul>"];
    preguntas.push(pregunta1);
    pregunta1 = ['<h4>¿Puedo inscribirme en cualquier horario durante el periodo de inscripción?</h4>', "<p>Si.</p> <p>Los cursos tienen vacantes limitadas. Y si hay vacantes disponibles podes inscribirte. Tene en cuenta que la inscripción es por orden de llegada.</p>"];
    preguntas.push(pregunta1);
    pregunta1 = ['<h4> ¿Los cursos tienen algun costo?</h4>', "<p>No.</p> <p>Si tenes la posibilidad, la Cooperadora del Centro, cuenta con bonos contribución que podes abonar al inscribirte, y luego cada mes durante la cursada.</p>"];
    preguntas.push(pregunta1);
    pregunta1 = ['<h4>¿Qué documentación debo presentar para realizar la visita al médico?</h4>', "<p>Deberá presentar el bono de la obra social de la categoría que corresponda según el profesional y los estudios realizados que tengan relación con el tema de su consulta.</p>"];
    //preguntas.push(pregunta1);
    pregunta1 = ['<h4> ¿Qué documentación debo traer al momento de la internación?</h4>', "<p>Original y fotocopia de:</p><p>- Carnet de obra social del paciente.</p><p>- Fotocopia del último recibo de sueldo del titular, o de pago si es afiliado voluntario, del mes vigente.</p><p>- Fotocopia de DNI o LE/LC del paciente, 1º y 2º hoja y cambio de domicilio.</p><p>- Orden de internación.</p><p>- Estudios prequirúrgicos.</p>"];
    //preguntas.push(pregunta1);

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