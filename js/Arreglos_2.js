let ciudades = [];
do {
let nombre = prompt("ingresa el nombre de una ciudad")

ciudades.push(nombre)
} while (confirm("¿Desea continuar?"));
document.write("<h1>1) Ciudades</h1>")
for (i=0 ; i<ciudades.length; i++) {
    document.write("<ul>"+
        "<li>"+ ciudades[i]+ 
        "</li>"+
    "</ul>");
}
document.write("<h2>2) Cantidad de ciudades ("+ciudades.length+")</h2>");

document.write("<h3>3) Añade en última posición la ciudad de París.</h3>")
ciudades.push("paris")
for (i=0 ; i<ciudades.length; i++) {
    document.write("<ul>"+
        "<li>"+ ciudades[i]+ 
        "</li>"+
    "</ul>");
}
document.write("<h4>4) Escribe por pantalla el elemento que ocupa la segunda posición.</h4>");
document.write(ciudades[1]);

document.write("<h5>5) Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'..</h5>");
ciudades.splice(1,1,"barcelona");
for (i=0 ; i<ciudades.length; i++) {
    document.write("<ul>"+
        "<li>"+ ciudades[i]+ 
        "</li>"+
    "</ul>");
}