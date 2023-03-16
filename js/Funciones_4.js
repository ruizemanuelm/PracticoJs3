const num = parseInt(prompt("ingresa un número"));

function tabla(num) {
  document.write("<h1>Tabla del " + num + "</h1>");

  document.write("<ul>");
  for (i = 1; i <= 10; i++) {
    document.write("<li>");
    document.write(num + " x " + i + " = " + num * i);
    document.write("</li>");
  }
  document.write("</ul>");
}
tabla(num);