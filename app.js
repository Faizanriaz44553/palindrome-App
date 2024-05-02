function result() {
    let userInput = document.querySelector("#userInput")
let para = document.querySelector("#para")
let ready = (userInput.value)
let isPlindrom = ready.split("").reverse("").join("");
if (ready === ("")) {
    para.innerHTML=("Please enter any word");
}
else if (ready===isPlindrom) {
    para.innerHTML = ("Yes this is a plindrom word")
}
else {
    para.innerHTML = ("No this is not a plindrom word please try again letter")
}
}