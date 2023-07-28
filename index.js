const buttons = document.querySelectorAll('.button')
const answer = document.querySelector('#screen')

for(let b of buttons) b.addEventListener ("click",
       function() {
      if(b.innerText === 'C'){
        answer.value = ' ';
      }
      else if(b.innerText === '='){
        answer.value = eval(answer.value)
      }
      else if(b.innerText === '+/-'){
        answer.value = '-';
      }
      // else if(b.innerText === 'x'){
      //   answer.value = 
      // }
      else {
        answer.value += b.innerText
      }
    }
);