const listItems = document.querySelectorAll("li")
const myHeading = document.querySelector("h1");
const myImage = document.querySelector("img");

const myButton = document.querySelector(".Btn");

// Update the text content of the <h1>
myButton?.addEventListener("click", () => {
    SetUser();
})
myImage?.addEventListener("click", () => {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "Imagem1.png") {
        myImage.setAttribute("src", "smk.jpg");

    }
    else {
        myImage.setAttribute("src", "Imagem1.png");
    }
});

function SetUser() {
    const myName = prompt("Please enter your name");
    if (myName != null && myHeading != null) {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozzila ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    SetUser();
}
else {
    const storedName = localStorage.getItem("name");
    if (myHeading != null)
        myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

if (myHeading != null) {
    myHeading.textContent = "Hello world!";
}
function toggleDone(ele) {
    if (!ele.target.className) {
        ele.target.className = "done"
    }
    else {
        ele.target.className = "";
    }
}

listItems.forEach((item) => {
    item.addEventListener("click", toggleDone);
});