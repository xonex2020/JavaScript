"use strict";

let li = document.createElement("li");
li.setAttribute("id", "mein-listenelement");

let a = document.createElement("a");
a.setAttribute("id", "mein-ankerelement");
a.setAttribute("href", "#");
let text = document.createTextNode("Element");

a.appendChild(text);
li.appendChild(a);

let liste = document.querySelector("#navigation > ul");

//liste.insertAdjacentElement("beforebegin", li);       //beforebegin
//liste.insertAdjacentElement("afterbegin", li);        //afterbegin
//liste.insertAdjacentElement("beforeend", li);         //beforeend
//liste.insertAdjacentElement("afterend", li);            //afterend


let dom_string = "<li id=\"meinlistenelement\"><a id=\"mein-ankerelement\" href=\"#\">Element</a></li>";

//liste.insertAdjacentHTML("beforebegin", dom_string);    //beforebegin
//liste.insertAdjacentHTML("afterbegin", dom_string);
//liste.insertAdjacentHTML("beforeend", dom_string);
//liste.insertAdjacentHTML("afterend", dom_string);

let text2 = "Lorem ipsum dolor sit amet.";

//liste.insertAdjacentText("beforebegin", text2);     //beforebegin
//liste.insertAdjacentText("afterbegin", text2);     //afterbegin
//liste.insertAdjacentText("beforeend", text2);     //beforeend
liste.insertAdjacentText("afterend", text2);     //afterend