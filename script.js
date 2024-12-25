let curindex = 1;

function addtodo() {
  let inVal = document.querySelector(".add input").value;
  if (inVal === '') {
    alert("Please type a todo.");
  } else {
    document.querySelector(".add input").value = ''; 
    const parEL = document.querySelector("#todolist");
    let newEl = document.createElement("div");
    newEl.setAttribute("class", `todo-${curindex}`);
    newEl.innerHTML = `<h4>${curindex}. ${inVal}</h4><button onclick="deletetodo(${curindex})">Done</button>`;
    parEL.appendChild(newEl);
    curindex += 1;
  }
}

function deletetodo(index) {
  const curEl = document.querySelector(`.todo-${index}`);
  if (curEl) {
    curEl.remove(); 
  }
  curindex -=1;
} 