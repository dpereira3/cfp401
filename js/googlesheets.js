//se define el lugar de origen de los datos
//https://docs.google.com/spreadsheets/d/11eub86kdPTUx3FiVKgk5rDpZlQGpchNK7WJtoyjIkTs/edit?usp=sharing
//Enlace a drive PereiraDLM Cursos2023
const sheetID = '11eub86kdPTUx3FiVKgk5rDpZlQGpchNK7WJtoyjIkTs';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
//const sheetName = 'manana';
const query = encodeURIComponent('select *');
//const url = `${base}&sheet=${sheetName}&tq=${query}`;


const output = document.getElementById('principal');
const div = document.createElement('div');

//se solicitan los datos y se pasan a json para incorporar al sitio
function cursos(hoja){
    console.log('ready');
    let data = [];
    let url = `${base}&sheet=${hoja}&tq=${query}`;
    fetch(url)
    .then(res => res.text())
    .then(rep =>{
        //console.log(rep);
        const jsData = JSON.parse(rep.substring(47).slice(0,-2));
        //console.log(jsData);
        const colz = [];
        jsData.table.cols.forEach((heading)=>{
            if(heading.id) {
                colz.push(heading.id.toLowerCase().replace(/\s/g,''));
            }
        })
        jsData.table.rows.forEach((main)=>{
            const row = {};
            colz.forEach((ele,ind)=>{
                //console.log(ele);
                row[ele] = (main.c[ind] != null) ? main.c[ind].v : '';
            })
            data.push(row);
        })
        output.innerHTML = '';
        maker(data);
        //console.log(data);
        })
}

//se generan las tarjetas por especialidad al recorrer los datos
function maker(json){
    const div = document.createElement('div');
    div.className = "mt-5";
    
    let titulo = document.createElement('p');
    titulo.innerHTML = '<b class="destacado">Especialidades</b>';
    div.append(titulo);
    output.append(div);

    json.forEach((row)=>{
        //console.log(row);
        const tarjeta = document.createElement('div');
        tarjeta.className = "item-esp";

        const titulo = document.createElement('div');
        titulo.className = "titulo";
        const esp = document.createElement('p');
        esp.innerHTML = "<b>" + row['a'] + "</b>";
        titulo.append(esp);
        
        const horario = document.createElement('div');
        horario.className = "horario";
        let lunes = document.createElement('p');
        lunes.className = "column-item lunes";
        lunes.textContent = "Lunes";
        let martes = document.createElement('p');
        martes.className = "column-item martes";
        martes.textContent = "Martes";
        let miercoles = document.createElement('p');
        miercoles.className = "column-item miercoles";
        miercoles.textContent = "Miercoles";
        let jueves = document.createElement('p');
        jueves.className = "column-item jueves";
        jueves.textContent = "Jueves";
        let viernes = document.createElement('p');
        viernes.className = "column-item viernes";
        viernes.textContent = "Viernes";

        let hlunes = document.createElement('p');
        if (row['b'] != ''){
            hlunes.className = "column-item hlunes";
        }else{
            hlunes.className = "column-item hlunes resaltado";
        }
        hlunes.textContent = row['b'];

        let hmartes = document.createElement('p');
        if (row['c'] != ''){
            hmartes.className = "column-item hmartes";
        }else{
            hmartes.className = "column-item hmartes resaltado";
        }
        hmartes.textContent = row['c'];

        let hmiercoles = document.createElement('p');
        if (row['d'] != ''){
            hmiercoles.className = "column-item hmiercoles";
        }else{
            hmiercoles.className = "column-item hmiercoles resaltado";
        }
        hmiercoles.textContent = row['d'];

        let hjueves = document.createElement('p');
        if (row['e'] != ''){
            hjueves.className = "column-item hjueves";
        }else{
            hjueves.className = "column-item hjueves resaltado";
        }
        hjueves.textContent = row['e'];

        let hviernes = document.createElement('p');
        if (row['f'] != ''){
            hviernes.className = "column-item hviernes";
        }else{
            hviernes.className = "column-item hviernes resaltado";
        }
        hviernes.textContent = row['f'];
        
        horario.append(lunes, martes, miercoles, jueves, viernes, hlunes, hmartes, hmiercoles, hjueves, hviernes);
        
        tarjeta.append(titulo);
        tarjeta.append(horario); 
        
        
        div.append(tarjeta);
    })
}