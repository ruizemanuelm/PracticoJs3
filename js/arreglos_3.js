let dado1;
let dado2;
let suma;
let SumaDados = [];

let valor;
let cantidad;
document.write("<h2> Suma </h2>");
for (let i = 0; i < 50; i++) {
  dado1 = parseInt(Math.random() * 6 + 1);
  dado2 = parseInt(Math.random() * 6 + 1);
  suma = dado1 + dado2;
  document.write( dado1 + " + " + dado2 +" = " + suma + "<br>");
  SumaDados.push(suma);

}

SumaDados.sort(function (a, b) {
  return a - b;
});

document.write("<h2>cantidad de repeticiones:</h2>");
for (let i = 0; i < SumaDados.length; i++) {
  if (valor !== SumaDados[i]) {
    valor = SumaDados[i];
    cantidad = 0;
    for (let j = i; j < SumaDados.length; j++) {
      if (valor === SumaDados[j]) {
        cantidad++;
      }
    }
    document.write( valor + " => " + cantidad + "<br>");
  }
}