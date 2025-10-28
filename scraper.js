let i = 1;
const max = 100;
const intervalId = setInterval(() => {
  console.log(i);
  if (i >= max) {
    clearInterval(intervalId);
    console.log('Selesai');
  }
  i++;
}, 1000);
