const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
}
document.body.addEventListener("keydown", init)
  let index = 0
function init (){
  debugger;

  let key= event.which;
if (key===code[index]){
  index++
if (index === code.length){
  Alert=("Konami");
}
}
else {
  index = 0;
}
}