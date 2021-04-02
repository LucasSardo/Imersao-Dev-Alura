const vlrConvertido = document.querySelector('button')

vlrConvertido.onclick = () => {
var precoDolar = Number(document.querySelector('input').value)
  if (precoDolar < 1) {
      document.querySelector('span').innerHTML = "O Valor digitado é inválido!"
  } else {
      document.querySelector('span').innerHTML = 'O valor do Playstation convertido é de R$' +(precoDolar * 5.5).toFixed(2)
  }  
}