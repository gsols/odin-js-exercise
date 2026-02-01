const container = document.getElementById("container");

const para = document.createElement("p");
para.classList.add("red-text");
para.textContent = "Hey I'm red!";
para.style.color = "red";

container.appendChild(para);

const heading3 = document.createElement("h3");
heading3.classList.add("blue-text");
heading3.textContent = "I'm a blue h3!";
heading3.style.color = "blue";

container.appendChild(heading3);

const divContainer = document.createElement("div");
divContainer.style.border = "1px solid black";
divContainer.style.backgroundColor = "pink";

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div";

const paraInDiv = document.createElement("p");
paraInDiv.textContent = "ME TOO!";

divContainer.appendChild(heading1);
divContainer.appendChild(paraInDiv);

container.appendChild(divContainer);    