// //----------------------
console.log("popup.js");

var elems = chrome.extension.getBackgroundPage().elems;
console.log(elems);
var div = document.getElementById('textView');
div.innerHTML = elems;






