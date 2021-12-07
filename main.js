function putNumber(num) {
  let numero = calculo.value
  calculo.value = numero + num
}

function eraseEverthing() {
  calculo.value = ''
}

function back() {
  let resultado = calculo.value
  calculo.value = resultado.substring(0, resultado.length - 1)
}

function calc() {
  calculo.onkeypress = function (x) {
    let chars = String.fromCharCode(x.which)
    if (
      '1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM/*-+.'.indexOf(
        chars
      ) < 0
    )
      return false
  }
  let resp = calculo.value
  if (resp != '') {
    calculo.value = eval(resp)
  } else {
    calculo.value = '[ERRO]'
  }
}
