const container = document.getElementById("container");
const triggerBoxes = document.getElementsByClassName("triggers");

// const hotKeys = {
//     clap:    "q",
//     hihat:   "w",
//     kick:    "e",
//     openhat: "r",
//     ride:    "a",
//     snare:   "s",
//     tink:    "d",
//     tom:     "f"
// };

const hotKeys = {
    q: "clap",
    w: "hihat",
    e: "kick",
    r: "openhat",
    a: "ride",
    s: "snare",
    d: "tink",
    f: "tom"
};

for (let key in hotKeys) {
    const drumItem = document.createElement("div");
    const drumKey = document.createElement("kbd");

    drumItem.classList.add("item");
    drumKey.textContent = `${key}`;

    container.append(drumItem);
    drumItem.append(drumKey);

    drumItem.addEventListener("click", () => playSound(key));
};
window.addEventListener("keypress", (event) => playSound(event.key))

function playSound(key) {
    if (hotKeys[key]) new Audio(`./sounds/${hotKeys[key]}.wav`).play();
    }

// window.addEventListener("click", log);

// function log(event) {
//     console.log(event)
// }