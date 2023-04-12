const formRef = document.querySelector(".form");
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  
  const delay = Number(formRef.elements.delay.value);
  const step = Number(formRef.elements.step.value);
  const amount = Number(formRef.elements.amount.value);
  

  for (let i = 1; i <= amount; i += 1){
    let position = i;
    let promiseDelay = delay;
    promiseDelay += step;
    createPromise(position, promiseDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    
  }
}


function createPromise(position, delay) {
  const obj = { position, delay };
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(obj);
      } else {
        // Reject
        reject(obj);
      }
    }, delay);
  });
}