/**
 * Permite convertir unidades entre metro y otros
 * @method conver
 * @param {string} id - Id del elemento imput del html
 * @param {number} valor - Contiene el valor del imput

 */

 conver = (id,valor)=> {
     let met, pul,pie, yar;
     if (valor.includes(",")){
         valor=valor.replace(",",".");
     }
    if (isNaN(valor)){
        alert("El valor es incorrecto");
        met ="";
        pul ="";
        pie ="";
        yar= "";
    }else    if (id==="metro"){
        met=valor;
        pul=valor*39.3701;
        pie= valor*3.28084
        yar= valor*1.09361;
    }else if (id==="pulgada"){

    }else if (id==="pie"){

    }else if (id==="yardas"){

    }
     document.Lasun.unid_metro.value = Math.round(met*100)/100;
     document.Lasun.unid_pulgada.value =Math.round(pul*100)/100;
     document.Lasun.unid_pie.value = Number(pie).toFixed(2);
     document.Lasun.unid_yarda.value= Number(yar).toFixed(2);
}
/**
 * Permite convertir entre grados y radianes
 * @method converGR
 * @param {string} id - Id del elemento imput del html
 */
 converGR=(id)=>{
     let gr, rad;
    if (id=="grados"){
        gr = document.getElementById("grados").value;
        document.getElementById("radianes").value = (gr*Math.PI)/180;
        if (isNaN(gr)){
            gr="";
            rad="";
        }
    } else if (id=="radianes"){
        rad = document.getElementById("radianes").value;
        document.getElementById("grados").value = (rad*180)/Math.PI;
        if (isNaN(rad)){
            gr="";
            rad="";
        }
    }
}
/**
 * muestra o oculta
 * @method mos_ocu
 * @param {string} id - Id del elemento imput del html
 */
let mos_ocu=(id)=>{
     if (id==="mostrarDiv"){
         document.getElementById("undiv").style.display = 'block';
     } else {
         document.getElementById("undiv").style.display = 'none';
     }
}
/**
 * suma dos elementos
 * @method sumar
 */
let sumar=()=>{
    //no letras
    let res, sum1, sum2;
    sum1 = Number(document.opeMat.sum_num1.value);
    sum2=Number(document.opeMat.sum_num2.value);
    res = sum1  + sum2;
    document.getElementById("totalS").innerHTML =res;

}
let generarUrl = ()=> {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;
    const urlcompl=`segundaWeb.html#${dist}#${uni}`;
    window.open((urlcompl));
}
let cargarValor = () =>{
    let urlCompleta = window.location.href;
    console.log(urlCompleta);
    urlCompleta=urlCompleta.split("#");
    const distancia =urlCompleta[1];
    const unidad=urlCompleta[2];
    document.getElementById("dist").value=`${distancia} ${unidad}`
}

let guardar = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;
    localStorage.setItem("distanciaLS", dist);
    localStorage.setItem("unidadesLS", uni);
    window.open("web2.html");
}
let cargarLS = () => {
    const distancia = localStorage.getItem("distanciaLS");
    const unidad = localStorage.getItem("unidadesLS");
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}
let dibujarCirCua =()=> {
  const canvas =document.getElementById("myCanvas");
  const ctx =canvas.getContext("2d");
    let xMax=canvas.width;
    let yMax = canvas.height;
    ctx.fillStyle="#56";
    let margen=20;
    ctx.fillRect(0+margen, yMax-50-margen, 60, 50);

  ctx.arc(xMax/2, yMax/2, 200, 0, 2*Math.PI);
  ctx.stroke();
  ctx.fill();

}
let limpiarCanvas =()=>{
    let canvas = document.getElementById("myCanvas");
    canvas.width= canvas.width;
}
var bandera;
let dibujar = ()=> {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let posX = event.clientX;
    let posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown= function (){bandera=true};
    canvas.onmouseup=function (){bandera=false};
    if (bandera){
        ctx.fillRect(posX, posY, 5,5);
        ctx.fill();
    }
}
let dibujarCuadriculado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchomax = canvas.width;
    const alturamax = canvas.height;
    const paso = 20;
    let eyeX;
    eyeX=-25;
    let eyeY;
    eyeY=-15
    //Lineas Verticales
    for (i=paso;i<=anchomax;) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturamax);
        ctx.strokeStyle = "#c754ad";
        ctx.stroke();
        ctx.font="10px Arial";
        ctx.fillStyle = "#9b8d8d";
        eyeX++;
        ctx.fillText(eyeX,i,alturamax/2);
        ctx.closePath();
        i+=paso;
    }
    //Lineas horisontales
    for (i=paso;i<=alturamax;i=i+paso) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(anchomax, i);
        ctx.strokeStyle = "#c754ad";
        ctx.stroke();
        ctx.font="10px Arial";
        ctx.fillStyle = "#9b8d8d";
        eyeY++;
        ctx.fillText(eyeY,anchomax/2, i);
        ctx.closePath();
    }
    //eje x
    ctx.beginPath();
    ctx.moveTo(0, alturamax/2);
    ctx.lineTo(anchomax, alturamax/2);
    ctx.strokeStyle = "#8c070b";
    ctx.stroke();
    ctx.closePath();
    //eje y
    ctx.beginPath();
    ctx.moveTo(anchomax/2, 0);
    ctx.lineTo(anchomax/2, alturamax);
    ctx.strokeStyle = "#8c070b";
    ctx.stroke();
    ctx.closePath();
}

let dibujarimagen =(posX, posY)=>{
    const canvas =document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchomax = canvas.width;
    const alturamax = canvas.height;
    canvas.width=canvas.width;
    console.log(posX,posY);
    let img = new Image();
    img.src = "images/auto.png";
    if (posX<0 ||posY<0 || posX>= anchomax ||posY>=alturamax){
        opendialog();
    }else {
    img.onload = function () {
        ctx.drawImage(img, posX, posY);
    }
    }
}
let cerrardialog =()=>{
    const dialog = document.getElementById("myDialog")
    dialog.close();
}
let opendialog =()=>{
    const dialog = document.getElementById("myDialog")
    dialog.showModal();
}
var x=0;
var dx = 2;
let animarauto =()=> {
    const canvas =document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");


    let img = new Image();
    img.src = "images/auto.png";

    img.onload = function () {
        canvas.width=canvas.width;

        ctx.drawImage(img, x, 100);
    }
    x+=dx;
    if (x>canvas.width){
        x=-150;
    }
}
var intervalid;
let detenerAuto = () => {
    console.log("Se detuvo el auto")
    clearInterval(intervalId); // Detener la animación
}
let comenzaranimacion =()=>{
    console.log ("Se llamo a comenzar animacion");
    intervalid= setInterval(animarauto, 20);
    setTimeout(detenerAuto, 6000);
}