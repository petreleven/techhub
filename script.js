//get the button
let button = document.getElementById("mybutton");
let paragraph = document.getElementById("myparagraph");
let number = 0;

//when you click we add 1 to the number then show it on the paragraph
button.addEventListener("click", () => {
    number += 1;
    paragraph.innerText = number;
});
