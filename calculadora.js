function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

sumar(2, 3);
restar(5, 2);

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) throw new Error("División por cero");
  return a / b;
}
