console.log('Starting app');

setTimeout(() => {
  console.log('Inside callback right now.');
}, 2000);

setTimeout(() => {
  console.log('Inisde second callback, no delay');
}, 0);

console.log('Finishing up');
