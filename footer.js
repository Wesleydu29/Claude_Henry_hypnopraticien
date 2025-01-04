const baliseFooter = document.getElementById("footer");

const divFooter = document.createElement("div");
divFooter.className = "div-footer";

const editorName = document.createElement("p");
editorName.innerText = "edited by Goarant Wesley"

divFooter.appendChild(editorName);
baliseFooter.appendChild(divFooter);