const viewer = document.getElementById('viewer')
const btn0 = document.getElementById('zero');
const btn1 = document.getElementById('one');
const btn2 = document.getElementById('two');
const btn3 = document.getElementById('three');
const btn4 = document.getElementById('four');
const btn5 = document.getElementById('five');
const btn6 = document.getElementById('six');
const btn7 = document.getElementById('seven');
const btn8 = document.getElementById('eight');
const btn9 = document.getElementById('nine');
const clear = document.getElementById('clear');
const add = document.getElementById('add');
const menos = document.getElementById('subtract');
const vezes = document.getElementById('multiply');
const dividir = document.getElementById('divide');
const igual = document.getElementById('equals');
const ponto = document.getElementById('decimal');
const viewerNum1 = document.getElementById('num');
const apagar = document.getElementById('backspace');
const op = document.getElementById('op');
var result = 0;
var valor1 = 0;
var valor2 = 0;


function temZero(viewer, num) {
  if(viewer.textContent == 0){
      viewer.textContent = num;
      return num;
  } else {
    return viewer.textContent += num;
  }
}

function guardaNum1(viewer, viewerNum1) {
  return viewerNum1.textContent = viewer.textContent
}

function guardaNum2(viewer, valor2) {
  return viewer.textContent;
}

function soma(v1, v2) {
  return parseFloat(v1) + parseFloat(v2);
}
function subtracao(v1, v2) {
  return parseFloat(v1) - parseFloat(v2);
}
function multiplicacao(v1, v2) {
  return parseFloat(v1) * parseFloat(v2);
}
function divisao(v1, v2) {
  return parseFloat(v1) / parseFloat(v2);
}
function backspace(viewer) {
  let num = viewer.textContent;
  if (num.length  > 1) {
    // Remove o último dígito da string
    num = num.slice(0, -1);
  } else {
    // Substitui o único dígito por zero
    num = 0;
  }
  return viewer.textContent = num;
}
function mostrarResult(operacao,viewerNum1, viewer, result) {
 viewerNum1.textContent = '';
  operacao.textContent = '='
  viewer.textContent = result
}

viewer.textContent = 0;

btn0.addEventListener('click', function () {
  temZero(viewer, 0);

});

btn1.addEventListener('click', function () {
  temZero(viewer, 1);
});

btn2.addEventListener('click', function () {
  temZero(viewer, 2);
});
btn3.addEventListener('click', function () {
  temZero(viewer, 3);
});
btn4.addEventListener('click', function () {
  temZero(viewer, 4);
});
btn5.addEventListener('click', function () {
  temZero(viewer, 5);
});
btn6.addEventListener('click', function () {
  temZero(viewer, 6);
});
btn7.addEventListener('click', function () {
  temZero(viewer, 7);
});
btn8.addEventListener('click', function () {
  temZero(viewer, 8);
});
btn9.addEventListener('click', function () {
  temZero(viewer, 9);
});
clear.addEventListener('click', function () {
  viewer.textContent = 0;
  op.textContent = '';
  viewerNum1.textContent = '';
});

add.addEventListener('click', function () {
  valor1 = guardaNum1(viewer, viewerNum1);
  op.textContent = '+';
  viewer.textContent = 0;
});

menos.addEventListener('click', function () {
  valor1 = guardaNum1(viewer, viewerNum1);
  op.textContent = '-';
  viewer.textContent = 0;
});

vezes.addEventListener('click', function () {
  valor1 = guardaNum1(viewer, viewerNum1);
  op.textContent = 'x';
  viewer.textContent = 0;
});

dividir.addEventListener('click', function () {
  valor1 = guardaNum1(viewer, viewerNum1);
  op.textContent = '÷';
  viewer.textContent = 0;
});
apagar.addEventListener('click', function () {
  viewer.textContent = backspace(viewer);
});

ponto.addEventListener('click', function () {
  if (viewer.textContent.indexOf(".") !== -1) {
    viewer.textContent += '';
  } else {
    viewer.textContent += '.';
  }
  
});

igual.addEventListener('click', function () {
  valor2 = guardaNum2(viewer, valor2);
  if(op.textContent == '+'){
    result = soma(valor1, valor2);
    viewerNum1.textContent = valor1 + '+' + valor2;
    viewer.textContent = result;
  }if(op.textContent == '-'){
    result = subtracao(valor1, valor2);
    viewerNum1.textContent = valor1 + '-' + valor2;
    viewer.textContent = result;
  }if(op.textContent == 'x'){
    result = multiplicacao(valor1, valor2);
    viewerNum1.textContent = valor1 + 'x' + valor2;
    viewer.textContent = result;
  }if(op.textContent == '÷'){
    result = divisao(valor1, valor2);
    viewerNum1.textContent = valor1 + '÷' + valor2;
    viewer.textContent = result;
  }
  op.textContent = '=';
});

