/**
 * Permite convertir unidades entre metro y otros
 * @method conver
 * @param {string} id - Id del elemento imput del html
 * @param {number} valor - Contiene el valor del imput

 */

 conver = (id,valor)=> {
     let met, pul,pie, yar;
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
     document.Lasun.unid_metro.value = met;
     document.Lasun.unid_pulgada.value =pul;
     document.Lasun.unid_pie.value =pie;
     document.Lasun.unid_yarda.value= yar;
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
    document.opeMat.sum_total.value =res;
}