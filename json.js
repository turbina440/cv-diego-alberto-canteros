const persona ='{"nombre":" Diego Alberto","apellido":" Canteros","edad": " 44","nacionalidad":" argentino","genero":" masculino"}';
const obj = JSON.parse(persona);
console.log(obj);
document.getElementById("datos").innerHTML=
"NOMBRE:"+obj.nombre;
document.getElementById("datos1").innerHTML=
"APELLIDO:"+obj.apellido;
document.getElementById("datos2").innerHTML=
"EDAD:"+obj.edad;
document.getElementById("datos3").innerHTML=
"NACIONALIDAD:"+obj.nacionalidad;
document.getElementById("datos4").innerHTML=
"GENERO:"+obj.genero;
