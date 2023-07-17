const arrayOfContent = [
    "<h2>About</h2><p>This Restuarant has the best food ever in any road, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
    ["ice Cream:10","coffee:4","cookies:5","lemon tart:15","peanut butter breakfast:12"],
    "<h2>Phones</h2><p>XXX-XXX-XXX</p><p>XXX-XXX-XXX</p><h2>Address</h2><p>unknown</p>",

]

function creatCards() {
    for (let i = 0; i < arrayOfContent[1].length; i++) {
    let card = document.createElement("div");
    document.querySelector("div.content").appendChild(card);

    let h2Card = document.createElement("h2");
    card.appendChild(h2Card);

    let pCard = document.createElement("p");
    card.appendChild(pCard);

    h2Card.innerHTML = arrayOfContent[1][i].split(":")[0];
    pCard.innerHTML = `${arrayOfContent[1][i].split(":")[1]} USD`;

}}



let buttons = document.getElementsByTagName("button");
function changeSelect(id) {
    for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = "";
    }
    buttons[id].className = "selected";
    loadContent(id);

}

 window.onload = () => {
    document.querySelector("div.content").innerHTML = arrayOfContent[0];
}

function loadContent(id) {
    if (id != 1) {
        document.querySelector("div.content").innerHTML = arrayOfContent[id];
        document.querySelector("div.content").style.display = "block";
    } else {
        document.querySelector("div.content").innerHTML = "";
        document.querySelector("div.content").style.cssText = "display: grid;grid-template-columns: repeat(3, 1fr);gap: 15px;";
        creatCards(1);
    }
}