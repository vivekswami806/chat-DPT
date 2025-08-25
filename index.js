
let submit = document.getElementById('submit');
let inputText = document.getElementById('clientSend');
// let resivedText = document.getElementById('clientResived');
let inputText2 = document.getElementById('inputText');

function userInputText(text) {
  let p = document.createElement('p');
  p.innerText = text;
  p.className = "text-pink-300 bg-neutral-900 font-semibold rounded-2xl px-4 py-2 m-4 max-w-xl ml-auto";
  inputText.appendChild(p);
  getResponseFromGpt(inputText2.value);
  inputText2.value = ""
}
function serverResponseText(text) {
  let p = document.createElement('p');
  p.innerText = text;
  p.className = "text-pink-300 bg-neutral-900 font-semibold rounded-2xl px-4 py-2 m-4 max-w-xl ml";
  inputText.appendChild(p);
}

async function getResponseFromGpt(input) {
  console.log("--- input|", input);
  let response = await fetch('http://127.0.0.1:3030/', 
  {method: "POST", 
   headers:{"Content-Type": "application/json",},
   body: JSON.stringify({userInput:input})
  });
  let data = await response.json();
  serverResponseText(data?.result)
  console.log("--- Data|", data);
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  userInputText(inputText2.value);
})
inputText2.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    userInputText(inputText2.value);
  }
});