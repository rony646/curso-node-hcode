function soma(x) {
  return new  Promise((resolve, reject) => {
    setTimeout(() => {
       resolve(x + 5000);
    }, 3000);
  }) 
}

soma(5000)
.then((resultado) => {
  console.log(`Resolvido: ${resultado}`);
})
.catch(err => {
  console.log(err)
})