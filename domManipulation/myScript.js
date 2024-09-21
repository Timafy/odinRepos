const container = document.querySelector("#container");

/* adds a paragraph tag with text to the container in the dom */
const redText = document.createElement("p");
redText.style.backgroundColor = "red";
redText.textContent = "Hey I'm red!";

container.appendChild(redText);

const blueText = document.createElement("h3");
blueText.style.backgroundColor = "blue";
blueText.textContent = "I'm a blue h3!";

container.appendChild(blueText);

const div = document.createElement("div");
div.style.cssText = "background-color: pink; border: black";
container.appendChild(div);

const header = document.createElement("h1");
header.textContent = "I'm in a div";
div.appendChild(header);

const paragraph = document.createElement("p");
paragraph.textContent = "ME TOO!";
div.appendChild(paragraph);

const button = document.querySelector("#btn");
button.addEventListener("click", function (e) {
    e.target.style.background = "blue"
});