let firstInput = document.querySelector('.first-input')
let secondInput = document.querySelector('.second-input')

let buttonPlus = document.querySelector('.button-plus')
let buttonMinus = document.querySelector('.button-minus')
let buttonMultiply = document.querySelector('.button-multiply')
let buttonDevide = document.querySelector('.button-devide')

let buttonClear = document.querySelector('.button-clear')
let resultStroke = document.querySelector('.result')


buttonClear.addEventListener('click', function(){
   firstInput.value = ''
   secondInput.value = ''
   resultStroke.innerText = ''
})


buttonPlus.addEventListener('click', function(){
   let fInput = parseInt(firstInput.value)
   let sInput = parseInt(secondInput.value)
   
   let totalSum = fInput + sInput
   resultStroke.innerText = totalSum    
})

buttonMinus.addEventListener('click', function(){
   let fInput = parseInt(firstInput.value)
   let sInput = parseInt(secondInput.value)

   let totalSum = fInput - sInput
   resultStroke.innerText = totalSum
})

buttonMultiply.addEventListener('click', function(){
   fInput = parseInt(firstInput.value)
   sInput = parseInt(secondInput.value)

   let totalSum = fInput * sInput
   resultStroke.innerText = totalSum
})

buttonDevide.addEventListener('click', function (){
   fInput = parseInt(firstInput.value)
   sInput = parseInt(secondInput.value)

   let totalSum = fInput / sInput
   resultStroke.innerText = totalSum
})