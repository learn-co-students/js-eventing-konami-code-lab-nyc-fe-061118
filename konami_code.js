const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
document.body.addEventListener("keydown", playKonami);
 // console.log(init.key);

let index = 0;

function playKonami(event) {
  debugger;
  let key = event.which;
  if (key === code[index]){
    index++
    if (index === code.length){
      alert("konami");
      index=0;
    }
  } else{
    alert('Wrong Code')
    index=0;
  }
}

