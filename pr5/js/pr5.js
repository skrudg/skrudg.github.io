var mainDiv = document.createElement("div");
mainDiv.className = "mainbox";

var header = document.createElement("div");
header.className = "header d-flex flex-column align-items-center justify-content-center";
header.id = "myDIV";

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Введите новое задание");
input.id = "myInput";
header.appendChild(input);

var button = document.createElement("button");
button.setAttribute("onclick", "newElement()");
button.className = "addBtn mt-4";
button.innerHTML = "Нажмите, чтобы добавить";
header.appendChild(button);
mainDiv.appendChild(header);

var divList = document.createElement("div");
divList.className = "mainbox__tasks";
divList.id = "myDivList";

mainDiv.appendChild(divList);
document.body.appendChild(mainDiv);

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    };
}
// Create a new list item when clicking on the "Add" button
function newElement() {
    var divListElement = document.createElement("div");
    divListElement.className = "divListElement";
    var inputValue = input.value;
    var t = document.createTextNode(inputValue);
    divListElement.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        divList.appendChild(divListElement);
    }
    input.value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    divListElement.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}