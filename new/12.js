let a=atr.hasAttribute("class");
console.log(a);

atr.setAttribute("class","first")
console.log(atr.getAttribute("class"));

atr.removeAttribute("class");
console.log(atr.getAttribute("class"));

console.log(atr.attributes);

console.log(atr.dataset);
console.log(atr.dataset.game);
console.log(atr.dataset.character);