const container = document.querySelector("#container");
const triggerBoxes = document.querySelectorAll(".triggers");

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
    const drumName = document.createElement("p");
    const drumHotkey = document.createElement("div");
    const drumKey = document.createElement("kbd");

    drumItem.classList.add("drum-item");
    drumHotkey.classList.add("hotkey");
    drumName.textContent = hotKeys[key].charAt(0).toUpperCase() + hotKeys[key].slice(1);
    drumKey.textContent = `${key}`;

    console.log(hotKeys[key])

    drumHotkey.append(drumKey);
    drumItem.append(drumName, drumHotkey);
    container.append(drumItem);

    drumHotkey.addEventListener("click", () => {
        playSound(key);
        drumGlow(key);
    });
};

window.addEventListener("keypress", (event) => {
    playSound(event.key);
    drumGlow(event.key)
});

function playSound(key) {
    if (hotKeys[key]) new Audio(`./sounds/${hotKeys[key]}.wav`).play();
};

triggerBoxes.forEach(trigger => {
    trigger.addEventListener("click", () => {
        const soundName = trigger.id.split("-")[0];
        const soundKey = Object.keys(hotKeys).find(key => hotKeys[key] === soundName);
        playSound(soundKey); 
    });
});

function drumGlow(key) {
    triggerBoxes.forEach(trigger => {
        if (trigger.id.split("-")[0] === hotKeys[key]) {
            trigger.classList.add("drum-glow-up");
            setTimeout(() => trigger.classList.remove("drum-glow-up"), 200);
        };
    });
};