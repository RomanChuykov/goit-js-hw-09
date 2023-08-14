

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        
        resolve({ position, delay });
      } else {
       
        reject({ position, delay });
      }
    }, delay);
  });
}


const delay=document.querySelector('input[name="delay"]');
const step=document.querySelector('input[name="step"');
const amount=document.querySelector('input[name="amount"');//value,valueAsNumber

function onSubmit(e){
  let varDelay=delay.valueAsNumber;
  e.preventDefault();  
  for (let index = 1; index <= amount.valueAsNumber; index++) {
    createPromise(index, varDelay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    varDelay+=step.valueAsNumber
  }
  
}

document.addEventListener('submit',onSubmit)
