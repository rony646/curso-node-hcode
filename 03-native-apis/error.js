
function executeTo() {
  throw new Error('Something went wrong!');
}

function execute() {
  executeTo();
}
function init() {
  try {
    execute()
  } catch(err) {
    console.log('We got a problem', err.message);
  }
}

init();

console.log('After error');