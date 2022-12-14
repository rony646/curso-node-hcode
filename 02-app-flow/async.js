function sum(x) {
  return new  Promise((resolve, reject) => {
    if(Number(x) == NaN || Number(x) === undefined || typeof x !== 'number') {
      reject('This is not correct');
    }
    setTimeout(() => {
       resolve(x + 5000);
    }, 3000);
  }) 
}

async function main() {
  try {
    const resultado = await sum('$');
    console.log(`Resultado: ${resultado}`);
  } catch (error) {
    console.log(`We got a problem: ${error}`)
    console.log(process.env.USER)
  }
}

main();
